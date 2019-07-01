<template lang="html">
<div class="jobs-page">
  <Header></Header>
  <b-container class="mt-5 mb-5">
    <b-row class="text-center flex-column">
      <b-col cols="12" lg="6" class="mx-auto">
        <b-form class="jobs-form shadow">
          <h3 class="h3-header text-uppercase">Заполните, пожалуйста, анкету</h3>
          <b-form-input
            v-model="text"
            type="text"
            placeholder="ФИО"
            class="mb-3 mt-3 rounded-pill border-primary">
          </b-form-input>
          <b-form-input
            v-model="text"
            type="text"
            placeholder="Контактный телефон"
            class="mb-3 rounded-pill border-primary">
          </b-form-input>
          <b-button
            class="rounded-pill w-100"
            variant="primary">
            Отправить резюме
          </b-button>
        </b-form>
      </b-col>
      <img class="mt-5 mb-5" src="../assets/img/footer-logo.svg">
    </b-row>
  </b-container>
</div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'jobs',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import '../assets/scss/main.scss';
.jobs-page {
  background: url('../assets/img/bg-banner.svg') no-repeat;
  padding: 2rem 4rem;
}

.jobs-form {
  background-color: $white;
  border: solid 1px $primary;
  padding: 2rem;
  border-radius: 1rem;

}

</style>
