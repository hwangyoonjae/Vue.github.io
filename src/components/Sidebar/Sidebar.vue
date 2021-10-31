<template>
  <div class="Sidebar_Content">
    <i class="fas fa-angle-left"></i>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {};
  }
};
</script>

<style scoped>
.Sidebar_Content {
    line-height: 50px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
}
</style>