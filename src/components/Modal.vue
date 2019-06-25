<template lang="html">
  <b-modal body-class='modal-other' content-class='modal-border' id="modalOther" hide-footer hide-header centered>
    <h4 class="h4-header text-uppercase text-white">мы внимательны к каждому пожеланию</h4>
    <p class="my-4 modal-text">Укажите Ваш вопрос или пожелание, и менеджер оперативно Вам перезвонит.</p>
    <b-form>
      <b-form-textarea
        rows="5"
        placeholder="Укажите Ваш комментарий"
        class="modal-textarea mb-3 px-4 py-3 border-primary">
      </b-form-textarea>
      <div class="d-flex">
        <b-form-input
           class="text-center rounded-pill mr-2 border-primary"
           type="tel"
           placeholder="+7(_ _ _)_ _ _ _ _ _ _"
       >
       </b-form-input>
       <b-button
           class="rounded-pill w-100" variant="primary" href="">
           Отправить заявку
       </b-button>
      </div>
    </b-form>
  </b-modal>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';
.modal-border {
  border-radius: 12px !important;
  border: none;
}
.modal-other {
    background: url('../assets/img/popup-bg.svg') no-repeat;
    background-size: cover;
    border-radius: 12px;
    text-align: center;
    padding: 3rem !important;

    .modal-text {
      color: #ADA3F4;
    }

    &:before{
      content: '';
      background: $primary;
      width: 100px;
      height: 100px;
    }
}
.modal-textarea {
  border-radius: 2rem !important;
  resize: none;
  flex: 50%;
}
</style>
