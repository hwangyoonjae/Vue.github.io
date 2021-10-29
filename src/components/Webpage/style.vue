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
    <div class="style_component_table_group">
      <Board></Board>
      <Todo></Todo>
    </div>
    <div class="style_component_todo_group">
      <Todo></Todo>
      <Board></Board>
    </div>
  </div>
</template>

<script>
import Board from '../Board/Board.vue'
import Todo from '../Todo/TodoMain.vue'

export default {
  name: 'style',
  components: {
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
.style_component {
  height: 100%;
  display: flex;
  margin-top: 20px;
}

.style_component_menu_group {
  height: 100%;
}

.style_component_menu_radio {
  margin-bottom: 20px;
  display: flex;
}

.el-menu-vertical-demo {
  background: #545c64;
}

.style_component_table_group {
  width: 100%;
  margin-left: 10px;
}

.style_component_todo_group {
  width: 100%;
  margin-left: 10px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100%;
}
</style>