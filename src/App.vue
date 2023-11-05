<template>
  <div id="app">
    <div class="app-wrapper">
      <div v-if="shouldShowSidebar" :class="{Sidebar_close : isCollapse.isNavOpen, Sidebar_open : !isCollapse.isNavOpen }">
        <Sidebar />
      </div>
      <div :class="{Home_Part_close : isCollapse.isNavOpen, Home_Part_open : !isCollapse.isNavOpen && shouldShowHomePart }">
        <Navbar v-if="shouldShowNavbar"/>
        <router-view class="router-view-wrapper"/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar/Sidebar'
import Navbar from '@/components/Sidebar/Navbar'
import { store, mutations } from "@/store.js";

export default {
  name: 'App',
  components: {
    Sidebar,
    Navbar
  },
  data() {
    return {
      isCollapse: store
    }
  },
  computed: {
    shouldShowSidebar() {
      // 특정 페이지에서는 Sidebar를 숨김
      return !['/login', '/signup'].includes(this.$route.path);
    },
    shouldShowNavbar() {
      // 특정 페이지에서는 Navbar를 숨김
      return !['/login', '/signup'].includes(this.$route.path);
    },
    shouldShowHomePart() {
      // Home_Part_open 클래스를 조건부로 추가/제거
      return !['/login', '/signup'].includes(this.$route.path);
    }
  }
}
</script>

<style>
html,body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #f0f2f5;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}

.Sidebar_close {
  width: 63px !important;
  transition: 0.28s;
  height: 100%;
  position: fixed;
  background-color: #304156;
  z-index: 1001;
}

.Sidebar_open {
  width: 210px !important;
  transition: 0.28s;
  height: 100%;
  position: fixed;
  background-color: #304156;
  z-index: 1001;
}

.Home_Part_open:not(.login-page) {
  margin-left: 210px;
  height: 100%;
}

.login-page .Home_Part_open {
  margin-left: 0;
}

.Home_Part_close {
  margin-left: 63px;
  height: 100%;
}

.router-view-wrapper {
  height: calc(100vh - 50px); /* 화면 높이에서 0px만큼 빼서 화면 크기에 맞게 표시 */
}
</style>
