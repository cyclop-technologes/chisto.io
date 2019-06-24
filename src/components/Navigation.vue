<template lang="html">
  <div class="home-banner-footer">
    <h4 class="h4-header
      text-uppercase
      text-center
      text-white
      mb-3">что вам нужно убрать?</h4>
    <div class="
      nav-list
      text-white
      flex-wrap">
        <b-link v-for="(item,key) in navItems" :to="`/${key}`" class="banner-footer-item mr-2 mb-4">
            <div class="text-right">
              <font-awesome-icon :icon="item.icon"/>
            </div>
            <div class="text-left" v-html="item.title"></div>
        </b-link>
    </div>
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
        other: {
          title:'Другое',
          icon: 'ellipsis-h',
        },
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
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
