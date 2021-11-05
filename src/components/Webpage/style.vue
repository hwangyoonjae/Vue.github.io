<template>
  <div class="style_component">
    <div class="style_component_menu_group">
      <el-radio-group v-model="isCollapse" class="style_component_menu_radio">
        <el-radio-button :label="false">expand</el-radio-button>
        <el-radio-button :label="true">collapse</el-radio-button>
      </el-radio-group>
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="style_component_group">
      <div class="style_component_sidebar_group">
        <Sidebar></Sidebar>
      </div>
      <section>
        <div class="style_component">
          <div class="style_component_card_group">
            <Card></Card>
          </div>
          <div class="style_component_table_group">
            <Chart></Chart>
          </div>
          <div class="style_component_todo_group">
            <Todo></Todo>
            <Board></Board>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Sidebar from '../Sidebar/Sidebar.vue'
import Card from '../Card/Card.vue'
import Chart from '../Chart/Chart.vue'
import Board from '../Board/Board.vue'
import Todo from '../Todo/TodoMain.vue'

export default {
  name: 'style',
  components: {
    Sidebar,
    Card,
    Chart,
    Board,
    Todo,
  },
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
.Header_Content {
  display: none;
}

.style_component {
  width: 100%;
  height: 100%;
  position: relative;
}

.style_component_menu_group {
    transition: width .28s;
    width: 200px !important;
    height: 100%;
    position: fixed;
    font-size: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
}

.style_component_menu_radio {
  display: flex;
}

.el-menu-vertical-demo {
  height: 100%;
  background: #545c64;
}

.style_component_group{
  min-height: 100%;
  transition: margin-left .28s;
  margin-left: 200px;
  position: relative;
}

.style_component_sidebar_group {
  width: 100%;
  height: 50px;
}

.style_component_right_group {
  float: right;
}

.style_component_table_group {
  margin-left: 10px;
}

.style_component_todo_group {
  margin-left: 10px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100%;
}
</style>