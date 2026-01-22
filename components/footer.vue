<template>
  <footer>
    <div class="medium-relative">
      <div
        class="medium-wrapper"
        v-event-horizon:parallax="{ y: { from: 0, to: 150 } }"
      >
        <div class="medium-block">
          <div
            class="image__inner-medium"
            :style="{ paddingBottom: (img2.height / img2.width) * 100 + '%' }"
          />
          <ResponsiveImage :src="`${img2.src}`" :alt="`${img2.alt}`" lazy />
        </div>
      </div>
    </div>
    <div class="footer-wrapper">
      <div class="footer__column-left">
        <div class="form-text">
          <h5 class="title-cta">Stay in Touch</h5>
          <p class="subtext">Get updates delivered to your inbox.</p>
          <EmailCta/>
        </div>
        <ResponsiveImage :src="`${img1.src}`" :alt="`${img1.alt}`" lazy />
      </div>

      <div class="social-flex">
        <div class="footer__column-right">
          <div class="channel-inner">
            <p class="small-title spread">Our Channels</p>
            <a class="mail-wrapper" href="mailto:info@belaydev.com">
              <div class="mail-icon" />
              <p class="email-para small">INFO@BELAYDEV.COM</p>
            </a>
            <a class="phone-wrapper" href="tel:(720) 466-5132">
              <div class="phone-icon" />
              <p class="phone-number small">(720) 466-5132</p>
            </a>
          </div>
        </div>
        <div class="footer__column-socials">
          <div class="socials">
            <SocialLinks
              :links="[
                {
                  type: 'instagram',
                  url: 'https://www.instagram.com/belay_development/?utm_medium=copy_link',
                },
                {
                  type: 'linkedin',
                  url: 'https://www.linkedin.com/company/belay-dev',
                },
                {
                  type: 'twitter',
                  url: 'https://twitter.com/belaydev?s=21',
                },
              ]"
            />
          </div>
        </div>
      </div>
      <div class="column-bottom">
        <div class="policies">
          <p class="copyright mega-small">Copyright &copy; {{ new Date().getFullYear() }} Belay Development. All Rights Reserved.</p>
        </div>
      </div>

    </div>
  </footer>
</template>
<script>
import SocialLinks from "~/components/social-links.vue";
import ResponsiveImage from "~/components/responsive-image";
import EmailCta from "~/components/email-cta";
export default {
  components: {
    SocialLinks,
    ResponsiveImage,
    EmailCta,
  },
  props: {
    img1: {
      type: Object,
      default: () => {
        return {
          src: "",
          alt: "",
          height: "",
          width: "",
        };
      },
    },
    img2: {
      type: Object,
      default: () => {
        return {
          src: "",
          alt: "",
          height: "",
          width: "",
        };
      },
    },
  },
};
</script>

<style lang="scss">
$iconSize: 22px;

footer {
  width: 100%;
  background-color: $deep-blue;
  color: white;

  .footer-wrapper {
    position: relative;
    padding: 0 span(2);
    padding-bottom: span(4);
    overflow: hidden;

    .footer__column-left {
      //width: span(28);
      position: relative;
      width: 160%;
      margin-bottom: span(5);
      margin-left: -33%;

      .form-text {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-top: 0;

        .subtext {
          margin-top: $margin-extra-small
        }
      }
    }

    .social-flex {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: $margin-normal;

      .footer__column-right {
        .channel-inner {
          .small-title {
            margin-bottom: $margin-normal;
          }

          .mail-wrapper {
            display: flex;
            align-items: center;
            flex-direction: row;
            margin-bottom: $margin-normal;
            color: $white;

            .mail-icon {
              position: relative;
              height: 18px;
              width: 18px;
              &:after {
                content: "";
                position: absolute;
                width: 100%;
                top: 0%;
                left: 0;
                height: 18px;
                width: 18px;
                @include icon("mail", $white, true);
                transition: transform $speed-demon ease;
              }
            }

            .email-para {
              margin-left: $margin-small;
            }
          }

          .phone-wrapper {
            display: flex;
            align-items: center;
            flex-direction: row;
            color: $white;

            .phone-icon {
              position: relative;
              height: 18px;
              width: 18px;
              &:after {
                content: "";
                position: absolute;
                width: 100%;
                top: 0%;
                left: 0;
                height: 18px;
                width: 18px;
                @include icon("phone", $white, true);
                transition: transform $speed-demon ease;
              }
            }
            .phone-number {
              margin-left: $margin-small;
            }
          }
        }
      }

      .footer__column-socials {
        margin-top: -9px;
        .socials {
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          li:not(:last-child) a {
            margin-bottom: $margin-small;
          }
        }
      }
    }
    .column-bottom {
      .policies {
        display: flex;
        align-items: center;
        .policy {
          white-space: nowrap;
          margin-right: $margin-normal;
        }
        .copyright {
          white-space: nowrap;
        }
      }
    }
  }

  .medium-relative {
    position: relative;
    .medium-wrapper {
      position: absolute;
      top: -75px;
      right: 2%;
      z-index: 1;

      .medium-block {
        position: relative;
        width: span(8);

        img {
          @include abs-fill;
        }
      }
    }
  }
}

