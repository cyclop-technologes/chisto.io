<template lang="html">
  <b-container class="text-center kvartiry-middle">
    <h1 class="h1-header text-uppercase">сравнить уборку</h1>
    <b-row class="justify-content-around">
      <b-col data-aos="fade-right" cols="12" lg="6" md="6" sm="12">
        <h4 class="h4-header text-uppercase mt-5 mb-5">генеральная уборка</h4>
        <ul class="text-left general-list">
          <li
            v-for="(item, index) in listLeft"
            :key='index'
            class="mb-3 pl-5 general-list-item">{{item}}</li>
        </ul>
      </b-col>
      <b-col data-aos="fade-left" cols="12" lg="6" md="6" sm="12">
        <h4 class="h4-header text-uppercase mt-5 mb-5">экспресс уборка</h4>
        <ul class="text-right express-list">
          <li
            v-for="(item, index) in listRight"
            :key='index'
            class="mb-3 pr-5 express-list-item">{{item}}</li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      listRight: [
        'Очищаем все доступные поверхности от пыли и жира',
        'Протираем верхний фасад кухни',
        'Протираем раковину, смеситель, столешницу и плиту',
        'Протираем бытовую технику',
        'Протираем нижний фасад кухни',
        'Протираем двери, дверные ручки и выключатели',
        'Протираем плинтуса, пылесосим и моем пол',
        'Меняем постельное белье и застилаем кровать',
      ],
      listLeft: [
        'Выносим мусор',
        'Собираем и складываем вещи',
        'Моем и чистим душевую кабину и ванну',
        'Очищаем раковину, унитаз и биде',
        'Чистим смесители, зеркала и стеклянные поверхности',
        'Вытираем пыль со всех доступных поверхностей',
        'Протираем двери, дверные ручки и выключатели',
        'Пылесосим коврики и моем пол',
      ],
    };
  },
};
</script>

<style lang="scss">
@import '../assets/scss/main.scss';
.kvartiry-middle {
  padding: 8rem 0;
}
.general-list {
  position: relative;
  &:before {
    content: "";
    height: 92%;
    width: 2px;
    background: $primary;
    position: absolute;
    left: 64px;
    top: 15px;
    @include media-breakpoint-down(md) {
      height: 92%;
    }
  }
}
.general-list-item {
  position: relative;
  &:before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: $primary;
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
.express-list {
  position: relative;
  &:after {
    content: "";
    height: 90%;
    width: 2px;
    background: $primary;
    position: absolute;
    right: 24px;
    top: 20px;
    @include media-breakpoint-down(md) {
      top: 32px;
    }
    @include media-breakpoint-down(sm) {
      top: 45px;
      height: 86%;
      text-align: left !important;
      &:after {
        left: -30px;
      }
    }
  }
}
.express-list-item {
  position: relative;
  &:after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: $primary;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}

</style>
