<template lang="html">
  <div class="footer d-flex justify-content-center align-items-center flex-column">
    <div class="container footer-container">


    </div>
    <div class="footer-logo"><img src="../assets/img/footer-logo.svg"></div>
    <b-nav>
      <b-nav-item class="nav-item"><font-awesome-icon :icon="['fab', 'instagram']" /></b-nav-item>
      <b-nav-item class="nav-item"><font-awesome-icon :icon="['fab', 'vk']" /></b-nav-item>
      <b-nav-item class="nav-item"><font-awesome-icon :icon="['fab', 'odnoklassniki']" /></b-nav-item>
      <b-nav-item class="nav-item"><font-awesome-icon :icon="['fab', 'youtube']" /></b-nav-item>
    </b-nav>
  </div>
</template>
<script>


</script>
<style lang="scss">
@import '../assets/scss/main.scss';

.footer {
  background-color: $primary;
}

.footer-container {
  background-color: $secondary;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
}

.nav-item {
  a {
    color: $white;
    &:hover {
      opacity: 0.7;
    }
  }

}


</style>
