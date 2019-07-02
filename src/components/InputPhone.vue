<template lang="html">
  <b-form-input
     class="text-center rounded-pill mr-2 mb-3 border-primary"
     type="text"
     maxlength="17"
     placeholder="+7(_ _ _)_ _ _ _ _ _ _"
     v-mask="'+7##########'"
     v-model='content'
     @input="handleInput">
 </b-form-input>
</template>

<script>
export default {
  prop: ['value'],
  data () {
    return {
      content: this.value
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', this.content)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';
</style>
