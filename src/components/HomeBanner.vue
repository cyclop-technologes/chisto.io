<template lang="html">
  <div class="home-banner-footer">
    <h4 class="h4-header text-uppercase text-center text-white mb-3">что вам нужно убрать?</h4>
    <div class="d-flex justify-content-center align-items-center text-white">
      <b-link to="/kvartiry">
        <div class="banner-footer-item mr-2">
          <div class="text-right"><font-awesome-icon icon='home'/></div>
          <div class="text-left">Дом<br> квартира</div>
        </div>
      </b-link>
      <b-link to="/repair">
        <div class="banner-footer-item mr-2">
          <div class="text-right"><font-awesome-icon icon='paint-roller'/></div>
          <div class="text-left">После<br> ремонта</div>
        </div>
      </b-link>
      <b-link to="/okna">
        <div class="banner-footer-item mr-2">
          <div class="text-right"><font-awesome-icon icon='window-maximize'/></div>
          <div class="text-left">Окна<br> Витражи</div>
        </div>
      </b-link>
      <b-link to="/office">
        <div class="banner-footer-item mr-2">
          <div class="text-right"><font-awesome-icon icon='building'/></div>
          <div class="text-left">Офисы<br> Коммерция</div>
        </div>
      </b-link>
      <b-link to="/khimchistka">
        <div class="banner-footer-item mr-2">
          <div class="text-right"><font-awesome-icon icon='leaf'/></div>
          <div class="text-left">Химчистка</div>
        </div>
      </b-link>
      <b-link to="/other">
        <div class="banner-footer-item">
          <div class="text-right"><font-awesome-icon icon='ellipsis-h'/></div>
          <div class="text-left">Другое</div>
        </div>
      </b-link>
    </div>
  </div>
</template>

<script>
export default {
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
