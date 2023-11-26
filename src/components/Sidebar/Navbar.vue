<template>
  <div>
    <div class="Header_Content">
      <div class="Burger">
        <Burger></Burger>
      </div>
      <div class="right_menu">
        <div>
          <el-button type="text" @click="logout">로그아웃</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Burger from '@/components/Sidebar/Burger'
import { EventBus } from '@/components/event-bus.js';

export default {
  components: {
    Burger,
  },
  methods: {
    logout() {
      // 로그아웃 처리 로직 추가
      this.$router.push({
        path: '/login'
      });
      this.showUserInfoCard = false;
    }
  }
}
</script>

<style scoped>
.Header_Content {
  width: 100%;
  height: 50px;
  background: white;
}

.Burger {
  float: left;
}

.right_menu {
  height: 100%;
  line-height: 46px;
  float: right;
  margin-right: 10px;
  display: flex;
}
</style>