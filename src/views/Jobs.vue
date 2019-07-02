<template lang="html">
<div class="jobs-page">
  <Header></Header>
  <b-container class="mt-3 pb-3">
    <b-row class="text-center flex-column">
      <b-col cols="12" lg="6" md="8" class="mx-auto">
        <b-form class="jobs-form shadow">
          <h3 class="h3-header text-uppercase">Заполните, пожалуйста, анкету</h3>
          <b-form-input
            v-model="text"
            type="text"
            placeholder="ФИО"
            class="mb-3 mt-3 rounded-pill border-primary jobs-font">
          </b-form-input>
          <b-form-input
            v-model="number"
            type="number"
            placeholder="Возраст"
            min="14"
            max="100"
            class="mb-3 mt-3 rounded-pill border-primary jobs-font">
          </b-form-input>
          <b-form-input
            v-model="text"
            type="text"
            placeholder="Гражданство"
            class="mb-3 mt-3 rounded-pill border-primary jobs-font">
          </b-form-input>
          <b-form-input
            v-model="text"
            type="text"
            placeholder="Опыт работы в клининге"
            class="mb-3 mt-3 rounded-pill border-primary jobs-font">
          </b-form-input>
          <b-form-input
            v-model="text"
            type="text"
            placeholder="Где и сколько по времени"
            class="mb-3 mt-3 rounded-pill border-primary jobs-font">
          </b-form-input>
          <b-form-input
            v-model="text"
            type="text"
            placeholder="Заболевания кожи или аллергия"
            class="mb-3 mt-3 rounded-pill border-primary jobs-font">
          </b-form-input>
          <b-form-input
            v-model="text"
            type="text"
            placeholder="Медицинская книжка"
            class="mb-3 mt-3 rounded-pill border-primary jobs-font">
          </b-form-input>
          <b-form-input
            v-model="text"
            type="text"
            placeholder="Вредные привычки"
            class="mb-3 mt-3 rounded-pill border-primary jobs-font">
          </b-form-input>
          <b-form-input
            v-model="text"
            type="text"
            placeholder="Умение использовать навигатор"
            class="mb-3 mt-3 rounded-pill border-primary jobs-font">
          </b-form-input>
          <b-form-input
            v-model="text"
            type="text"
            placeholder="Дней в неделю готов работать"
            class="mb-3 mt-3 rounded-pill border-primary jobs-font">
          </b-form-input>
          <div class="d-flex">
            <InputPhone class="jobs-font" v-model='phone'></InputPhone>
            <b-button
              class="rounded-pill w-100 mb-3 jobs-font"
              variant="primary">
              Отправить
            </b-button>
          </div>
        </b-form>
      </b-col>
      <img class="mt-3" src="../assets/img/footer-logo.svg">
    </b-row>
  </b-container>
</div>
</template>

<script>
import Header from '../components/Header.vue';
import InputPhone from '../components/InputPhone.vue';

export default {
  name: 'jobs',
  components: {
    Header,
    InputPhone,
  },
  data() {
    return {
      phone: '',
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.jobs-page {
  background: url('../assets/img/bg-banner.svg') no-repeat;
}

.jobs-form {
  background-color: $white;
  border: solid 1px $primary;
  padding: 1rem 2rem;
  border-radius: 1rem;
}

.jobs-font {
  font-size: 12px;
  @include media-breakpoint-down(sm) {
    font-size: 10px;
  }
}

</style>
