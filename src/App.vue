<template>
  <div id="app">
    <div class="Sidebar_Component">
      <Sidebar />
    </div>
    <div class="Main_Component">
      <Navbar />
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar/Sidebar'
import Navbar from '@/components/Sidebar/Navbar'

export default {
  name: 'App',
  components: {
    Sidebar,
    Navbar
  }
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

.a {
  height: 100%;
}

.b {
  width: 100%;;
  height: 100%;
}
</style>
