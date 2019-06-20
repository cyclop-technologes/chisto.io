<template>
  <div class="banner position-relative">
    <Header></Header>
    <slot></slot>
    <Application v-if="footer"></Application>
  </div>
</template>
<script>
import Application from './Application.vue';
import Header from './Header.vue';

export default {
  props: {
    footer: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    Header,
    Application,
  },
};

</script>
<style lang="scss">
@import '../assets/scss/main.scss';
.banner {
  min-height: 100vh;
  background: url('../assets/img/bg-banner.svg');
  background-size: cover;
}
</style>
