<template>
  <div class="Sidebar_Component">
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse.isNavOpen" background-color="#304156" text-color="#fff">
    <el-menu-item index="1" @click="dashboardgo">
      <i class="el-icon-house"></i>
      <span slot="title">대시보드</span>
    </el-menu-item>
    <el-menu-item index="2" @click="commutego">
      <i class="el-icon-postcard"></i>
      <span slot="title">출/퇴근하기</span>
    </el-menu-item>
    <el-menu-item index="3" @click="noticego">
      <i class="el-icon-bell"></i>
      <span slot="title">공지사항</span>
    </el-menu-item>
    <el-menu-item index="4" @click="checkattendancego">
      <i class="el-icon-circle-check"></i>
      <span slot="title">근태확인</span>
    </el-menu-item>
    <el-menu-item index="5" @click="employeelistgo">
        <i class="el-icon-user-solid"></i>
        <span>사원리스트</span>
      </el-menu-item>
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
    commutego() {
      this.$router.push({
        path: '/commute'
      })
    },
    noticego() {
      this.$router.push({
        path: '/notice'
      })
    },
    employeelistgo() {
      this.$router.push({
        path: '/employeelist'
      })
    },
    checkattendancego() {
      this.$router.push({
        path: '/checkattendance'
      })
    },
    timetablego() {
      this.$router.push({
        path: '/timetable'
      })
    }
  }
}
</script>

<style>
.Sidebar_Component {
  height: 100%;
  border: none;
}

.el-menu-vertical-demo {
  height: 100%;
  border : none;
}

</style>