<template>
  <div class="home-page position-relative">
    <Banner :footer='false'>
      <!-- <div class="container image-container">
        <img class="home-banner-image" src="../assets/img/banner-image.svg">
      </div> -->
      <HomeBanner></HomeBanner>
    </Banner>
    <Middle>
      <HomeMiddle></HomeMiddle>
      <CarouselMobile></CarouselMobile>
    </Middle>
    <Footer></Footer>

  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import HomeBanner from '../components/HomeBanner.vue';
import Middle from '../components/Middle.vue';
import HomeMiddle from '../components/HomeMiddle.vue';
import CarouselMobile from '../components/CarouselMobile.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'home',
  components: {
    Banner,
    HomeBanner,
    Middle,
    HomeMiddle,
    CarouselMobile,
    Footer,
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/scss/main.scss';
</style>
