<template lang="html">
<div class="jobs-page">
  <Header></Header>
  <b-container class="mt-3">
    <b-row class="text-center flex-column">
      <b-col cols="12" lg="6" md="8" class="mx-auto">
        <h3 class="h3-header text-uppercase my-3 text-white">Добро пожаловать на работу мечты</h3>
        <b-form class="jobs-form shadow text-left">
          <b-form-input
            v-model="text"
            type="text"
            placeholder="ФИО"
            class="mb-3 mt-3 rounded-pill border-primary jobs-font">
          </b-form-input>
          <b-form-input
            v-model="age"
            type="number"
            placeholder="Возраст"
            min="14"
            max="100"
            class="mb-3 mt-3 rounded-pill border-primary jobs-font">
          </b-form-input>
          <b-form-input
            v-model="country"
            type="text"
            placeholder="Гражданство"
            class="mb-3 mt-3 rounded-pill border-primary jobs-font">
          </b-form-input>
          <b-form-checkbox
            v-model="exp"
            :options="expValue"
            name="checkbox-1"
            class="jobs-font">
            Опыт работы в клининге
          </b-form-checkbox>
          <b-form-input
            v-model="whereWork"
            v-show="exp"
            type="text"
            placeholder="Где и сколько по времени"
            class="mb-3 mt-3 rounded-pill border-primary jobs-font">
          </b-form-input>
          <b-form-checkbox
            v-model="diseases"
            :options="diseasesValue"
            name="checkbox-1"
            class="mb-3 mt-3 jobs-font">
            Заболевания кожи или аллергия
          </b-form-checkbox>
          <b-form-checkbox
            v-model="medbook"
            :options="medValue"
            name="checkbox-1"
            class="mb-3 mt-3 jobs-font">
            Медицинская книжка
          </b-form-checkbox>
          <b-form-checkbox
            v-model="habits"
            :options="habValue"
            name="checkbox-1"
            class="mb-3 mt-3 jobs-font">
            Вредные привычки
          </b-form-checkbox>
          <b-form-checkbox
            v-model="navigators"
            :options="navigatValue"
            name="checkbox-1"
            class="mb-3 mt-3 jobs-font">
            Умею пользоваться навигатором
          </b-form-checkbox>
          <b-form-input
            v-model="workDays"
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
      <img class="py-5" src="../assets/img/footer-logo.svg">
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
      exp: false,
      expValue: [
        { text: 'Нет', value: false },
        { text: 'Есть', value: true },
      ],
      diseases: false,
      diseasesValue: [
        { text: 'Нет', value: false },
        { text: 'Есть', value: true },
      ],
      medbook: false,
      medValue: [
        { text: 'Нет', value: false },
        { text: 'Есть', value: true },
      ],
      habits: false,
      habValue: [
        { text: 'Нет', value: false },
        { text: 'Есть', value: true },
      ],
      navigators: false,
      navigatValue: [
        { text: 'Умею', value: false },
        { text: 'Неумею', value: true },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.jobs-page {
  background: url('../assets/img/bg-banner.svg') no-repeat;
  background-size: cover;
  min-height: 100vh;
}

.jobs-form {
  background-color: $white;
  border: solid 1px $primary;
  padding: 1rem 2rem;
  border-radius: 1rem;
}

.jobs-font {
  font-size: 14px;
  @include media-breakpoint-down(sm) {
    font-size: 10px;
  }
}

</style>
