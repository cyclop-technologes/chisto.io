<template>
  <div class="flat-page position-relative">
    <Header></Header>
    <Banner></Banner>
    <Middle>
      <KvartiryMiddle></KvartiryMiddle>
    </Middle>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Banner from '../components/Banner.vue';
import Middle from '../components/Middle.vue';
import KvartiryMiddle from '../components/KvartiryMiddle.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'kvartiry',
  components: {
    Header,
    Banner,
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
