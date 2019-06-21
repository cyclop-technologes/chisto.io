<template lang="html">
  <div class="text-center kvartiry-middle">
    <h1 class="h1-header text-uppercase">сравнить уборку</h1>
    <div class="d-flex justify-content-around">
      <div data-aos="fade-right" class="general-clean">
        <h4 class="h4-header text-uppercase mt-5 mb-5">генеральная уборка</h4>
        <ul class="text-left general-list">
          <li
            v-for="(item, index) in listLeft"
            :key='index'
            class="mb-3 pl-5 general-list-item">{{item}}</li>
        </ul>
      </div>
      <div data-aos="fade-left" class="express-clean">
        <h4 class="h4-header text-uppercase mt-5 mb-5">экспресс уборка</h4>
        <ul class="text-right express-list">
          <li
            v-for="(item, index) in listRight"
            :key='index'
            class="mb-3 pr-5 express-list-item">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
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
  }
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
    height: 280px;
    width: 2px;
    background: $primary;
    position: absolute;
    left: 64px;
    top: 15px;
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
    height: 280px;
    width: 2px;
    background: $primary;
    position: absolute;
    right: 24px;
    top: 15px;
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
