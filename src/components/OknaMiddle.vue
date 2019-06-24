<template lang="html">
  <b-container class="okna-middle">
    <h1 class="h1-header mb-5 text-uppercase">оконный клининг</h1>
    <b-row class="text-center-md">
      <b-col data-aos="fade-right" cols="12" lg="6" md="6">
        <p class="windows-cleaning-info">{{text}}</p>
      </b-col>
      <b-col data-aos="fade-left" cols="12" lg="3" md="6" class="ml-auto">
        <h4 class="h4-header text-uppercase mb-4">предоставляемые услуги</h4>
        <ul class="windows-cleaning-list">
          <li class="cleaning-list-item mb-3">Моем фасады</li>
          <li class="cleaning-list-item mb-3">Моем витрины</li>
          <li class="cleaning-list-item mb-3">Моем витражи</li>
          <li class="cleaning-list-item mb-3">Моем окна</li>
        </ul>
      </b-col>
    </b-row>
    <b-row class="text-center mt-5">
      <b-col data-aos="fade-right" cols="12" lg="6" md="6" class="ml-auto">
        <img src="../assets/img/shield.svg">
        <p class="mt-2">Работу выполняют
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
      text: 'Окна офисов и магазинов — это лицо компании. Здесь требуется прозрачность, блеск и чистота. Но справиться с большой площадью стеклянной поверхности без специального оборудования невозможно. Просто руками и тряпкой здесь не обойтись.',
    };
  },
};
</script>

<style lang="scss">
@import '../assets/scss/main.scss';
.okna-middle {
  padding: 8rem 0;
}
.windows-cleaning-info {
  font-size: 16px;
  line-height: 30px;
}
.windows-cleaning-list {
  position: relative;
  &:before {
    content: "";
    height: 125px;
    width: 2px;
    background: $primary;
    position: absolute;
    left: 24px;
    top: 10px;
  }
}
.cleaning-list-item {
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
</style>
