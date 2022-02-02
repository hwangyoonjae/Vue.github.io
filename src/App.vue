<template>
  <div id="app">
    <div class="app-wrapper">
      <div :class="{Sidebar_close : isCollapse.isNavOpen, Sidebar_open : !isCollapse.isNavOpen }">
        <Sidebar />
      </div>
      <div :class="{Home_Part_close : isCollapse.isNavOpen, Home_Part_open : !isCollapse.isNavOpen }">
        <Navbar />
        <router-view/>
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
}
</script>

<style>
html,body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
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
  width: 56px !important;
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

.Home_Part_open {
  margin-left: 210px;
  min-height: 100%;
}

.Home_Part_close {
  margin-left: 54px;
  min-height: 100%;
}
</style>
