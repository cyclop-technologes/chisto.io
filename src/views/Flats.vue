<template>
  <div class="flat-page position-relative">
    <Header></Header>
    <Banner></Banner>
    <Middle>
      <FlatMiddle></FlatMiddle>
    </Middle>
    <Footer></Footer>

  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Banner from '../components/Banner.vue';
import Middle from '../components/Middle.vue';
import FlatMiddle from '../components/FlatMiddle.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'flats',
  components: {
    Header,
    Banner,
    Middle,
    Footer,
    FlatMiddle,
  },
};
</script>
<style lang="scss">
@import '../assets/scss/main.scss';
.flat-page {

}

</style>
