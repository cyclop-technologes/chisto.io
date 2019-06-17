<template>
  <div class="okna-page position-relative">
    <Header></Header>
    <Banner></Banner>
    <Middle>
      <OknaMiddle></OknaMiddle>
    </Middle>
    <Footer></Footer>

  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Banner from '../components/Banner.vue';
import Middle from '../components/Middle.vue';
import OknaMiddle from '../components/OknaMiddle.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'okna',
  components: {
    Header,
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
