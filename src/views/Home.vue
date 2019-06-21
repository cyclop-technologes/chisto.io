<template>
  <div class="home-page position-relative">
    <Banner :footer='false'>
      <img class="home-banner-image" src="../assets/img/banner-image.svg">
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
<style lang="scss">
@import '../assets/scss/main.scss';
.home-page {

}
.home-banner-image {
  margin-top: -110px;
  height: 100%;
  object-fit: contain;
}

</style>
