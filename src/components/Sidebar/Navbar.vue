<template>
  <div class="Header_Content">
    <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>Tom</span>
    </el-header>
    </el-container>
  </div>
</template>

<script>


export default {
  components: {
    
  }
}
</script>

<style scoped>
.Header_Content {
  text-align: center;
  width: 100%;
}
</style>