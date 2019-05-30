<template>
  <div class="banner">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};

</script>
<style lang="scss">
.banner {
  min-height: 100vh;
  background-color: #7567DB;
}
</style>
