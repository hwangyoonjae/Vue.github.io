<template>
  <div id="app">
    <div class="a">
      <Sidebar />
    </div>
    <div class="b">
      <Header />
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Board/Header'
import Sidebar from '@/components/Sidebar/Sidebar'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar
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
