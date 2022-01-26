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
      <span slot="title">
        <el-link href="/main" :underline="false">대시보드</el-link>
      </span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-monitor"></i>
      <span slot="title">
        <el-link href="/project" :underline="false">프로젝트</el-link>
      </span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-bell"></i>
      <span slot="title">
        <el-link href="/notice" :underline="false">공지사항</el-link>
      </span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-document"></i>
      <span slot="title">
        <el-link href="/board/free" :underline="false">게시판</el-link>
      </span>
    </el-menu-item>
    <el-menu-item index="5" >
      <i class="el-icon-date"></i>
      <span slot="title">
        <el-link href="/timetable" :underline="false">업무일정</el-link>
      </span>
    </el-menu-item>
    <el-submenu index="6">
      <template slot="title">
        <i class="el-icon-s-custom"></i>
      <span slot="title">관리자</span>
      </template>
      <el-menu-item-group>
        <span slot="title">소제목</span>
        <el-menu-item index="1-3">
          <i class="el-icon-coordinate"></i>
          <el-link href="/adminlist" :underline="false">관리자 목록</el-link>
        </el-menu-item>
        <el-menu-item index="1-4">
          <i class="el-icon-user"></i>
          <el-link href="/userlist" :underline="false">사용자 목록</el-link>
        </el-menu-item>
        <el-menu-item index="1-5">
          <i class="el-icon-setting"></i>
          <el-link :underline="false">환경설정</el-link>
        </el-menu-item>
        <el-menu-item index="1-6">
          <i class="el-icon-document-checked"></i>
          <el-link href="/todo" :underline="false">할일목록</el-link>
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

.el-menu-vertical-demo {
  height: 100%;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
</style>