<template lang="html">
  <b-container class="my-auto">
    <b-row>
      <b-col data-aos="fade-right" cols="12" lg="5" md="6" class="text-white my-auto">
        <h1 class="h1-header mb-5 text-uppercase">уборка квартир и домов</h1>
        <p>{{text}}</p>
      </b-col>
      <b-col data-aos="fade-left" cols="12" lg="4" md="6" offset-lg="1" class="position-relative">
        <b-form class="bg-white kvartiry-form shadow position-relative">
          <b-form-group class="radio-input">
            <b-form-radio-group
              id="btn-radios-1"
              v-model="selected"
              :options="options"
              buttons
              name="radios-btn-default"
              button-variant="outline-primary"
              class="w-100 mb-2">
             </b-form-radio-group>
          </b-form-group>
          <b-form-input
             class="text-center rounded-pill mb-3 border-primary"
             min="1"
             max="1000"
             v-model="area"
             type="number"
             placeholder="Введите площадь">
         </b-form-input>
         <div class="position-relative bg-white flat-input my-3">
           <b-button
             @click="counterRem(flats, 'flatIndex')"
             class="ml-2 p-0 prev-step-btn step-btn"
             variant="primary"
             href="">-</b-button>
           <div class="text-center">{{currentFlat}}</div>
          <b-button
            @click="counterAdd(flats, 'flatIndex')"
            class="mr-2 p-0 next-step-btn step-btn"
            variant="primary"
            href="">+</b-button>
         </div>
         <div class="position-relative bg-white flat-input my-3">
           <b-button
             @click="counterRem(toilets, 'toiletIndex')"
             class="ml-2 p-0 prev-step-btn step-btn"
             variant="primary"
             href="">-</b-button>
           <div class="text-center">{{currentToilet}}</div>
          <b-button
            @click="counterAdd(toilets, 'toiletIndex')"
            class="mr-2 p-0 next-step-btn step-btn"
            variant="primary"
            href="">+</b-button>
         </div>
         <div class="position-relative bg-white flat-input my-3">
           <b-button
             @click="counterRem(windows, 'windowsIndex')"
             class="ml-2 p-0 prev-step-btn step-btn"
             variant="primary"
             href="">-</b-button>
           <div class="text-center">{{currentWindows}}</div>
          <b-button
            @click="counterAdd(windows, 'windowsIndex')"
            class="mr-2 p-0 next-step-btn step-btn"
            variant="primary"
            href="">+</b-button>
         </div>
           <InputPhone v-model='phone'></InputPhone>
           <b-button @click="sendData"
              :disabled='disabled'
              class="rounded-pill w-100 flat-btn"
              variant="primary">
              <b-spinner small v-if='disabled'></b-spinner>
              <span v-else>Рассчитать стоимость</span>
            </b-button>
            <img class="sm-spray-image" src="../assets/img/spray.svg">
        </b-form>
        <img class="kvartiry-img" src="../assets/img/cleaner-kvartiry.svg"/>
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
      text: 'Вы можете воспользоваться нашими услугами и заказать поддерживающую или генеральную уборку. От выбранной вами услуги зависит оборудование, с которым приедет клинер. Для расчета стоимости больших площадей вы можете бесплатно вызвать специалиста по оценке: представитель компании озвучит точную стоимость уборки на месте.',
      selected: 6,
      area: '',
      disabled: false,
      options: [
        { text: 'Генеральная', value: 6 },
        { text: 'Экспресс', value: 2 },
      ],
      flats: ['1-х комнатная', '2-х комнатная', '3-х комнатная', '4-х комнатная', '5-х комнатная', 'больше 5-ти комнат'],
      flatIndex: 0,
      toilets: ['1 санузел', '2 санузла', '3 санузла', '4 санузла', 'больше 4-х санузлов'],
      toiletIndex: 0,
      windows: ['1 окно', '2 окна', '3 окна', '4 окна', '5 окон', '6 окон', ' 7 окон', '8 окон', 'больше 8-ми окон'],
      windowsIndex: 0,
      phone: '',
    };
  },
  computed: {
    currentFlat() {
      return this.flats[this.flatIndex];
    },
    currentToilet() {
      return this.toilets[this.toiletIndex];
    },
    currentWindows() {
      return this.windows[this.windowsIndex];
    },
  },
  methods: {
    counterAdd(arr, cur) {
      if (this[cur] < (arr.length - 1)) {
        this[cur]++;
      } else {
        console.log('return');
      }
    },
    counterRem(arr, cur) {
      if (this[cur] !== 0) {
        this[cur]--;
      } else {
        console.log('return');
      }
    },
    sendData() {
      if (this.phone && this.area) {
        this.disabled = true;
        const data = JSON.stringify({
          type_clean: this.selected,
          phone: this.phone,
          area: this.area,
          count_rooms: this.flats.indexOf(this.currentFlat) + 1,
          count_bathtooms: this.toilets.indexOf(this.currentToilet) + 1,
          windows: this.windows.indexOf(this.currentWindows) + 1,
          source: 2,
        });
        this.axios.post(`http://crm.chisto.io/api/add_order.php?params=${data}`).then((response) => {
          console.log(response);
          this.disabled = false;
          alert(response.status);
          this.selected = 6;
          this.phone = '';
          this.area = '';
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
.kvartiry-form {
  border-radius: 2.5rem;
  padding: 2rem;
  @include media-breakpoint-down(md) {
    margin-bottom: 2rem;
  }
}
.kvartiry-img {
  position: absolute;
  right: calc(5rem - 100%);
  top: 50%;
  transform: translateY(-50%);
  @include media-breakpoint-down(md) {
    display: none;
  }
}
.flat-input {
  div {
    border: solid 1px $primary;
    padding: 0.5rem;
    @extend .rounded-pill;
  }
}
.step-btn {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
}
.prev-step-btn {
  left: 0;
}
.next-step-btn {
  right: 0;
}
.flat-btn {
  @include media-breakpoint-down(sm) {
    margin-bottom: 3rem;
  };
}
.sm-spray-image {
  display: none;
  @include media-breakpoint-down(sm) {
    display: block;
    position: absolute;
    right: -0.5rem;
    bottom: -1.5rem;
  }
}
</style>
