<template>
  <div>
    <layout-header />
    <layout-main />
    <layout-nav />
  </div>
</template>



<script>
import LayoutHeader from "./Components/Header";
import LayoutMain from "./Components/Main";
import LayoutNav from "./Components/Nav";
export default {
  name: "Layout",
  components: {
    LayoutHeader,
    LayoutMain,
    LayoutNav
  }
};
</script>

<style lang="scss" scoped>
</style>
