<template lang="html">
  <div class="container header-container">
    <b-navbar type="dark" class="pt-3">
      <b-navbar-brand>
          <img src="../assets/img/logo.svg">
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="text-uppercase" v-for="(item, key) in navLinks"  :key="key" :to="key">
          {{item}}
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>

export default {
  data() {
    return{
      navLinks: {
        about: 'о нас',
        franchise: 'франшиза',
        jobs: 'вакансии',
        faq: 'faq',
        feedback: 'отзывы',
        contacts: 'контакты',
      }
    }
  }
}
</script>
<style lang="scss">
.header-container {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9;
}
</style>
