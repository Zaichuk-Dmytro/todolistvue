<template>
  <div class="header">
    <p class="header__title">TO DO LIST</p>
  </div>
</template>

<script>
export default {
  name: 'custom-header'
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 150px;
  

  .header__title {
    margin: 0;
    color: rgba(175, 47, 47, 0.35);;
    font-size: 75px;
  }
}
</style>