<template>
  <div id="main-wrap">
    <router-view />
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
#main-wrap {
  position: fixed;
  left: 250px;
  top: 75px;
  right: 0;
  bottom: 0;
  border: 30px solid #f7f7f7;
  border-bottom: 0px;
}

</style>