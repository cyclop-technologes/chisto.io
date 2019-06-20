<template>
  <div class="okna-page position-relative">
    <Banner></Banner>
    <Middle>
      <OknaMiddle></OknaMiddle>
    </Middle>
    <Footer></Footer>

  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import Middle from '../components/Middle.vue';
import OknaMiddle from '../components/OknaMiddle.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'okna',
  components: {
    Banner,
    Middle,
    Footer,
    OknaMiddle,
  },
};
</script>
<style lang="scss">
@import '../assets/scss/main.scss';
.okna-page {

}

</style>
