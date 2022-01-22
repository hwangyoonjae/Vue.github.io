<template>
  <div class="Header_Content">
    <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-search"></i>
        <i class="el-icon-bel"></i>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
      </el-dropdown>
      <el-button type="text" @click="logingo">로그인</el-button>
    </el-header>
    </el-container>
  </div>
</template>

<script>


export default {
  components: {
    
  },
  methods: {
    logingo() {
      this.$router.push({
        path: '/main/login'
      })
    },
  }
}
</script>

<style scoped>
.Header_Content {
  text-align: center;
  width: 100%;
}
</style>