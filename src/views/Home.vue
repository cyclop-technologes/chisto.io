<template>
  <div class="home-page position-relative">
    <Banner :footer='false'>
      <div class="container image-container">
        <img class="home-banner-image" src="../assets/img/banner-image.svg">
      </div>
      <HomeBanner></HomeBanner>
    </Banner>
    <Middle>
      <HomeMiddle></HomeMiddle>
    </Middle>
    <Footer></Footer>

  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import HomeBanner from '../components/HomeBanner.vue';
import Middle from '../components/Middle.vue';
import HomeMiddle from '../components/HomeMiddle.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'home',
  components: {
    Banner,
    HomeBanner,
    Middle,
    HomeMiddle,
    Footer,
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.home-page {
}
.image-container {
  flex: 100%;
  position: relative;
  max-width: 100%;
}
.home-banner-image {
  position: absolute;
  margin-top: auto;
  max-width: 100%;
  max-height: 100%;
  bottom: 0;
}

</style>
