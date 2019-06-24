<template lang="html">
  <div class="container header-container p-0">
    <b-navbar toggleable="lg" type="dark" class="pt-3">
      <b-navbar-brand>
          <b-link to="/"><img src="../assets/img/logo.svg"></b-link>
      </b-navbar-brand>

      <b-navbar-toggle target="navbar"></b-navbar-toggle>

      <b-collapse id="navbar" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="text-uppercase" v-for="(item, key) in navLinks"  :key="key" :to="`/${key}`">
            {{item}}
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>

    </b-navbar>
  </div>
</template>
<script>

export default {
  data() {
    return {
      navLinks: {
        about: 'о нас',
        franchise: 'франшиза',
        jobs: 'вакансии',
        faq: 'faq',
        feedback: 'отзывы',
        contacts: 'контакты',
      },
    };
  },
};
</script>
<style lang="scss">
  @import '../assets/scss/main.scss';
  .nav-link{
    color: $white !important;
    opacity: 1 !important;
  }
</style>
