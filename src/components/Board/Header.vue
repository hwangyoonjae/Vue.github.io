<template>
  <div class="Header_Content">
    <b-navbar toggleable="lg" type="dark" variant="info">
      
      
      <b-navbar-brand href="#">Vue.js로 OTT 만들기</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"/>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/main">Main</b-nav-item>
          <b-nav-item to="/main/login">로그인</b-nav-item>
          <b-nav-item to="/board/free">자유게시판</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>


export default {
  components: {
    
  }
}
</script>

<style scoped>
.Header_Content {
  text-align: center;
}
</style>