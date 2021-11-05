<template>
  <div class="right-menu_component">
    <div class="search_component">
      <el-input placeholder="Type something" prefix-icon="el-icon-search" v-model="input2"></el-input>
    </div>
    <div class="Login_component">
      <b-navbar-nav>
        <b-nav-item to="/Login">Login</b-nav-item>
      </b-navbar-nav>
    </div>
  </div>
</template>

<script>
export default {
  name : "right-menu",
  components : {
    
  },
  data() {
    return {
      input2: '',
    }
  }
}
</script>

<style scoped>
.right-menu_component {
  float: right;
  height: 100%;
  line-height: 50px;
}

.search_component {
  display: inline-block;
  padding: 0 8px;
  height: 100%;
  font-size: 18px;
  color: #5a5e66;
  vertical-align: text-bottom;
}

.Login_component{
  display: inline-block;
  padding: 0 8px;
  height: 100%;
  font-size: 18px;
  color: #5a5e66;
  vertical-align: text-bottom;
}
</style>