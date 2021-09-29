<template>
  <v-btn
    outlined
    :x-small="xSmall"
    class="custom-button"
  >
    <slot>
      {{ text }} 
    </slot>
  </v-btn>
</template>

<script>
export default {
  name: 'custom-button',
  props: {
    text: String,
    xSmall: Boolean,
  }
}
</script>

<style lang="sass" scoped>

</style>