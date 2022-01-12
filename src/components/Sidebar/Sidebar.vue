<template>
  <div class="Sidebar_Component">
    <el-radio-group v-model="isCollapse">
      <el-radio-button :label="false">
        <i class="fas fa-angle-double-right"></i>
      </el-radio-button>
      <el-radio-button :label="true">
        <i class="fas fa-angle-double-left"></i>
      </el-radio-button>
    </el-radio-group>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-menu-item index="1">
      <i class="el-icon-house"></i>
      <span slot="title">대시보드</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-magic-stick"></i>
      <span slot="title">프로젝트</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-bell"></i>
      <span slot="title">공지사항</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-document"></i>
      <span slot="title">게시판</span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-date"></i>
      <span slot="title">업무일정</span>
    </el-menu-item>
    <el-submenu index="6">
      <template slot="title">
        <i class="el-icon-user"></i>
      <span slot="title">내 페이지</span>
      </template>
      <el-menu-item-group>
        <span slot="title">소제목</span>
        <el-menu-item index="1-3">
          <el-link>업무일정</el-link>
        </el-menu-item>
        <el-menu-item index="1-3">
          <el-link href="/todo">할일목록</el-link>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      }
    },
  }
</script>

<style>
.Sidebar_Component {
  width: 100%;
  height: 100%;
  margin: 0;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
</style>