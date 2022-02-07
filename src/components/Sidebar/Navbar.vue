<template>
  <div class="Header_Content">
    <div class="Burger">
      <Burger></Burger>
    </div>
    <div class="right_menu">
      <div class="Login">
        <el-button type="text" @click="logingo" class="Login_button">로그인</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Burger from '@/components/Sidebar/Burger'

export default {
  components: {
    Burger,
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
  height: 50px;
}

.Burger {
  float: left;
}

.right_menu {
  height: 100%;
  line-height: 46px;
  float: right;
  margin-right: 10px;
}

.Login{
  display: inline-block;
  padding: 0 8px;
  height: 100%;
  font-size: 20px;
}
</style>