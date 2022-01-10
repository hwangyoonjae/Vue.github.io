<template>
  <div>
       <el-radio-group v-model="isCollapse">
      <el-radio-button :label="false">
        <i class="fas fa-angle-double-right"></i>
      </el-radio-button>
      <el-radio-button :label="true">
        <i class="fas fa-angle-double-left"></i>
      </el-radio-button>
    </el-radio-group>
    <sidebar></sidebar>
  </div>
</template>

<script>

export default {
  components: {
   
  },
  data() {
      return {
        isCollapse: true
      }
    },
}
</script>

<style>
.Sidebar_Component {
  width: 100%;
  height: 100%;
  margin: 0;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
</style>