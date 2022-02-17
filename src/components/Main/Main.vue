<template>
  <div class="Main_Component">
    <PanelGroup />

    <!-- 프로젝트 -->
    <div class="row">
      <div class="col-lg-12 mb-8">
        <div class="card shadow mb-4">
          <div class="card-body">
            <div class="Project-area">
              <div class="project_title">
                <p>프로젝트</p>
              </div>
              <Project />
              <div style="text-align:right; margin-top:10px">
                <el-link href="/project" :underline="false">더보기</el-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 프로젝트, 이슈차트 -->
    <div class="row">
      <div class="col-lg-6 mb-4">
        <div class="card shadow mb-4">
          <div class="card-body">
            <div class="Project-area">
              <canvas id="myAreaChart"></canvas>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-4">
        <div class="card shadow mb-4">
          <div class="card-body">
            <div class="Issue-area">
              <canvas id="myAreaChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4 mb-4">
        <div class="card shadow mb-4">
          <div class="card-body">
            <div class="timetable-area">
              <Timetable />
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mb-4">
        <div class="card shadow mb-4">
          <div class="card-body">
            <div class="board-area">
              <Board />
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card shadow mb-4">
          <div class="card-body">
            <div class="todo-area">
              <Todo />
            </div>
          </div>
        </div>
      </div>
    </div>
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
