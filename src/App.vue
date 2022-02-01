<template>
  <div id="app">
    <div class="Sidebar_Part">
      <Sidebar />
    </div>
    <div :class="{Home_Part_close : isCollapse.isNavOpen, Home_Part_open : !isCollapse.isNavOpen }">
      <Navbar />
      <router-view/>
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
  width: 100%;
  height: 100%;
  display: flex;
}

.Sidebar_Part {
  height: 100%;
}

.Home_Part_open {
  width: calc(100% - 200px);
  height: 100%;
}

.Home_Part_close {
  width: calc(100% - 64px);
  height: 100%;
}
</style>
