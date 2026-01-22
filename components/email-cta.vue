<template>
  <div class="email-cta">
    <div class="email-cta__inner">
      <form
        ref="formRef"
        :name="form_name"
        method="POST"
        :class="{ succeeded, processing }"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
      >
        <input
          type="text"
          id="filter"
          name=""
          tabindex="-1"
          value=""
          aria-label="Honeypot"
        />
        <div
          class="fieldset"
          :class="[
            'email',
            {
              error:
                (!email.focused && email.error) ||
                (send_attempted && !email.value),
              focused: email.focused || (email.value && email.value.length > 0),
            },
          ]"
        >
          <div class="field label">
            <label :for="`cf-email`">ENTER YOUR EMAIL</label>
          </div>
          <div class="field">
            <input
              :id="`cf-email`"
              v-model="email.value"
              type="text"
              name="EMAIL"
              @focus="email.focused = true"
              @blur="email.focused = false"
            />
          </div>
        </div>
        <div class="fieldset success" :class="{ active: succeeded }">
          <p class="subtext">{{ success_message }}</p>
        </div>
        <button
          class="button red"
          type="submit"
          :id="`${form_name}-submit`"
          :disabled="!ready_to_send"
        />
        <label
          class="submit-button"
          :class="{ loading: processing }"
          :for="`${form_name}-submit`"
        />
      </form>
      <p class="error" :class="{ active: error }">{{ error_message }}</p>
    </div>
  </div>
</template>

<script>
import debounce from "lodash.debounce";
import axios from 'axios';

export default {
  data() {
    return {
      form_name: "subscribe-form",
      email: {
        value: undefined,
        focused: false,
        validate: (val) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val),
      },
      failed: false,
      succeeded: false,
      processing: false,
      ready_to_send: false,
      send_attempted: false,
      error: undefined,
      error_message: "Please add a valid email above",
      success_message: "Email added, thank you!",
    };
  },
  watch: {
    email: {
      handler: function () {
        if (this.processing) return;
        this.debounced_validate();
      },
      deep: true,
    },
  },
  mounted() {
    this.debounced_validate = debounce(this.validate, 500);
  },
  methods: {
    validate() {
      // validation
      if (
        typeof this.email.value === "undefined" ||
        this.email.value.length === 0 ||
        this.email.value === " "
      ) {
        this.error = false;
        this.ready_to_send = false;
        return;
      }

      const valid = this.email.validate(this.email.value);

      this.error = false;

      // If any fields are invalid or there is an error with the logo
      if (!valid) {
        this.error = true;
        this.ready_to_send = false;
      } else {
        // this.logo_field.error = false;
        this.ready_to_send = true;
      }
    },

    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },

     handleSubmit () {
      // if (this.processing || this.succeeded) return;
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/",
        this.encode({
          // "form-name": this.form_name,
          "EMAIL" : this.email.value
        }),

        axiosConfig
      );
      this.processing = false;
      this.succeeded = true;
    },

    async onSubmit(e) {
      // prevent resubmission;
      if (this.processing || this.succeeded) return;
      // this.send_attempted = true;

      // validate
      this.validate();

      if (this.error) {
        this.processing = false;
        this.failed = true;
        e.preventDefault();
        return;
      }

      // if valid, continue
      this.processing = false;
      this.succeeded = true;
    },

    reset(clear) {
      this.send_attempted = false;
      this.failed = false;
      this.succeeded = false;

      if (clear === true) {
        this.$set(this.email, "value", "");
      }
    },
  },
};
</script>


<style lang="scss">
.email-cta {
  overflow: hidden;
  position: relative;
  margin-top: $margin-normal;

  .email-cta__inner {
    text-align: center;
    color: white;

    form {
      width: span(22);
      display: flex;
      overflow: hidden;
      transition: background-color $speed-demon ease;
      position: relative;
      border: none;

      &.succeeded {
        .fieldset.email {
          opacity: 0;
          visibility: hidden;
        }

        .submit-button {
          transform: translate(100%, 0);
        }

        .error {
          opacity: 0;
          visibility: hidden;
        }

        .success {
          opacity: 1;
          visibility: visible;
        }
      }

      .fieldset {
        flex: 1;

        &.focused {
          .field.label {
            opacity: 0;
          }
        }

        .field.label {
          position: absolute;
          top: 0;
          left: 0;
          padding: 3px 4px;
          transition: opacity $speed-demon ease;

          label {
            color: $black;
            font-family: $montessarat;
            padding: 6px $margin-small;
          }
        }

        .field {
          background: $white;

          input {
            width: 100%;
            padding: 8px $margin-small;
            background: none;
            color: $black;
            border: none;
            outline: none;
          }
        }
      }

      .success {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: left;

        p.subtext {
          margin: 0;
          font-weight: bold;
        }

         &.active {
            opacity: 1;
        }
      }

      button {
        visibility: hidden;
        width: 0;
        height: 0;
        padding: 0;
        margin: 0;
        border: none;

        &:disabled + .submit-button {
          &:after {
            opacity: 0.6;
          }
          background: $dark-blue;
          cursor: unset;
        }
      }

      .submit-button {
        position: relative;
        width: span(3);
        background: $dark-blue;
        transition: background-color $speed-demon ease,
        transform $speed-demon $evil-ease;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        &:after {
          content: "";
          position: absolute;
          left: 20%;
          top: 20%;
          width: 60%;
          height: 60%;
          @include icon("right-arrow-mail", $white, true);
          background-position: 50% 50%;
          background-size: contain;
          margin: auto;
        }

        &.loading:after {
          top: 0%;
          left: 0%;
          width: 23px;
          height: 23px;
          background: black;
          position: relative;
          margin: 0;
          padding: 0;
          transform-origin: center;
        }
      }
    }

    .error {
      opacity: 0;
      transition: opacity $speed-demon ease;
      font-family: $montessarat;
      margin-top: $margin-small;
      display: inline-block;
      font-size: 12px;
      padding-bottom: 4px;
      border-bottom: 3px solid $dark-blue;
      letter-spacing: 0.05em;

      &.active {
        opacity: 1;
      }
    }
  }
}

#filter {
  position: absolute;
  top: -9999px;
  left: -9999px;
}

@include respond-to($tablet) {
  .email-cta {
    .email-cta__inner {
      form {
        width: span(10);
        .submit-button {
          width: span(1.2);
        }

        .fieldset{
          .field.label {
            // padding: 3px $margin-small;
            padding: 6px 4px;
            transition: opacity $speed-demon ease;

            label {
              padding: 3px $margin-small;
            }
          }
        }
        .field {
          background: $white;
          input {
            padding: 8px $margin-small;
          }
        }
      .error {
        margin-top: $margin-normal;
        // font-size: 14px;
      }
      }
    }
  }
}

// @include respond-to($tablet-landscape) {
//   .email-cta {
//     .email-cta__inner {
//       .success {
//         // font-size: 16px;
//       }
//       form{
//         .submit-button {
//         // width: span(0.8);
//         }
//       }
//     }
//   }
// }
@include respond-to($desktop) {
  .email-cta {
    .email-cta__inner {
      form{
         width: span(8);
        .fieldset{
          .field.label {
            padding: 4px 4px;
            transition: opacity $speed-demon ease;
            label {
              padding: 3px $margin-small;
            }
          }
        }
        .submit-button {
          width: span(1);
        }
      }
    }
  }
}

</style>
