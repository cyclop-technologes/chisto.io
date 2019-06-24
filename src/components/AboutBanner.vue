<template lang="html">
  <b-container class="my-auto">
    <b-row>
      <b-col data-aos="fade-right" class="text-white" cols="12" lg="8">
        <h1 class="text-uppercase mb-5">о компании</h1>
        <p v-for='(item, index) in about' :key='index'>{{item}}</p>
      </b-col>
      <b-col data-aos="fade-left" class="ml-auto" cols="12" lg="3">
        <img class="about-banner-image" src="../assets/img/cleaner-about.svg">
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      about: [
        'Мы стараемся быть лучшими в сфере предоставления клининговых услуг, непрерывно обучая и снаряжая профессиональным оборудованием наших сотрудников.',
        'Мы используем самые современные и только гипоаллергенные чистящие средства, заботясь о тех, кто доверяет нам свое здоровье.',
        'Каждый клинер компании ЧИСТО — это действительно специалист: мы ответственно подходим к обучению сотрудников и берем качеством, а не количеством.',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.about-banner-image {
  @include media-breakpoint-down(md) {
    display: none;
  }
}
</style>
