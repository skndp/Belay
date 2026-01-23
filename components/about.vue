<template>
  <section class="about">
    <div class="small-block-wrapper" v-event-horizon:parallax="{y: {from: 0, to: 100}}">
      <div class="small-block">
        <div class="image__inner-small" :style="{paddingBottom: img1.height / img1.width * 100 + '%'}"/>
        <ResponsiveImage :src="`${img1.src}`" :alt="`${img1.alt}`" lazy />
      </div>
    </div>

    <div class="small-block-wrapper-mobile" v-event-horizon:parallax="{y: {from: 0, to: 75}}">
      <div class="small-block-mobile">
        <div class="image__inner-small-mobile" :style="{paddingBottom: img1.height / img1.width * 100 + '%'}"/>
        <ResponsiveImage :src="`${img1.src}`" :alt="`${img1.alt}`" lazy />
      </div>
    </div>

    <div class="text-box">
      <h3 class="title-upper">Our Angle</h3>
      <h6 class="subtitle spread">About Us</h6>
      <p class="text">Belay is a full-service real estate development and owner&apos;s representative company based in Colorado. With more than 18 years of experience in construction, contracting, and development, our skillful team can execute on a wide range of project types. From shepherding the entire development and construction processes to site acquisition, asset management and sale—we bring a wealth of experience and a grounded perspective to each and every project.</p>
      <p class="text">We tailor our approach to meet the specific goals of our clients and investors, leveraging our vast network of highly-skilled industry partners for strategic collaboration and integration.</p>
      <p class="text">Above all, we create exceptional value for our partners by delivering high-performing assets that enrich our communities.</p>
    </div>

    <div class="medium-block-wrapper" v-event-horizon:parallax="{y: {from: 0, to: 350}}">
      <div class="medium-block">
        <div class="image__inner-medium" :style="{paddingBottom: img2.height / img2.width * 100 + '%'}"/>
        <ResponsiveImage :src="`${img2.src}`" :alt="`${img2.alt}`" lazy />
      </div>
    </div>

    <div class="medium-block-wrapper-mobile" v-event-horizon:parallax="{y: {from: 0, to: 300}}">
      <div class="medium-block-mobile">
        <div class="image__inner-medium-mobile" :style="{paddingBottom: img2.height / img2.width * 100 + '%'}"/>
        <ResponsiveImage :src="`${img2.src}`" :alt="`${img2.alt}`" lazy />
      </div>
    </div>

    <div class="large-block-wrapper">
      <div class="large-block">
        <div class="image__inner-large" :style="{paddingBottom: img3.height / img3.width * 100 + '%'}"/>
        <ResponsiveImage :src="`${img3.src}`" :alt="`${img3.alt}`" lazy />
      </div>
   </div>
  </section>
</template>

<script>
import ResponsiveImage from "~/components/responsive-image";
  export default{
    components: {
      ResponsiveImage
    },
    props: {
      img1:
      {
        type: Object,
        default: () => {
          return {
            src: "",
            alt: "",
            height: "",
            width: ""
          }
        }
      },
      img2:
      {
        type: Object,
        default: () => {
          return {
            src: "",
            alt: "",
            height: "",
            width: ""
          }
        }
      },
      img3:
      {
        type: Object,
        default: () => {
          return {
            src: "",
            alt: "",
            height: "",
            width: ""
          }
        }
      },
    },
  }
</script>

<style lang="scss">
.about{
  background-color: $deep-blue;
  color: $white;
  position: relative;
  // height: span(48);

  
  height: auto;
  width: 100%;
  margin-top: -80px;

  .text-box {
    text-align: left;
    padding: span(12) span(2) span(1) span(2);
    z-index: 5;
    position: relative;

    .title-upper{
      margin-bottom: $margin-normal;
    }
    .subtitle{
      padding-bottom: span(1);
      border-bottom: 2px solid $light-blue;
      margin-bottom: $margin-small;
    }

    .text {
      margin-bottom: $margin-small;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

    .small-block-wrapper{
      z-index: 4;
      left: 65%;
      top: -8%;
      position: absolute;
      display: none;
      transition: transform 111ms linear;
      .small-block {
        z-index: 4;
        position: relative;
        width: span(4);
        display: none;

        img {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0px;
          left: 0px;
        }
      }
    }

    .small-block-wrapper-mobile{
      position: absolute;
      left: 63%;
      top: -40px;
      z-index: 4;
      display: block;
      transition: transform 111ms linear;
      .small-block-mobile {
        position: relative;
        width: span(4);
        display: block;
        img {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0px;
          left: 0px;
        }
      }
    }

  .medium-block-wrapper{
    position: absolute;
    left: 10%;
    top: 2%;
    z-index: 2;
    display: none;
    transition: transform 111ms linear;
    .medium-block {
      position: relative;
      width: span(12);
      display: none;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
      }
    }
  }

  .medium-block-wrapper-mobile{
    position: absolute;
    left:-10%;
    top: -100px;
    z-index: 2;
    display: block;

    .medium-block-mobile {
      position: relative;
      width: span(18);
      display: block;

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
      }
    }
  }

  .large-block-wrapper{
    position: absolute;
    bottom: -24%;
    width: 100%;
    z-index: 1;
    // height: span(34);
    height: auto;
    overflow: hidden;

    .large-block {
      position: relative;
      width: 150%;
      transform: translateX(-25%);
      // height: span(34);
       height: auto;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
      }
    }
  }
}

  @include respond-to($tablet) {
    .about{
      // height: span(18);
      .text-box {
        padding: span(6) span(8) span(1) span(2);
        // z-index: 4;

        .title-upper{
          margin-bottom: $margin-large;
        }
        .subtitle{
          margin-bottom: $margin-large;
          border-bottom: 2px solid $light-blue;
          padding-bottom: $margin-normal;
        }
      }

      .small-block-wrapper{
        display: block;
        left: 70%;
        top: -30px;
        .small-block {
          display: block;
        }
      }

      .small-block-wrapper-mobile{
        display: none;
        .small-block-mobile {
          display: none;
        }
      }

    .medium-block-wrapper{
      left: 10%;
      top: -30px;
      display: block;
      .medium-block{
        display: block;
        width: span(12);
      }
    }

    .medium-block-wrapper-mobile{
      display: none;
      .medium-block-mobile {
        display: none;
      }
    }
      .large-block-wrapper{
        // bottom: -58%;
        bottom: -50%;
        height: auto;
        .large-block{
         width: 100%;
         transform: translateX(0);
        //  height: span(22);
         height: auto;
      }
      }
    }
  }

  @include respond-to($desktop) {
  .about{
    .text-box {
      padding: span(6) 0 span(1) span(2);
      width: 960px;

      .title-upper{
        margin-bottom: $margin-extra-large;
      }
      .subtitle{
        margin-bottom: $margin-extra-large;
        padding-bottom: $margin-large;
      }
    }
    .small-block-wrapper{
      display: block;
      left: 65%;
      top: -30px;
      .small-block {
        display: block;
      }
    }

    .small-block-wrapper-mobile{
      display: none;
      .small-block-mobile {
        display: none;
      }
    }

    .medium-block-wrapper{
      display: block;
      top: -10px;
      .medium-block{
        display: block;
        width: span(12);
      }
    }

    .medium-block-wrapper-mobile{
      display: none;
      .medium-block-mobile {
        display: none;
      }
    }

    .large-block-wrapper{
      bottom: -72%;
      // height: span(22);
      height: auto;

      .large-block{
         width: 100%;
         transform: translateX(0);
        //  height: span(22);
         height: auto;
      }
    }
  }
}

</style>
