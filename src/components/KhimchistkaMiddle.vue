<template lang="html">
  <div class="container khimchistka-middle">
    <h1 class="h3-header text-uppercase">{{title}}</h1>
    <div class="khimchistka-about">
      <div class="khimchistka-about-top d-flex justify-content-between">
        <p data-aos="fade-right" class="khimchistka-info">{{text}}</p>
        <div data-aos="fade-left">
          <h4 class="h4-header text-uppercase mb-4">предоставляемые услуги</h4>
            <ul class="khimchistka-list">
              <li class="khimchistka-list-item mb-3">Химчистка мягкой мебели</li>
              <li class="khimchistka-list-item mb-3">Химчистка ковров, коврового покрытия</li>
              <li class="khimchistka-list-item mb-3">Химчистка матрасов</li>
            </ul>
        </div>
      </div>
      <div class="khimchistka-about-bottom d-flex justify-content-around">
        <div data-aos="fade-right" class="text-center">
            <img src="../assets/img/himchistka.svg">
            <p class="mt-4">Работу выполняют
              <br> высококвалифицированные специалисты</p>
        </div>
        <div data-aos="fade-left" class="text-center">
            <img src="../assets/img/quality.svg">
            <p class="mt-2">Высокий уровень обслуживания и
              <br> европейские стандарты качества</p>
        </div>
      </div>
    </div>
  </div>
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
  width: 550px;
  font-size: 16px;
  line-height: 30px;
}

.khimchistka-list {
  position: relative;
  &:before {
    content: "";
    height: 85px;
    width: 2px;
    background: $primary;
    position: absolute;
    left: 24px;
    top: 10px;
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
</style>
