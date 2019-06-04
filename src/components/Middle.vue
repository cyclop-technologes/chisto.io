<template>
  <div class="middle-block">
    <AboutMiddle></AboutMiddle>
  </div>
</template>
<script>
import AboutMiddle from '../components/AboutMiddle.vue';

export default {
  components: {
    AboutMiddle,
  },
};
</script>
<style lang="scss">
@import '../assets/scss/main.scss';
.middle-block {
  height: 100vh;
  background-color: $gray;
  position: relative;
  z-index: 2;
}

</style>
