<template lang="html">
  <div class="home-banner-footer">
    <h4 class="h4-header
      text-uppercase
      text-center
      text-white
      mb-3">что вам нужно убрать?</h4>
    <b-container class="
      nav-list
      text-white
      flex-wrap">
        <b-link v-for="(item,key) in navItems" :key='key' :to="`/${key}`" class="banner-footer-item mr-2 mb-4">
            <div class="text-right">
              <font-awesome-icon :icon="item.icon"/>
            </div>
            <div class="text-left" v-html="item.title"></div>
        </b-link>
        <b-link v-b-modal.modalOther class="banner-footer-item mr-2 mb-4">
          <div class="text-right">
            <font-awesome-icon icon="ellipsis-h"/>
          </div>
          <div class="text-left">Другое</div>
        </b-link>
        <b-modal body-class='modal-other' id="modalOther" hide-footer hide-header>
          <h4 class="h4-header text-uppercase text-white">мы внимательны к каждому пожеланию</h4>
          <p class="my-4">Укажите ваш вопрос или пожелание, и менеджер оперативно вам перезвонит.</p>
          <b-form class="d-flex ">
            <b-form-input
               class="text-center rounded-pill mr-2 border-primary"
               type="tel"
               placeholder="+7(_ _ _)_ _ _ _ _ _ _"
           >
           </b-form-input>
           <b-button
               class="rounded-pill w-100" variant="primary" href="">
               Отправить заявку
           </b-button>

          </b-form>
        </b-modal>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navItems: {
        kvartiry: {
          title: 'Дом <br> квартира',
          icon: 'home',
        },
        repair: {
          title:'После <br> ремонта',
          icon: 'paint-roller',
        },
        okna: {
          title:'Окна <br> Витражи',
          icon: 'window-maximize',
        },
        office: {
          title:'Офисы <br> Коммерция',
          icon: 'building',
        },
        khimchistka: {
          title:'Химчистка',
          icon: 'leaf',
        },
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
@import '../assets/scss/modal.scss';

.modal-other {
  background: url('../assets/img/popup-bg.svg') no-repeat;
  background-size: cover;
}

.home-banner-footer {
  background-color: #1E2147;
  width: 100%;
  padding: 1.5rem 0;
  margin-top: auto;
}
.nav-list {
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner-footer-item {
  background: #6254C9;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  font-size: 14px;
  width: 140px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem;
  @include media-breakpoint-down(md) {
      flex: 25%;
      margin: 1rem !important;
  }
  &:hover {
    background-color: $white;
  }
}
a {
  text-decoration: none;
  color: $white;
  &:hover {
    color: $primary;
    text-decoration: none;
  }
}
</style>
