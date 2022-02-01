<template>
  <div class="Header_Content">
      <Burger></Burger>
      <el-button type="text" @click="logingo" class="login_button">로그인</el-button>
  </div>
</template>

<script>
import Burger from '@/components/Sidebar/Burger'

export default {
  components: {
    Burger
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
  width: 100%;
  height: 60px;
  display: flex;
}

.Header_Content i {
  font-size: 20px;
}

.login_button {
  margin: 10px;
}
</style>