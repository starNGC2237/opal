<template>
  <div class="ad">
    <slot>AD</slot>
  </div>
</template>

<script>
export default {
    name: 'AD'
}
</script>

<style scoped>
.ad {
  width: 100%;
  height: 100px;
  background-color: #409EFF;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
