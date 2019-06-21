<template lang="html">
  <b-container class="my-auto">
    <b-row>
      <b-col cols="12" lg="5" class="text-white">
        <h1 class="h1-header mb-5 text-uppercase">уборка после ремонта</h1>
        <p>Такой вид уборки выполняется силами нескольких специалистов клининговой компании ЧИСТО.

Клинеры приезжают со всем необходимым оборудованием, средствами и материалами.
          Средняя продолжительность уборки после ремонта — 8-9 часов. Оформите заказ онлайн, и наш менеджер свяжется с вами для подтверждения и уточнения всех деталей.</p>
      </b-col>
      <b-col cols="12" lg="4" offset-lg="1" class="position-relative">
        <b-form class="bg-white form shadow">
          <b-form-input
             class="text-center rounded-pill mb-4 border-primary"
             v-model="text"
             type="text"
             placeholder="Укажите вид объекта"
         >
         </b-form-input>
         <b-form-input
            class="text-center rounded-pill mb-4 border-primary"
            v-model="text"
            type="number"
            placeholder="Введите площадь"
        >
        </b-form-input>
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
        <img class="repair-img" src="../assets/img/cleaner-repair.svg">
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.form {
  border-radius: 2.5rem;
  padding: 2.5rem;
}
.repair-img {
  position: absolute;
  right: calc(5rem - 100%);
  top: 50%;
  transform: translateY(-50%);
}
</style>
