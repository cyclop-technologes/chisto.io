<template lang="html">
  <div class="home-middle">
    <b-container>
      <b-row>
        <b-col cols="12" lg="3">
          <h1 class="h1-header text-uppercase mb-5">{{current.title}}</h1>
          <p>{{current.body}}</p>
            <b-button :to="current.link" class="text-uppercase w-100">
                заказать
            </b-button>
        </b-col>
        <b-col cols="12" lg="9">
          <b-form-group class="home-radio-group">
            <b-form-radio-group
              class="home-radio shadow"
              id="btn-radios-2"
              v-model="selected"
              :options="options"
              buttons
              size="sm"
              name="radio-btn-outline"
            ></b-form-radio-group>
          </b-form-group>
          <img class="home-img rounded shadow" :src="current.img">
        </b-col>
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
};
</script>

<style lang="scss">
@import '../assets/scss/main.scss';
.home-middle {
  padding: 8rem 0;
  background: linear-gradient(to right, $white 0%, $white 50%, $primary 50%, $primary 100%);
}
.home-radio {
}
.home-img {
  width: 100%;
}
.home-radio-group {
  .btn {
    display: flex;
    align-items: center;
    font-size: 12px;
  }
}
</style>
