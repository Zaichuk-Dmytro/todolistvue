<template>
  <v-app>
  <div class="main">
    <custom-header />
    <wrapper />
  </div>
  </v-app>
</template>

<script>
import Wrapper from '../components/Wrapper.vue'
export default {
  components: { Wrapper },
 

}
</script>

<style lang="scss" scoped>
.main {
  width: 600px;
  height: 1000px;
  margin: 0 auto;
  // border: 1px solid #000;
}
</style>