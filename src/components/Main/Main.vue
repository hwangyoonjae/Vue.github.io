<template>
  <div class="Main_Component">
    <PanelGroup />

    <el-row class="project">
      <div class="project_title">
        <p>프로젝트</p>
      </div>
      <Project />
      <div style="text-align:right; margin-top:10px">
        <el-link href="/project" :underline="false">더보기</el-link>
      </div>
    </el-row>

    <el-row :gutter="32" class="page-group">
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="project_part">
          
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="issue_part">
          
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="32" class="page-group">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="timetable_part">
          <Timetable />
        </div>
      </el-col>
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
    </el-row>
  </div>
</template>

<script>
import PanelGroup from './Panelgroup.vue'
import Project from './ProjectView.vue'
import ProjectChart from '../Project/Chart.vue'
import Timetable from '../Timetable/Timetable.vue'
import Board from '../Board/Board.vue'
import Todo from '../Todo/TodoMain.vue'

export default {
  components: {
    PanelGroup,
    Project,
    ProjectChart,
    Timetable,
    Board,
    Todo,
  }
}
</script>

<style scoped>

.Main_Component {
  width: 100%;
  height: 100%;
  padding: 32px;
  background-color: #f0f2f5;
  position: relative;
}

.project {
  width: 100%;
  height: 350px;
  background:#fff; 
  padding:16px 16px; 
  margin-bottom:32px;
}

.project_title {
  border-bottom: 1px solid #000408;
  padding-left: 10px; 
  padding-right: 10px;
}

.project .Project_write {
  display: none;
}

.page-group{
  margin: 18px 0px 0px 0px;
  width: 100%;
  height: 350px;
}

.project_part, .issue_part, .timetable_part, .board_part, .todo_part {
  background: #fff;
  padding: 16px 0 0;
  margin-bottom: 32px;
  width: 100%;
  height: 100%;
}
</style>
