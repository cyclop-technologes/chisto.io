<template>
  <div class="banner position-relative">
    <Header></Header>
    <slot></slot>
    <Application v-if="footer"></Application>
    <Navigation></Navigation>
  </div>
</template>
<script>
import Application from './Application.vue';
import Navigation from './Navigation.vue';
import Header from './Header.vue';

export default {
  props: {
    footer: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Header,
    Application,
    Navigation,
  },
};

</script>
<style lang="scss">
@import '../assets/scss/main.scss';
.banner {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: url('../assets/img/bg-banner.svg');
  background-size: cover;
}
</style>
