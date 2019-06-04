<template>
  <div class="banner position-relative">
    <Application></Application>
  </div>
</template>
<script>
import Application from '../components/Application.vue';

export default {
  components: {
    Application,
  },
};

</script>
<style lang="scss">
@import '../assets/scss/main.scss';
.banner {
  min-height: 100vh;
  background: url('../assets/img/bg-banner.svg')
}
</style>