@include respond-to($tablet) {
  footer {
    .footer-wrapper {
      @include grid;
      padding: span(1);
      // padding-bottom: span(2);

      .footer__column-left {
        // width: span(16);
        height: 100%;
        position: relative;
        margin-bottom: 0;
        grid-column: 1 / span 17;
        grid-row: 1 / span 3;
        width: 100%;
        margin-left: 0%;

        .form-text {
          margin-top: $margin-small;
          .subtext {
            margin-top: $margin-extra-small;
            padding-right: span(0.5);
          }
        }
      }

      .social-flex {
        grid-column: 18 / span 11;
        grid-row: 2;
        justify-content: space-between;
        margin-bottom: $margin-normal;

        .footer__column-right {
          .channel-inner {
            .small-title {
              margin-bottom: $margin-normal;
            }

            .mail-wrapper {
              margin-bottom: $margin-normal;

              .mail-icon {
                position: relative;
                height: 22px;
                width: 22px;
                &:after {
                  height: 22px;
                  width: 22px;
                }
              }

              .email-para {
                margin-left: $margin-small;
              }
            }

            .phone-wrapper {
              .phone-icon {
                height: 22px;
                width: 22px;
                &:after {
                  height: 22px;
                  width: 22px;
                }
              }
              .phone-number {
                margin-left: $margin-small;
              }
            }
          }
        }
        .footer__column-socials {
          .socials {
            li:not(:last-child) a {
              margin-bottom: $margin-small;
            }
          }
        }
      }

      .column-bottom {
        grid-column: 16 / span 8;
        grid-row: 3;
        // margin-top: $margin-extra-large;
      }
    }

    .medium-relative {
      .medium-wrapper {
        top: -75px;
        left: 38%;

        .medium-block {
          width: span(4);
        }
      }
    }
  }
}

@include respond-to($large-tablet) {
  footer {
    .footer-wrapper {
      @include grid;
      padding: 0 span(2) span(1) span(2);

      .footer__column-left {
        height: 100%;
        position: relative;
        margin-bottom: 0;
        grid-column: 1 / span 16;
        grid-row: 1 / span 3;
        width: 100%;
        margin-left: 0%;
        .form-text {
          margin-top: 0;
          .email-wrapper {
            .email {
              padding: 12px;
              width: span(8);
            }
            .right-arrow {
              height: 41px;
              width: 41px;
              &:after {
                height: 26px;
                width: 26px;
              }
            }
          }
        }
      }
      .social-flex {
        margin-bottom: $margin-large - 5px;

        .footer__column-socials {
          .socials {
            li:not(:last-child) a {
              margin-bottom: $margin-small;
            }
          }
        }
      }
      .column-bottom {
        grid-column: 18 / span 5;
        grid-row: 3;
      }
    }
  }
}

@include respond-to($desktop) {
  footer {
    .footer-wrapper {
      padding: 0 span(2) span(1) span(2);
      @include grid;

      .footer__column-left {
        position: relative;
        margin-bottom: 0;
        grid-column: 1 / span 14;
        grid-row: 1 / span 3;
        width: 100%;
        margin-left: 0%;

        .form-text {
          margin-top: 0;
          .subtext {
            margin-top: $margin-small;
          }
        }
      }

      .social-flex {
        grid-column: 19 / span 10;
        grid-row: 2;
        justify-content: space-between;
        margin-bottom: span(1.5);

        .footer__column-right {
          .channel-inner {
            .small-title {
              margin-bottom: $margin-normal;
            }

            .mail-wrapper {
              display: flex;
              align-items: center;
              flex-direction: row;
              margin-bottom: $margin-normal;

              .mail-icon {
                position: relative;
                height: 20px;
                width: 20px;
                &:after {
                  height: 20px;
                  width: 20px;
                }
              }

              .email-para {
                margin-left: $margin-small;
              }
            }

            .phone-wrapper {
              display: flex;
              align-items: center;
              flex-direction: row;

              .phone-icon {
                height: 20px;
                width: 20px;
                &:after {
                  height: 20px;
                  width: 20px;
                }
              }
              .phone-number {
                margin-left: $margin-small;
              }
            }
          }
        }
      }

      .column-bottom {
        grid-column: 19 / span 5;
        grid-row: 3;
      }
    }

    .medium-relative {
      .medium-wrapper {
        top: -75px;
        left: 38%;
        .medium-block {
          width: span(4);
        }
      }
    }
  }
}
</style>
