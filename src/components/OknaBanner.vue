<template lang="html">
  <b-container class="my-auto">
    <b-row>
      <b-col data-aos="fade-right" cols="12" lg="5" md="6" class="text-white">
        <h1 class="h1-header mb-5 text-uppercase">мытье окон, витражей</h1>
        <p>{{text}}</p>
      </b-col>
      <b-col data-aos="fade-left" cols="12" lg="4" md="6" offset-lg="1" class="position-relative">
        <b-form class="bg-white windows-form shadow">
          <b-form-group class="radio-input">
            <b-form-radio-group
              id="btn-radios-1"
              v-model="selected"
              :options="options"
              buttons
              name="radios-btn-default"
              button-variant="outline-primary"
              class="w-100 mb-2"
             >
             </b-form-radio-group>
          </b-form-group>
           <InputPhone v-model='phone'></InputPhone>
           <b-button @click="sendData"
              :disabled='disabled'
              class="rounded-pill w-100"
              variant="primary">
              <b-spinner small v-if='disabled'></b-spinner>
              <span v-else>Рассчитать стоимость</span>
          </b-button>
        </b-form>
        <img class="okna-img" src="../assets/img/cleaner-okna.svg">
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import InputPhone from '../components/InputPhone.vue';

export default {
  components: {
    InputPhone,
  },
  data() {
    return {
      text: 'Наши клинеры используют специальное оборудование и средства, чтобы достичь идеальной чистоты окон и витражей. Обратите внимание, мы не моем окна снаружи в зимнее время, а также при температуре ноль градусов и ниже.',
      selected: 3,
      options: [
        { text: 'Окна', value: 3 },
        { text: 'Витражи', value: 14 },
      ],
      phone: '',
    };
  },
  methods: {
    sendData() {
      if (this.phone && this.selected) {
        this.disabled = true
        let data = JSON.stringify({
            phone: this.phone,
            source: 2,
            type_clean: this.selected,
        });
        this.axios.post('http://crm.chisto.io/api/add_order.php?params=' + data).then(response => {
          console.log(response);
          this.disabled = false;
          alert(response.status);
          this.selected = 3;
          this.phone = '';
        }).catch(error => {
            alert(error);
        })
      }
    }
  }
};
</script>
<style lang="scss">
@import '../assets/scss/main.scss';
.windows-form {
  border-radius: 2.5rem;
  padding: 2rem;
  @include media-breakpoint-down(md) {
    margin-bottom: 2rem;
  }
}
.radio-input {
  .btn:first-child {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  .btn:last-child {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
}
.okna-img {
  position: absolute;
  right: calc(5rem - 100%);
  top: 50%;
  transform: translateY(-50%);
  @include media-breakpoint-down(md) {
    display: none;
  }
}
</style>
