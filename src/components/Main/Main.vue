<template>
  <div class="Main_Component">
    <PanelGroup />

    <el-row style="background:#fff; padding:16px 16px; margin-bottom:32px;">
      <Project />
    </el-row>

    <el-row :gutter="32" class="page-group">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="board_part">
          <Board />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="todo_part">
          <Todo />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="a">
          <p>a</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PanelGroup from './Panelgroup.vue'
import Project from '../Project/Project.vue'
import Board from '../Board/Board.vue'
import Todo from '../Todo/TodoMain.vue'

export default {
  components: {
    PanelGroup,
    Project,
    Board,
    Todo,
  }
}
</script>

<style scoped>

.Main_Component {
  background-color: #f0f2f5;
}

.page-group{
  margin: 18px 0px 0px 0px;
  width: 100%;
}

.board_part, .todo_part {
  background: #fff;
  padding: 16px 0 0;
  margin-bottom: 32px;
}
</style>
