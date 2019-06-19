<template>
  <div class="faq-page position-relative">
    <Header></Header>
    <Banner></Banner>
    <Middle>
      <FaqMiddle></FaqMiddle>
    </Middle>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Banner from '../components/Banner.vue';
import Middle from '../components/Middle.vue';
import FaqMiddle from '../components/FaqMiddle.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'faq',
  components: {
    Header,
    Banner,
    Middle,
    Footer,
    FaqMiddle,
  },
};
</script>
<style lang="scss">
@import '../assets/scss/main.scss';
.faq-page {

}

</style>
