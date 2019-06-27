<template lang="html">
 <b-container>
   <b-row>
     <b-col cols="12" lg="4" class="mt-auto">
       <h1 class="h1-header text-uppercase text-white">мы убираем, <br> вы отдыхаете!</h1>
       <p class="text-white mt-5">Мы помогаем экономить время и силы.
         Доверьтесь профессионалам и почувствуйте идеальную чистоту.</p>
     </b-col>
     <b-col cols="12" lg="8">
       <img src="../assets/img/banner-image.svg" class="home-banner-image">
     </b-col>
   </b-row>
 </b-container>
</template>

<script>

export default {
  };
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.home-banner-image {
  position: relative;
  left: -50%;
  @include media-breakpoint-down(sm) {
    left: -160%;
  }
}
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
