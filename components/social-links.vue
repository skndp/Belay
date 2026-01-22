<template>
  <ul class="socials">
    <li v-for="link in links" :key="link.url">
      <a :class="link.type" :href="link.url" target="_blank" rel="noreferrer noopener" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    links: {
      type: Array
    }
  },
}
</script>

<style lang="scss">
$iconSize: 22px;

ul.socials {
  width: 100%;
  // margin: -9px 0 $margin-normal -9px;
  display: flex;
  li {
    display: flex;
    a {
      position: relative;
      width: 40px;
      height: 40px;
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: $iconSize;
        height: $iconSize;
        margin: -11px 0 0 -11px;
      }
      &.instagram:after {
        @include icon("instagram", $white, true);
      }
      &.linkedin:after {
        @include icon("linkedin", $white, true);
      }
      &.twitter:after {
        @include icon("twitter",$white, true);
      }
    }
  }
  @include can-hover {
    li {
      a {
        transition: opacity 250ms linear;

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
}
</style>
