<template lang="html">
  <b-form-input
     class="text-center rounded-pill mr-2 mb-3 border-primary"
     type="text"
     maxlength="17"
     placeholder="+7(_ _ _)_ _ _ _ _ _ _"
     v-mask="'+7##########'"
     v-model="models.PhoneNumber"
 >
 </b-form-input>
</template>

<script>
export default {
  data () {
    return {
      models: {
        PhoneNumber:'',
      },
    }
  },
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';
</style>
