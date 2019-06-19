<template>
  <div class="khimchistka-page position-relative">
    <Header></Header>
    <Banner></Banner>
    <Middle>
      <KhimchistkaMiddle></KhimchistkaMiddle>
    </Middle>
    <Footer></Footer>

  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Banner from '../components/Banner.vue';
import Middle from '../components/Middle.vue';
import KhimchistkaMiddle from '../components/KhimchistkaMiddle.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'khimchistka',
  components: {
    Header,
    Banner,
    Middle,
    Footer,
    KhimchistkaMiddle,
  },
};
</script>
<style lang="scss">
@import '../assets/scss/main.scss';
.khimchistka-page {

}

</style>
