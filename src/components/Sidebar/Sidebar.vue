<template>
  <div class="Sidebar_Component">
    <el-radio-group v-model="isCollapse" :class="{ active: isCollapse }" @click="isCollapse = !isCollapse">
      <el-radio-button :label="false">
        <i class="fas fa-angle-double-right"></i>
      </el-radio-button>
      <el-radio-button :label="true">
        <i class="fas fa-angle-double-left"></i>
      </el-radio-button>
    </el-radio-group>
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse">
    <el-menu-item index="1">
      <i class="el-icon-s-home"></i>
      <span slot="title">홈</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-message-solid"></i>
      <span slot="title">공지사항</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-star-on"></i>
      <span slot="title">인기영상</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-s-order"></i>
      <span slot="title">시청기록</span>
    </el-menu-item>
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-video-camera-solid"></i>
        <span slot="title">영화</span>
      </template>
      <el-menu-item-group>
        <span slot="title">소제목</span>
        <el-menu-item index="1-3">한국영화</el-menu-item>
        <el-menu-item index="1-3">외국영화</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="6">
      <template slot="title">
        <i class="el-icon-s-platform"></i>
        <span slot="title">드라마</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-3">한국드라마</el-menu-item>
        <el-menu-item index="1-3">외국드라마</el-menu-item>
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
    methods: {
      toggle() {
        this.isCollapse = !this.isCollapse;
      }
    }
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