<template lang="html">
  <div class="footer d-flex justify-content-center align-items-center flex-column">
    <div class="container footer-container">
      <div class="border-bottom mt-5 mb-3"></div>
      <div class="row">
        <div class="col-2 mt-2">
          <ul class="contacts">
            <li><h4 class="footer-title">Звоните-пишите:</h4></li>
            <li><a href="tel:89180039494">8(918)003-94-94</a></li>
            <li><a href="mailto:feedback@chisto.io">feedback@chisto.io</a></li>
            <li><a href="http://www.chisto.io"><img src="../assets/img/whatsapp.svg"></a></li>
          </ul>
        </div>
        <div class="col-2 mt-2">
          <h4 class="footer-title">Следите за нами:</h4>
            <b-nav class="links-padding">
              <b-nav-item>
                <font-awesome-icon :icon="['fab', 'instagram']" />
              </b-nav-item>
              <b-nav-item>
                <font-awesome-icon :icon="['fab', 'vk']" />
              </b-nav-item>
              <b-nav-item>
                <font-awesome-icon :icon="['fab', 'odnoklassniki']" />
              </b-nav-item>
              <b-nav-item>
                <font-awesome-icon :icon="['fab', 'youtube']" />
              </b-nav-item>
            </b-nav>
        </div>
        <div class="col-2 mt-2">
          <h4 class="footer-title">Принимаем к оплате:</h4>
          <div class="payment-img"><img src="../assets/img/payment.svg"></div>
        </div>
        <div class="col">
          <b-nav class="footer-menu links-padding justify-content-end">
              <b-nav-item class="text-uppercase" v-for="(item, key) in footLinks"  :key="key" :to="key">
                  {{item}}
              </b-nav-item>
          </b-nav>
        </div>
      </div>
    </div>
    <div class="footer-logo"><img src="../assets/img/footer-logo.svg"></div>
  </div>
</template>
<script>

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
};

</script>
<style lang="scss">
@import '../assets/scss/main.scss';

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
  margin: 6.25rem 0rem;
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
}

.links-padding {
  a {
    padding: 0.5rem 0.5rem;
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
