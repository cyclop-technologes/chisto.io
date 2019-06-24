<template lang="html">
  <b-container class="my-auto">
    <b-row>
      <b-col data-aos="fade-right" cols="12" lg="5" md="6" class="text-white">
        <h1 class="h1-header mb-5 text-uppercase">уборка квартир и домов</h1>
        <p>{{text}}</p>
      </b-col>
      <b-col data-aos="fade-left" cols="12" lg="4" md="6" offset-lg="1" class="position-relative">
        <b-form class="bg-white kvartiry-form shadow">
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
          <b-form-input
             class="text-center rounded-pill mb-3 border-primary"
             type="number"
             placeholder="Введите площадь"
         >
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
           <b-form-input
              class="text-center rounded-pill mb-4 border-primary"
              type="tel"
              placeholder="+7(_ _ _)_ _ _ _ _ _ _"
          >
          </b-form-input>
          <b-button
              class="rounded-pill w-100" variant="primary" href="">
              Рассчитать стоимость
          </b-button>
        </b-form>
        <img class="kvartiry-img" src="../assets/img/cleaner-kvartiry.svg"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      text: 'Вы можете воспользоваться нашими услугами и заказать поддерживающую или генеральную уборку. От выбранной вами услуги зависит оборудование, с которым приедет клинер. Для расчета стоимости больших площадей вы можете бесплатно вызвать специалиста по оценке: представитель компании озвучит точную стоимость уборки на месте.',
      selected: 'radio1',
      options: [
        { text: 'Генеральная', value: 'radio1' },
        { text: 'Экспресс', value: 'radio2' },
      ],
      flats: ['1-х комнатная', '2-х комнатная', '3-х комнатная', '4-х комнатная', '5-х комнатная', 'больше 5-ти комнат'],
      flatIndex: 0,
      toilets: ['1 санузел', '2 санузла', '3 санузла', '4 санузла', 'больше 4-х санузлов'],
      toiletIndex: 0,
      windows: ['1 окно', '2 окна', '3 окна', '4 окна', '5 окон', '6 окон', ' 7 окон', '8 окон', 'больше 8-ми окон'],
      windowsIndex: 0,
    };
  },
  computed: {
    currentFlat() { return this.flats[this.flatIndex]; },
    currentToilet() { return this.toilets[this.toiletIndex]; },
    currentWindows() { return this.windows[this.windowsIndex]; },
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
</style>
