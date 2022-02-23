<template>
  <div class="Sidebar_Component">
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse.isNavOpen" background-color="#304156" text-color="#fff">
    <el-menu-item index="1" @click="dashboardgo">
      <i class="el-icon-house"></i>
      <span slot="title">대시보드</span>
    </el-menu-item>
    <el-submenu index="2">  
      <template slot="title">
        <i class="el-icon-edit-outline"></i>
        <span slot="title">일반업무</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1" @click="issuelistgo">
          <i class="el-icon-warning"></i>
          <span>이슈현황</span>
        </el-menu-item>
        <el-menu-item index="2-2">
          <i class="el-icon-thumb"></i>
          <span>요청사항</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">  
      <template slot="title">
        <i class="el-icon-monitor"></i>
        <span slot="title">프로젝트</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1" @click="projectgo">
          <i class="el-icon-tickets"></i>
          <span>프로젝트 리스트</span>
        </el-menu-item>
        <el-menu-item index="3-2" @click="projectoutputsgo">
          <i class="el-icon-notebook-1"></i>
          <span>프로젝트 산출물</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="4" @click="noticego">
      <i class="el-icon-bell"></i>
      <span slot="title">공지사항</span>
    </el-menu-item>
    <el-menu-item index="5" @click="boardgo">
      <i class="el-icon-document"></i>
      <span slot="title">게시판</span>
    </el-menu-item>
    <el-menu-item index="6" @click="timetalbego">
      <i class="el-icon-date"></i>
      <span slot="title">업무일정</span>
    </el-menu-item>
    <el-submenu index="7">
      <template slot="title">
        <i class="el-icon-s-custom"></i>
      <span slot="title">관리자</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="7-1" @click="adminlistgo">
          <i class="el-icon-coordinate"></i>
          <span>관리자 목록</span>
        </el-menu-item>
        <el-menu-item index="7-2" @click="userlistgo">
          <i class="el-icon-user"></i>
          <span>사용자 목록</span>
        </el-menu-item>
        <el-menu-item index="7-3">
          <i class="el-icon-setting"></i>
          <span>환경설정</span>
        </el-menu-item>
        <el-menu-item index="7-4" @click="todolistgo">
          <i class="el-icon-document-checked"></i>
          <span>할일 목록</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
  </div>
</template>

<script>
import { store, mutations } from "@/store.js";

export default {
  data() {
    return {
      isCollapse: store
    }
  },
  methods: {
    dashboardgo() {
      this.$router.push({
        path: '/main'
      })
    },
    issuelistgo() {
      this.$router.push({
        path: '/issueList'
      })
    },
    projectgo() {
      this.$router.push({
        path: '/project'
      })
    },
    projectoutputsgo() {
      this.$router.push({
        path: '/projectoutputs'
      })
    },
    noticego() {
      this.$router.push({
        path: '/notice'
      })
    },
    boardgo() {
      this.$router.push({
        path: '/board/free'
      })
    },
    timetalbego() {
      this.$router.push({
        path: '/timetable'
      })
    },
    adminlistgo() {
      this.$router.push({
        path: '/adminlist'
      })
    },
    userlistgo() {
      this.$router.push({
        path: '/userlist'
      })
    },
    todolistgo() {
      this.$router.push({
        path: '/todo'
      })
    },
  }
}
</script>

<style>
.Sidebar_Component {
  height: 100%;
}

.el-menu-vertical-demo {
  height: 100%;
}

</style>