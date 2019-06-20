<template lang="html">
  <div class="how-we-work-page">
    <div class="container work-container">
      <h1 class="h1-header hww-header text-uppercase">как мы работаем</h1>
      <div class="work-info d-flex justify-content-center align-items-center">
        <div class="work-info-left">
          <div data-aos="fade-right" class="block-left-top">
            <h4 class="work-info-header text-uppercase mb-4">что будем убирать?</h4>
            <p class="work-info-article">Убираем квартиры, частные дома, офисные и коммерческие помещения, помещения после ремонта.
              Также мы занимаемся химчисткой, моем окна, стираем шторы и чистим фасады.</p>
          </div>
          <div data-aos="fade-right" data-aos-delay="100" class="block-left-bottom">
            <h4 class="work-info-header text-uppercase mb-4">как будем убирать</h4>
            <p class="work-info-article">Специально обученный клинер приходит в назначенное время
              с необходимым инвентарем и чистящими средствами и приступает к работе.</p>
          </div>
        </div>
        <div class="work-info-center">
          <img class="work-info-image" src="../assets/img/howwework.png">
        </div>
        <div class="work-info-right text-right">
          <div data-aos="fade-left" class="block-right-top">
            <h4 class="work-info-header text-uppercase mb-4">чем будем убирать?</h4>
            <p class="work-info-article">Для уборки мы используем собственное профессиональное оборудование,
              а также только профессиональные чистящие средства, которые являются гипоаллергенными
              и не причиняют вреда людям и животным.</p>
          </div>
          <div data-aos="fade-left" data-aos-delay="100" class="block-right-bottom">
            <h4 class="work-info-header text-uppercase mb-4">кто будет убирать?</h4>
            <p class="work-info-article">Мы уважаем традиции и уют вашего дома,
              и поэтому подготовили надежных исполнителей,
              которые прошли три этапа отбора: собеседование, обучение и проверку службой безопасности.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.work-container {
  background-color: $secondary;
  height: 100vh;
  color: $white;
}
.hww-header {
  padding-top: 100px;
  padding-left: 40px;
  margin-bottom: 8rem;
}
.work-info-left {
  margin-left: 2rem;
}
.work-info-right {
  margin-right: 2rem;
}
.block-left-bottom,
.block-right-bottom {
  margin-top: 10rem;
}
.work-info-image {
  width: 350px;
}
.work-info-header {
  font-size: 20px;
}
.work-info-article {
  font-size: 14px;
  line-height: 20px;
}
</style>
