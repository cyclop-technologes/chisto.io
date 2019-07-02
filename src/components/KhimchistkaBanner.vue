<template lang="html">
  <b-container class="my-auto">
    <b-row>
      <b-col data-aos="fade-right" cols="12" lg="5" md="6" class="text-white my-auto">
        <h1 class="h1-header mb-5 text-uppercase">химчистка</h1>
        <p>{{text}}</p>
      </b-col>
      <b-col data-aos="fade-left" cols="12" lg="4" md="6" offset-lg="1" class="position-relative">
        <b-form class="bg-white khim-form shadow">
          <b-form-group id="khim-group">
            <b-form-checkbox-group
              v-model="selected"
              :options="options"
              buttons
              button-variant="outline-primary"
              class="d-flex justify-content-between flex-wrap khim-radio">
            </b-form-checkbox-group>
          </b-form-group>
          <b-form-textarea
            v-model="comment"
            rows="5"
            placeholder="Укажите Ваш комментарий"
            class="khim-textarea mb-3 px-4 py-3 border-primary">
          </b-form-textarea>
          <InputPhone v-model='phone'></InputPhone>
          <b-button @click="sendData"
              :disabled='disabled'
              class="rounded-pill w-100"
              variant="primary">
              <b-spinner small v-if='disabled'></b-spinner>
              <span v-else>Рассчитать стоимость</span>
          </b-button>
        </b-form>
        <img class="khimchistka-img" src="../assets/img/cleaner-khimchistka.svg">
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
      text: 'Занимаемся химчисткой мягкой мебели и ковровых покрытий с выездом на дом или в офис. Используем только гипоаллергенные и профессиональные средства.',
      phone: '',
      disabled: false,
      comment: '',
      selected: [],
      options: [
        { text: 'Мебель', value: 'Мебель' },
        { text: 'Матрас', value: 'Матрас' },
        { text: 'Покрытие', value: 'Покрытие' },
        { text: 'Другое', value: 'Другое' },
      ],
    };
  },
  methods: {
    sendData() {
      if (this.phone && this.comment) {
        this.disabled = true;
        const data = JSON.stringify({
          phone: this.phone,
          comment: this.comment,
          type_dry_clean: this.selected.join(';'),
          source: 2,
          type_clean: 4,
        });
        this.axios.post(`http://crm.chisto.io/api/add_order.php?params=${data}`).then((response) => {
          console.log(response);
          this.disabled = false;
          alert(response.status);
          this.comment = '';
          this.phone = '';
          this.selected = [];
        }).catch((error) => {
          alert(error);
        });
      }
    },
  },
};
</script>

<style lang="scss">
@import '../assets/scss/main.scss';
.khim-form {
  border-radius: 2.5rem;
  padding: 2rem;
  @include media-breakpoint-down(md) {
    margin-bottom: 2rem;
  }
}
.khim-radio {
label.btn {
    border-radius: 1rem !important;
    flex: 25%;
    margin-bottom: 0.5rem;
    &:nth-child(odd) {
      margin-right: 0.5rem;
    }
  }
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
  @include media-breakpoint-down(md) {
    display: none;
  }
}
</style>
