<template>
  <div class="outer">
    <Carousel
      :images="[
        {
          src: 'carousel/flora.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 60%',
          title: 'FLORA',
          date: '2023'
        },
        {
          src: 'carousel/pop_denver.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 100%',
          title: 'POP DENVER',
          date: '2023'
        },
        {
          src: 'carousel/tennyson.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 100%',
          title: '4353 TENNYSON',
          date: '2023'
        },
        {
          src: 'carousel/sunny_side.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 50%',
          title: 'SUNNYSIDE FLATS',
          date: '2025'
        },
        {
          src: 'carousel/condor.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 100%',
          title: 'CONDOR',
          date: '2020'
        }
      ]"
    />
    <About
      :img1="{
        src: 'about/small-block.svg',
        alt: 'A small cube ',
        width: '154',
        height: '170'
      }"
      :img2="{
        src: 'about/medium-block.svg',
        alt: 'A medium cube',
        width: '665',
        height: '474'
      }"
      :img3="{
        src: 'about/large-block.svg',
        alt: 'A large cube',
        width: '1440',
        height: '1096'
      }"
    />
    <PropertyTypes
      :img1="{
        src: 'property-types/iconset-horizontal.png',
        alt: 'a 5 by 3 grid of illustrations of different building types',
        width: '2880',
        height: '1670'
      }"
      :img2="{
        src: 'property-types/iconset-vertical-update.png',
        alt: 'a 2 by 7 grid of illustrations of different building types',
        width: '1152',
        height: '3892'
      }"
    />
    <Tagline/>
    <Footer
      :img1="{
        src: 'footer/footer-big-block.svg',
        alt: 'A medium cube'
      }"
      :img2="{
        src: 'footer/footer-small-block.svg',
        alt: 'A small cube',
        width: '168',
        height: '118'
      }"
    />
  </div>
</template>

<script>
import Carousel from '~/components/carousel';
import About from '~/components/about';
import PropertyTypes from '~/components/property-types';
import Tagline from '~/components/tagline';
import Footer from '~/components/footer';

export default {
  components: {
    Carousel,
    About,
    PropertyTypes,
    Tagline,
    Footer
  }
}
</script>
