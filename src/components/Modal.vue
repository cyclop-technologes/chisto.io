<template lang="html">
  <b-modal body-class='modal-other' ref="my-modal" content-class='modal-border' id="modalOther" class="positiov-relative" hide-footer hide-header centered>
    <button class="text-white modal-btn-container" @click="hideModal"><font-awesome-icon class="modal-close-btn" icon='times'/></button>
    <h4 class="h4-header text-uppercase text-white">мы внимательны к каждому пожеланию</h4>
    <p class="my-4 modal-text">Укажите Ваш вопрос или пожелание, и менеджер оперативно Вам перезвонит.</p>
    <b-form>
      <b-form-textarea
        rows="5"
        placeholder="Укажите Ваш комментарий"
        class="modal-textarea mb-3 px-4 py-3 border-primary">
      </b-form-textarea>
      <div class="d-flex">
        <InputPhone v-model='phone'></InputPhone>
       <b-button
           class="rounded-pill w-100 mb-3" variant="primary" href="">
           Отправить заявку
       </b-button>
      </div>
    </b-form>
  </b-modal>
</template>

<script>
import InputPhone from '../components/InputPhone.vue';

export default {
  data () {
    return {
      phone: '',
    }
  }
  components: {
    InputPhone,
  },
  methods: {
    hideModal() {
        this.$refs['my-modal'].hide()
    },
  },
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';
.modal-border {
  border-radius: 1.5rem !important;
  border: none;
}
.modal-other {
    background: url('../assets/img/popup-bg.svg') no-repeat;
    background-size: cover !important;
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
.modal-btn-container {
  background: none;
  border: none;
  position: absolute;
  right: 1rem;
  top: 1rem;

  .modal-close-btn {
    font-size: 22px;
    cursor: pointer;
    &:hover {
      color: $primary;
    }
  }
}
</style>
