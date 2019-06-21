<template>
  <div class="middle-block">
    <slot></slot>
  </div>
</template>
<script>

</script>
<style lang="scss">
@import '../assets/scss/main.scss';
.middle-block {
  background-color: $gray;
  position: relative;
  z-index: 2;
}

</style>
