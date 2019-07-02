<template lang="html">
  <b-container class="my-auto">
    <b-row>
      <b-col cols="12" lg="5" md="6" class="text-white">
        <h1 class="h1-header mb-5 text-uppercase">уборка после ремонта</h1>
        <p>{{text}}</p>
      </b-col>
      <b-col cols="12" lg="4" md="6" offset-lg="1" class="position-relative">
        <b-form class="bg-white form shadow position-relative">
          <b-form-input
             class="text-center rounded-pill mb-4 border-primary"
             type="text"
             placeholder="Укажите вид объекта"
             v-model='view_object'>
         </b-form-input>
         <b-form-input
            class="text-center rounded-pill mb-4 border-primary"
            type="number"
            placeholder="Введите площадь"
            v-model='area'>
        </b-form-input>
           <InputPhone v-model='phone'></InputPhone>
           <b-button @click="sendData"
              :disabled='disabled'
               class="rounded-pill w-100 repair-btn"
               variant="primary">
               <b-spinner small v-if='disabled'></b-spinner>
               <span v-else>Отправить заявку</span>
           </b-button>
          <img src="../assets/img/vacuum.svg" class="sm-vacuum-image">
        </b-form>
        <img class="repair-img" src="../assets/img/cleaner-repair.svg">
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import InputPhone from './InputPhone.vue';

export default {
  components: {
    InputPhone,
  },
  data() {
    return {
      text: 'Такой вид уборки выполняется силами нескольких специалистов клининговой компании ЧИСТО. Клинеры приезжают со всем необходимым оборудованием, средствами и материалами. Средняя продолжительность уборки после ремонта — 8-9 часов. Оформите заказ онлайн, и наш менеджер свяжется с вами для подтверждения и уточнения всех деталей.',
      phone: '',
      view_object: '',
      area: '',
      disabled: false,
    };
  },
  methods: {
    sendData() {
      if (this.phone && this.area && this.view_object) {
        this.disabled = true;
        const data = JSON.stringify({
          view_object: this.view_object,
          phone: this.phone,
          source: 2,
          ares: this.area,
          type_clean: 1,
        });
        this.axios.post(`http://crm.chisto.io/api/add_order.php?params=${data}`).then((response) => {
          console.log(response);
          this.disabled = false;
          alert(response.status);
          this.view_object = '';
          this.area = '';
          this.phone = '';
        }).catch((error) => {
          alert(error);
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.form {
  border-radius: 2.5rem;
  padding: 2rem;
  @include media-breakpoint-down(md) {
    margin-bottom: 2rem;
  }
}
.repair-img {
  position: absolute;
  right: calc(5rem - 100%);
  top: 50%;
  transform: translateY(-50%);
  @include media-breakpoint-down(md) {
    display: none;
  }
}
.repair-btn {
  @include media-breakpoint-down(sm) {
    margin-bottom: 4rem;
  }
}
.sm-vacuum-image {
  display: none;
  @include media-breakpoint-down(sm) {
    display: block;
    position: absolute;
    bottom: -1.5rem;
    right: -0.5rem;
  }
}
</style>
