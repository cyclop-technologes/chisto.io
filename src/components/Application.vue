<template>
  <div class="mobile-application">
    <div class="container h-100 d-flex align-items-center">
      <div class="mobile-phone"><img src="../assets/img/iPhone_X.png"></div>
      <div class="application-header"><p class="text-uppercase">Приложение "ЧИСТО" создано для вашего удобства</p></div>
      <div class="application-download"></div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss">
@import '../assets/scss/main.scss';
.mobile-application {
  position: absolute;
  height: 126px;
  width: 100%;
  background-color: #1E2147;
  bottom: 0;
  left: 0;
}
.mobile-phone {
  position: absolute;
  top: -126px;
  z-index: 1;
}
.application-header {
  font-size: 18px;
  width: 350px;
  color: $white;
  margin-left: 240px;
}
</style>
