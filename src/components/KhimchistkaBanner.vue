<template lang="html">
  <b-container class="my-auto">
    <b-row>
      <b-col data-aos="fade-right" cols="12" lg="5" class="text-white">
        <h1 class="h1-header mb-5 text-uppercase">химчистка</h1>
        <p>{{text}}</p>
      </b-col>
      <b-col data-aos="fade-left" cols="12" lg="4" offset-lg="1" class="position-relative">
        <b-form class="bg-white khim-form shadow">
          <div class="d-flex flex-wrap justify-content-between">
            <b-form-checkbox
            v-model="furniture"
            name="check-button"
            button button-variant="outline-primary"
            class="checkbox-item mb-2 pr-2">
                    Мебель
            </b-form-checkbox>
            <b-form-checkbox
            v-model="mattress"
            name="check-button"
            button button-variant="outline-primary"
            class="checkbox-item mb-2">
              Матрас
            </b-form-checkbox>
            <b-form-checkbox
            v-model="coating"
            name="check-button"
            button button-variant="outline-primary"
            class="checkbox-item mb-4 pr-2">
              Поктрытие
            </b-form-checkbox>
            <b-form-checkbox
            v-model="other"
            name="check-button"
            button button-variant="outline-primary"
            class="checkbox-item mb-4">
              Другое
            </b-form-checkbox>
          </div>
          <b-form-textarea
            rows="5"
            placeholder="Укажите Ваш комментарий"
            class="khim-textarea mb-2 px-4 py-3 border-primary">
          </b-form-textarea>
           <b-form-input
              class="text-center rounded-pill mb-4 border-primary"
              v-model="text"
              type="tel"
              placeholder="+7(_ _ _)_ _ _ _ _ _ _"
          >
          </b-form-input>
          <b-button
              class="rounded-pill w-100" variant="primary" href="">
              Рассчитать стоимость
          </b-button>
        </b-form>
        <img class="khimchistka-img" src="../assets/img/cleaner-khimchistka.svg">
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      text: 'Занимаемся химчисткой мягкой мебели и ковровых покрытий с выездом на дом или в офис. Используем только гипоаллергенные и профессиональные средства.',
      furniture: false,
      mattress: false,
      coating: false,
      other: false,
    };
  },
};
</script>

<style lang="scss">
@import '../assets/scss/main.scss';
.khim-form {
  border-radius: 2.5rem;
  padding: 2.5rem;
}
.khim-textarea {
  border-radius: 2rem !important;
  resize: none;
}
.checkbox-item {
  flex: 50%;
  .btn {
    width: 100%;
    @extend .rounded-pill;
  }
}
.khimchistka-img {
  position: absolute;
  right: calc(5rem - 100%);
  top: 50%;
  transform: translateY(-50%);
}
</style>
