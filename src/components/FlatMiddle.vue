<template lang="html">
  <div class="text-center">
    <h1 class="h1-header flat-header text-uppercase">сравнить уборку</h1>
    <div class="d-flex justify-content-around">
      <div class="general-clean">
        <h4 class="h4-header text-uppercase mt-5 mb-5">генеральная уборка</h4>
        <ul class="text-left general-list">
          <li class="mb-3 pl-5 general-list-item">Выносим мусор</li>
          <li class="mb-3 pl-5 general-list-item">Собираем и складываем вещи</li>
          <li class="mb-3 pl-5 general-list-item">Моем и чистим душевую кабину и ванну</li>
          <li class="mb-3 pl-5 general-list-item">Очищаем раковину, унитаз и биде</li>
          <li class="mb-3 pl-5 general-list-item">Чистим смесители, зеркала и стеклянные поверхности</li>
          <li class="mb-3 pl-5 general-list-item">Вытираем пыль со всех доступных поверхностей</li>
          <li class="mb-3 pl-5 general-list-item">Протираем двери, дверные ручки и выключатели</li>
          <li class="mb-3 pl-5 general-list-item">Пылесосим коврики и моем пол</li>
        </ul>
      </div>
      <div class="express-clean">
        <h4 class="h4-header text-uppercase mt-5 mb-5">экспресс уборка</h4>
        <ul class="text-right express-list">
          <li class="mb-3 pr-5 express-list-item">Очищаем все доступные поверхности от пыли и жира</li>
          <li class="mb-3 pr-5 express-list-item">Протираем верхний фасад кухни</li>
          <li class="mb-3 pr-5 express-list-item">Протираем раковину, смеситель, столешницу и плиту</li>
          <li class="mb-3 pr-5 express-list-item">Протираем бытовую технику</li>
          <li class="mb-3 pr-5 express-list-item">Протираем нижний фасад кухни</li>
          <li class="mb-3 pr-5 express-list-item">Протираем двери, дверные ручки и выключатели</li>
          <li class="mb-3 pr-5 express-list-item">Протираем плинтуса, пылесосим и моем пол</li>
          <li class="mb-3 pr-5 express-list-item">Меняем постельное белье и застилаем кровать</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';
.flat-header {
  padding-top: 130px;
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
