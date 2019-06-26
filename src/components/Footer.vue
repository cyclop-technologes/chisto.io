<template lang="html">
  <div class="footer d-flex align-items-center flex-column">
    <HowWeWork v-if="block"></HowWeWork>
    <b-container class="footer-container">
      <div class="border-bottom pt-5 mb-3"></div>
      <b-row class="text-center">
        <b-col cols="12" lg="2" md="3">
          <ul class="contacts">
            <li><h4 class="footer-title">Звоните-пишите:</h4></li>
            <li><a href="tel:89180039494">8(918)003-94-94</a></li>
            <li><a href="mailto:feedback@chisto.io">feedback@chisto.io</a></li>
            <li><a href="http://www.chisto.io"><img src="../assets/img/whatsapp.svg"></a></li>
          </ul>
        </b-col>
        <b-col cols="12" lg="2" md="3">
          <h4 class="footer-title">Следите за нами:</h4>
            <b-nav class="links-padding text-center">
              <b-nav-item href="https://www.instagram.com/chisto.io/">
                <font-awesome-icon :icon="['fab', 'instagram']" />
              </b-nav-item>
              <b-nav-item href="https://vk.com/chisto_clean">
                <font-awesome-icon :icon="['fab', 'vk']" />
              </b-nav-item>
              <b-nav-item>
                <font-awesome-icon :icon="['fab', 'odnoklassniki']" />
              </b-nav-item>
              <b-nav-item>
                <font-awesome-icon :icon="['fab', 'youtube']" />
              </b-nav-item>
            </b-nav>
        </b-col>
        <b-col cols="12" lg="2" md="3">
          <h4 class="footer-title">Принимаем к оплате:</h4>
          <div class="payment-img"><img src="../assets/img/payment.svg"></div>
        </b-col>
        <b-col cols="12" lg="6" md="2" sm="2" class="bottom-menu" offset-md="1" offset-lg="0">
          <b-nav class="footer-menu links-padding mb-2">
              <b-nav-item class="text-uppercase" v-for="(item, key) in footLinks"  :key="key" :to="key">
                  {{item}}
              </b-nav-item>
          </b-nav>
        </b-col>
      </b-row>
    </b-container>
    <div class="footer-logo"><img src="../assets/img/footer-logo.svg"></div>
    </div>
</template>
<script>
import HowWeWork from './HowWeWork.vue';

export default {
  data() {
    return {
      footLinks: {
        about: 'о нас',
        franchise: 'франшиза',
        jobs: 'вакансии',
        faq: 'faq',
        feedback: 'отзывы',
      },
    };
  },

  props: {
    block: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    HowWeWork,
  },

};

</script>
<style lang="scss">
@import '../assets/scss/main.scss';
.bottom-menu {
  @include media-breakpoint-down(sm) {
    display: none;
  }
}
.footer {
  background: url('../assets/img/bg-footer.svg') no-repeat;
  background-size: cover;
}
.footer-container {
  background-color: $secondary;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 20px 20px;
  padding: 0rem 5rem;
}
.footer-logo {
  padding: 6.25rem 0rem;
}
.contacts {
  text-align: center;
  color: $white;
  font-size: 14px;
  padding-left: 0;
  li:not(:first-child) {
    padding-top: 10px;
  }
  a {
    &:hover {
      color: $white;
    }
  }
}
.footer-title {
  font-size: 14px;
  color: $white;
  font-weight: normal;
  @include media-breakpoint-down(sm) {
    margin-top: 1rem;
  }
}
.footer-menu {
  li {
    cursor: pointer;
  }
  @include media-breakpoint-down(md) {
    display: flex;
    justify-content: flex-end !important;
  }
  @include media-breakpoint-down(sm) {
    display: none;
  }
}
.links-padding {
  display: flex;
  justify-content: center;
  a {
    padding: 0rem 0.5rem;
  }
}
.nav-item {
  a {
    color: $white;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
