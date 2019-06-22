<template lang="html">
  <div class="container about-middle-container text-center">
    <h1 class="text-uppercase h1-header mb-4">почему нам доверяют</h1>
    <div class="about-info d-flex flex-row">
      <b-col v-for='(item, index) in about' :key="index" cols="12" lg="4">
        <div
          data-aos="fade-up"
          class="about-info-item
            d-flex
            mt-5
            flex-column
            align-items-center
            justify-content-center">
          <h3 class="h3-header pt-4 pb-4">{{item.title}}</h3>
          <img src="../assets/img/handshake.svg"/>
          <p class="info-item-text pt-4">{{item.body}}</p>
        </div>
      </b-col>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      about: [
        {
          title: 'Результат',
          body: 'Вы оплачиваете только результат. Немалая часть заказов поступает к нам от наших постоянных клиентов. Это говорит о качестве выполняемой работы и о хорошем впечатлении, которое производят наши клинеры.',
          img: require('../assets/img/handshake.svg'),
        },
        {
          title: 'Персонал',
          body: 'Каждый наш сотрудник — это человек, в котором мы уверены. Мы устраиваем строгий отбор и только после обучения и проверки службой безопасности допускаем клинера к работе.',
          img: require('../assets/img/handshake.svg'),
        },
        {
          title: 'Безопасность',
          body: 'Все используемые средства являются экологически безопасными, что исключает возможность появления аллергических реакций или других неприятных последствий после уборки.',
          img: require('../assets/img/handshake.svg'),
        },
      ],
    };
  },
};

</script>
<style lang="scss">
@import '../assets/scss/main.scss';
.about-middle-container {
  padding: 8rem 0;
}
.about-info-item {
  border-radius: 12px;
  box-shadow: 0px 6px 26px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
}
.info-item-text {
  padding: 0px 31px 60px 31px;
  font-size: 15px;
}

</style>
