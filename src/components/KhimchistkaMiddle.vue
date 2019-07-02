<template lang="html">
  <b-container class="khimchistka-middle">
    <h1 class="h3-header text-uppercase mb-5">{{title}}</h1>
    <b-row class="mb-5 khim-container">
      <b-col data-aos="fade-right" cols="12" lg="6" md="6">
        <p class="khimchistka-info">{{text}}</p>
      </b-col>
      <b-col data-aos="fade-left" cols="12" lg="3" md="6" class="ml-auto">
        <h4 class="h4-header text-uppercase sm-mt-2 mb-4">предоставляемые услуги</h4>
          <ul class="khimchistka-list">
            <li class="khimchistka-list-item mb-3">Химчистка мягкой мебели</li>
            <li class="khimchistka-list-item mb-3">Химчистка ковров, коврового покрытия</li>
            <li class="khimchistka-list-item mb-3">Химчистка матрасов</li>
          </ul>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col data-aos="fade-right" cols="12" lg="6" md="6" class="ml-auto">
        <img src="../assets/img/himchistka.svg">
        <p class="mt-4">Работу выполняют
          <br> высококвалифицированные специалисты</p>
      </b-col>
      <b-col data-aos="fade-left" cols="12" lg="6" md="6" class="mr-auto">
        <img src="../assets/img/quality.svg">
        <p class="mt-2">Высокий уровень обслуживания и
          <br> европейские стандарты качества</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      title: 'Применение самых современных технологий и экологически безопасных препаратов',
      text: 'Химчистка проводится профессиональным оборудованием с использованием гипоаллергенных и профессиональных химических средств, которые разрешено использовать пылесосом экстракторным методом: химия наносится на ткань в жидком виде, а после — вакуумом вытягивается вместе с загрязнением. Все чистящие средства подбираются на месте с учетом ткани и характера загрязнений.',
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.khimchistka-middle {
  padding: 8rem 0;
}
.khimchistka-about-top {
  margin: 4rem 0 6rem 0;
}
.khimchistka-info {
  font-size: 16px;
  line-height: 30px;
}

.khimchistka-list {
  position: relative;
  &:before {
    content: "";
    height: 86%;
    width: 2px;
    background: $primary;
    position: absolute;
    left: 24px;
    top: 10px;
    @include media-breakpoint-down(sm) {
      height: 82%;
    }
  }
}
.khimchistka-list-item {
  position: relative;
  &:before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: $primary;
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
.khim-container {
  @include media-breakpoint-down(sm) {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}
</style>
