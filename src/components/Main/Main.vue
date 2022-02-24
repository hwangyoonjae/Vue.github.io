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
              <ProjectChart />
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-4">
        <div class="card shadow mb-4">
          <div class="card-body">
            <div class="Issue-area">
              <IssueChart />
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
import IssueChart from '../Issue/Chart.vue'
import Timetable from '../Timetable/Timetable.vue'
import Board from '../Board/Board.vue'
import Todo from '../Todo/TodoMain.vue'

export default {
  components: {
    PanelGroup,
    Project,
    ProjectChart,
    IssueChart,
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

</style>
