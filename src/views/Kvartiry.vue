<template>
  <div class="flat-page position-relative">
    <Banner>
      <KvartiryBanner></KvartiryBanner>
    </Banner>
    <Middle>
      <KvartiryMiddle></KvartiryMiddle>
    </Middle>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import KvartiryBanner from '../components/KvartiryBanner.vue';
import Middle from '../components/Middle.vue';
import KvartiryMiddle from '../components/KvartiryMiddle.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'kvartiry',
  components: {
    Banner,
    KvartiryBanner,
    Middle,
    Footer,
    KvartiryMiddle,
  },
};
</script>
<style lang="scss">
@import '../assets/scss/main.scss';
.flat-page {

}

</style>
