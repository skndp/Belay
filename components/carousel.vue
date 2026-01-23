<template>
  <section class="carousel">
    <Header class="logo" />
    <div class="background-wrapper">
      <div class="background-inner">
        <div class="background-transition" :class="transitionClass">
          <div class="background-outer-1">
            <div class="background-inner-1">
              <div
                class="carousel-image-wrap"
                v-for="(image, i) in images"
                :key="i"
                :class="{ current: i === current }"
              >
                <img
                  class="carousel-image"
                  :src="require(`~/static/images/${image.src}`)"
                  :alt="image.alt"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button class="arrow left" @click="slide(-1)"></button>
    <button class="arrow" @click="slide(1)"></button>

    <button class="arrow-trap left" @click="slide(-1)"></button>
    <button class="arrow-trap" @click="slide(1)"></button>

    <div
      class="text-wrapper"
      v-for="(image, i) in images"
      :key="i"
      :class="{ current: i === current }"
    >
      <p class="title spread">{{ image.title }}</p>
      <p class="anchor spread">&mdash;</p>
    </div>
  </section>
</template>

<script>
import Header from "~/components/header";
import ResponsiveImage from "~/components/responsive-image";
export default {
  components: {
    Header,
    ResponsiveImage,
  },
  props: {
    images: {
      type: Array,
    },
  },
  data: function () {
    return {
      current: 0,
      direction: 1,
      transitionClass: "",
    };
  },
  methods: {
    slide(dir) {
      this.direction = dir;
      const duration = 400;
      this.transitionClass = "out";

      window.setTimeout(() => {
        this.transitionClass = "";
      }, duration * 2);

      var len = this.images.length;
      this.current = (this.current + (dir % len) + len) % len;
    },
  },
};
</script>

<style lang="scss">
$iconSize: 22px;
$aspect-ratio: calc(1620px / 2880px);

.carousel {
  position: relative;
  width: 100%;
  height: calc(56.25vw + 180px);
  z-index: 4;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 5;
    height: 100px;
    padding: 20px 0;
    background-color: $deep-blue;
  }

  .arrow {
    display: none;
  }

  .arrow-trap {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: calc(28.125vw + 85px);

    &.left {
      left: 0;
    }
  }

  .text-wrapper {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 80px;
    opacity: 0;
    transition: opacity 700ms;
    z-index: 6;

    p.title, p.anchor {
      position: absolute;
      bottom: 0%;
      left: span(2);
      height: 80px;
      line-height: 80px;
      color: $white;
      font-size: 18px;
    }

    p.anchor {
      left: unset;
      right: span(2);
      text-align: right;
    }

    &.current {
      opacity: 1;
      transition-delay: 700ms;
      z-index: 7;
    }
  }

  .background-wrapper {
    position: relative;
    width: 100%;
    height: 56.25vw;

    .background-inner {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: #220178;

      .background-transition {
        width: 100%;
        height: 100%;
        perspective: 800px;
        overflow: hidden;
        transform-style: preserve-3d;

        .background-outer-1 {
          width: 100%;
          height: 100%;
          perspective: 800px;
          transform-origin: 100% 0%;
          transform: rotateX(0deg) rotateY(0deg);
          transition: transform 400ms cubic-bezier(0.666, 0, 0.333, 1);
          transform-style: preserve-3d;
          backface-visibility: hidden;

          .background-inner-1 {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            transform-origin: 0% 100%;
            transform: rotateY(0deg) rotateX(0deg);
            transition: transform 400ms cubic-bezier(0.666, 0, 0.333, 1) 300ms;
            transform-style: preserve-3d;
            backface-visibility: hidden;

            .carousel-image-wrap {
              background-color: $deep-blue;
              opacity: 0;
              position: absolute;
              transition: opacity 700ms;
              z-index: 6;
              bottom: 0;
              left: 0px;
              top: 0;
              width: 100%;
              object-position: bottom;

              &.current {
                opacity: 1;
                transition-delay: 700ms;
                z-index: 7;
              }
              .carousel-image {
                position: absolute;
                width: 100%;
                height: auto;
                bottom: 0px;
                left: 0px;
              }
            }
          }
        }
      }
      .background-transition.out {
        .background-outer-1 {
          transform: rotateX(-3deg);
          .background-inner-1 {
            transform: rotateX(3deg);
          }
        }
      }
    }
  }
}

@include respond-to($tablet) {
  .carousel {
    .arrow {
      display: block;
      position: absolute;
      cursor: pointer;
      top: 0;
      right: span(2);
      margin-top: calc(28.125vw + 85px);

      &.left {
        right: auto;
        left: span(2);
      }
    }

    .arrow-trap {
      display: none;
    }
  }
}

@include respond-to('(min-width: 768px) and (orientation: landscape)') {
  .carousel {
    width: 100%;
    height: 100vh;

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      z-index: 5;
      height: 130px;
      left: 0;
      right: 0;
      top: 0;
      background-color: rgba(0,0,0,0);
    }

    .arrow {
      display: block;
      position: absolute;
      cursor: pointer;
      top: auto;
      bottom: 50%;
      right: span(2);
      margin-top: 0;
      margin-bottom: 25px;

      &.left {
        left: span(2);
      }
    }

    .background-wrapper {
      height: calc(100vh - 80px);
      .background-inner {
        .background-transition {
          .background-outer-1 {
            .background-inner-1 {
               .carousel-image-wrap {
                 object-position: bottom;
                 .carousel-image {
                  object-fit: cover;
                  height: 100%;
                 }
               }
            }
          }
        }
      }
    }
  }
}
</style>
