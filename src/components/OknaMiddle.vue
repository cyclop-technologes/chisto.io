<template lang="html">
  <div class="container">
    <h1 class="h1-header text-uppercase okna-header">оконный клининг</h1>
    <div class="about-windows-cleaning">
      <div class="windows-cleaning-top d-flex justify-content-between">
        <p data-aos="fade-right" class="windows-cleaning-info">
          Окна офисов и магазинов — это лицо компании.
          Здесь требуется прозрачность, блеск и чистота.
          Но справиться с большой площадью стеклянной поверхности без специального оборудования невозможно.
          Просто руками и тряпкой здесь не обойтись.</p>
        <div data-aos="fade-left">
          <h4 class="h4-header text-uppercase mb-4">предоставляемые услуги</h4>
            <ul class="windows-cleaning-list">
              <li class="cleaning-list-item mb-3">Моем фасады</li>
              <li class="cleaning-list-item mb-3">Моем витрины</li>
              <li class="cleaning-list-item mb-3">Моем витражи</li>
              <li class="cleaning-list-item mb-3">Моем окна</li>
            </ul>
        </div>
      </div>
      <div class="windows-cleaning-bottom d-flex justify-content-around">
        <div data-aos="fade-right" class="text-center">
            <img src="../assets/img/shield.svg">
            <p class="mt-2">Работу выполняют<br> высококвалифицированные специалисты</p>
        </div>
        <div data-aos="fade-left" class="text-center">
            <img src="../assets/img/quality.svg">
            <p class="mt-2">Высокий уровень обслуживания и <br> европейские стандарты качества</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
@import '../assets/scss/main.scss';
.okna-header {
  padding-top: 6rem;
}
.windows-cleaning-top {
  margin: 4rem 0 6rem 0;
}
.windows-cleaning-info {
  width: 550px;
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
