<template>
  <div class="home-page position-relative">
    <Banner></Banner>
    <Middle></Middle>
    <Footer></Footer>

  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import Middle from '../components/Middle.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'home',
  components: {
    Banner,
    Middle,
    Footer,
  },
};
</script>
<style lang="scss">
@import '../assets/scss/main.scss';
.home-page {

}

</style>
