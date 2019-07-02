<template lang="html">
  <div class="home-middle">
    <b-container>
      <b-row class="d-none d-md-flex">
        <b-col cols="12" lg="3" class="items-description d-flex flex-column">
          <h1 class="h1-header text-uppercase mb-5">{{current.title}}</h1>
          <p>{{current.body}}</p>
            <b-button :to="current.link" class="text-uppercase w-100 home-button mt-auto mb-5">
                заказать
            </b-button>
        </b-col>
        <b-col cols="12" lg="9">
          <b-row class="mb-4 mb-lg-0">
            <b-col cols='4' md='3' lg='12'>
              <b-form-group class="home-radio-group">
                <b-form-radio-group
                class="home-radio shadow"
                id="btn-radios-2"
                v-model="selected"
                :options="options"
                buttons
                :stacked='screenWidth <= 991'
                size="sm"
                name="radio-btn-outline"
                ></b-form-radio-group>
              </b-form-group>
            </b-col>
            <b-col cols='8' md='9' lg='12'>
              <img class="home-img rounded shadow" :src="current.img">
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="d-md-none">
        <b-carousel id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd">

          <b-carousel-slide
          v-for='(item, idx) in cleans'
          :key="idx"
          height="300px" :img-src="item.img"
          class="position-relative">
          </b-carousel-slide>
        </b-carousel>
        <div class="slide-caption">{{cleans[slide].title}}</div>
      </b-row>
    </b-container>
  </div>

</template>

<script>
export default {
  data() {
    return {
      cleans: [
        {
          title: 'Уборка квартир',
          body: 'Сегодня у людей есть дела поважнее, чем избавление от пыли и уборка в доме. Поэтому приглашать сотрудников клининговой компании для ежедневной или генеральной уборки квартиры стало обычным делом.',
          link: '/kvartiry',
          img: require('../assets/img/id1.jpg'),
        },
        {
          title: 'Уборка коттеджей',
          body: 'Мы способны преобразить как маленькие квартиры, так и просторные коттеджи. Стоимость уборки таких объектов зависит от площади и специфики дома.',
          link: '/kvartiry',
          img: require('../assets/img/id2.jpg'),
        },
        {
          title: 'Уборка помещений',
          body: 'Чтобы не нанимать постоянного сотрудника для уборки вашего офисного или коммерческого помещения, воспользуйтесь нашими услугами. Все клинеры перед обучением проходят тщательный отбор и проверку на безопасность.',
          link: '/office',
          img: require('../assets/img/id3.jpg'),
        },
        {
          title: 'Уборка после ремонта',
          body: 'Задача строителей - ремонт. А уборка строительного мусора и следов клея или затирки целиком ложится на ваши плечи. Поэтому доверьте эту сложную работу профессионалам, поберегите свои силы и нервы.',
          link: '/repair',
          img: require('../assets/img/id4.jpg'),
        },
        {
          title: 'Химчистка',
          body: 'Производим химчистку мягкой мебели и ковровых покрытий с выездом на дом или в офис. Используя профессиональные средства и оборудование, избавим от загрязнений и различных пятен вашу мебель, в том числе — с обивкой из кожи и деликатных натуральных тканей.',
          link: '/khimchistka',
          img: require('../assets/img/id5.jpg'),
        },
        {
          title: 'Мойка окон',
          body: 'Используя профессиональные средства и оборудование, мы избавляем окна от грязи без разводов и налета. Чисто будет даже в труднодоступных местах.',
          link: '/okna',
          img: require('../assets/img/id6.jpg'),
        },
        {
          title: 'Стирка штор',
          body: 'Большинство загрязнений скрыто от наших глаз: мелкая пыль и бактерии прячутся в тканях, ставя под угрозу ваше здоровье. Мы заботимся о вас и используем экологичные и гипоаллергенные средства, чтобы предотвратить размножение вредных микроорганизмов и накопление пыли.',
          link: '/khimchistka',
          img: require('../assets/img/id7.jpg'),
        },
        {
          title: 'Чистка фасадов',
          body: 'Важно, чтобы чисто было не только внутри, но и снаружи. Заказывая услугу чистки фасадов, вы обновляете и освежаете внешний вид здания.',
          link: '/khimchistka',
          img: require('../assets/img/id8.jpg'),
        },
      ],
      selected: 0,
      screenWidth: 0,
      slide: 0,
      sliding: null,
    };
  },
  computed: {
    current() {
      return this.cleans[this.selected];
    },
    options() {
      return this.cleans.map((el, i) => ({
        text: el.title,
        value: i,
      }));
    },
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style lang="scss">
@import '../assets/scss/main.scss';
.home-middle {
  padding: 8rem 0;
  background: linear-gradient(to right, $white 0%, $white 50%, $primary 50%, $primary 100%);
  @include media-breakpoint-down(sm) {
    background: $secondary;
    padding: 4rem 0 2rem 0;
  }
}
.home-button {
  margin-top: 6rem;
}
.home-radio {
  .btn {
    cursor: pointer;
  }
}
.items-description{
  @include media-breakpoint-down(md) {
    order: 2;
  }
}
.home-img {
  margin: 0 auto;
  width: 100%;
  height: 480px;
  object-fit: cover;
  object-position: center;
  @include media-breakpoint-down(md){
    height: 100%;
  };
}
.home-radio-group {
  @include media-breakpoint-down(md) {
    margin-bottom: 0 !important;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
}
.slide-caption {
  color: $white;
  background: #1E2147;
  width: 100%;
  text-align: center;
  padding: 1rem 0;
}
</style>
