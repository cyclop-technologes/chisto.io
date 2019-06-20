<template>
  <div class="faq-page position-relative">
    <Banner>
      <FaqBanner></FaqBanner>
    </Banner>
    <Middle>
      <FaqMiddle></FaqMiddle>
    </Middle>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import FaqBanner from '../components/FaqBanner.vue';
import Middle from '../components/Middle.vue';
import FaqMiddle from '../components/FaqMiddle.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'faq',
  components: {
    Banner,
    Middle,
    Footer,
    FaqMiddle,
    FaqBanner,
  },
};
</script>
<style lang="scss">
@import '../assets/scss/main.scss';
.faq-page {

}
</style>
