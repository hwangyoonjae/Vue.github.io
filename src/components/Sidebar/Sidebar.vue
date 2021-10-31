<template>
  <div class="sidebar_content">
    <div class="sidebar_content_icon">
    <i class="fas fa-angle-left"></i>
  </div>
  <div class="sidebar_content_text">
    <span>Dashboard</span>
  </div>
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
.sidebar_content {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
}

.sidebar_content_icon {
    line-height: 50px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
}

.sidebar_content_text {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
}
</style>