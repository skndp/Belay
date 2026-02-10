<template>
  <div class="outer">
    <Carousel
      :images="[
        {
          src: 'carousel/_0002_FLORA_1.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 60%',
          title: 'FLORA',
          date: '2023'
        },
        {
          src: 'carousel/_0003_FLORA_2.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 60%',
          title: 'FLORA',
          date: '2023'
        },
        {
          src: 'carousel/_0004_FLORA_3.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 60%',
          title: 'FLORA',
          date: '2023'
        },
        {
          src: 'carousel/_0010_LUMINA_01.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 60%',
          title: 'LUMINA',
          date: '2023'
        },
        {
          src: 'carousel/_0011_LUMINA_02.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 60%',
          title: 'LUMINA',
          date: '2023'
        },
        {
          src: 'carousel/_0012_LUMINA_03.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 60%',
          title: 'LUMINA',
          date: '2023'
        },
        {
          src: 'carousel/_0018_Sunnyside Flats_01.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 60%',
          title: 'Sunnyside Flats',
          date: '2023'
        },
        {
          src: 'carousel/_0019_Sunnyside Flats_02.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 60%',
          title: 'Sunnyside Flats',
          date: '2023'
        },
        {
          src: 'carousel/_0020_Sunnyside Flats_03.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 60%',
          title: 'Sunnyside Flats',
          date: '2023'
        },
        {
          src: 'carousel/_0007_Framework_01.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 60%',
          title: 'Framework',
          date: '2023'
        },
        {
          src: 'carousel/_0008_Framework_02.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 60%',
          title: 'Framework',
          date: '2023'
        },
        {
          src: 'carousel/_0009_Framework_03.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 60%',
          title: 'Framework',
          date: '2023'
        },
        {
          src: 'carousel/_0013_POP_01.jpeg.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 60%',
          title: 'POP',
          date: '2023'
        },
        {
          src: 'carousel/_0014_POP_02.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 60%',
          title: 'POP',
          date: '2023'
        },
        {
          src: 'carousel/_0015_POP_03.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 60%',
          title: 'POP',
          date: '2023'
        },
        {
          src: 'carousel/_0000_4353 Tennyson_01.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 60%',
          title: '4353 Tennyson',
          date: '2023'
        },
        {
          src: 'carousel/_0001_4353 Tennyson_02.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 60%',
          title: '4353 Tennyson',
          date: '2023'
        },

        {
          src: 'carousel/_0005_Feltraiger_01.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 60%',
          title: 'Feltraiger',
          date: '2023'
        },
        {
          src: 'carousel/_0006_Feltraiger_02.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 60%',
          title: 'Feltraiger',
          date: '2023'
        },
        {
          src: 'carousel/_0016_STK_01.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 60%',
          title: 'STK',
          date: '2023'
        },
        {
          src: 'carousel/_0017_STK_02.jpg',
          alt: 'A picture of a commercial building',
          width: '2880',
          height: '1620',
          className: 'first',
          objectPosition: '50% 60%',
          title: 'STK',
          date: '2023'
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
