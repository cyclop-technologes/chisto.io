<template>
  <div class="repair-page position-relative">
    <Banner>
      <RepairBanner></RepairBanner>
    </Banner>
    <Middle>
      <RepairMiddle></RepairMiddle>
    </Middle>
    <Footer></Footer>

  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import RepairBanner from '../components/RepairBanner.vue';
import Middle from '../components/Middle.vue';
import RepairMiddle from '../components/RepairMiddle.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'repair',
  components: {
    Banner,
    RepairBanner,
    Middle,
    Footer,
    RepairMiddle,
  },
};
</script>
<style lang="scss">
@import '../assets/scss/main.scss';
.repair-page {

}
</style>
