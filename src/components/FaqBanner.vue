<template lang="html">
  <b-container class="my-auto">
    <b-row>
      <b-col data-aos="fade-right" cols="12" lg="7">
        <h1 class="text-uppercase text-white mb-5">часто задаваемые вопросы</h1>
        <p class='text-white'>Если вы не нашли ответ на свой вопрос, отправьте его нам.
          Мы постараемся оперативно связаться с вами и на все ответить.</p>
      </b-col>
      <b-col data-aos="fade-left" cols="12" lg="5" class="ml-auto">
        <b-form class="bg-white form shadow">
          <b-form-textarea
            rows="5"
            placeholder="Введите Ваш вопрос"
            class="textarea mb-2 px-4 py-3 border-primary">
          </b-form-textarea>
           <b-form-input
              class="text-center rounded-pill mb-4 border-primary"
              v-model="text"
              type="tel"
              placeholder="+7(_ _ _)_ _ _ _ _ _ _"
          ></b-form-input>
          <b-button
              class="rounded-pill w-100" variant="primary" href="">
              Отправить вопрос
          </b-button>
        </b-form>
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
.textarea {
  border-radius: 2rem;
  resize: none;
}
</style>
