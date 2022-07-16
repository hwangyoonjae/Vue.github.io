<template>
  <div class="Main_Component">
    <PanelGroup />

    <!-- 프로젝트, 이슈차트 -->
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="card shadow mb-4">
          <div class="card-body">
            <div class="project-chart-header">
              <div class="row">
                <div class="col-lg-6">
                  <span>프로젝트 현황</span>
                </div>
                <div class="col-lg-6" style="text-align:right;">
                  <el-button size="small" @click=View_Detail()>상세보기</el-button>
                  <el-button size="small" @click=View_Chart()>차트보기</el-button>
                </div>
              </div>
            </div>
            <div v-if="Detail" class="Project-area">
              <Project />
            </div>
            <div v-if="chart" class="Project-area">
              <ProjectChart />
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="card shadow mb-4">
          <div class="card-body">
            <div class="issue-chart-header">
              <div class="row">
                <div class="col-lg-6">
                  <span>이슈 현황</span>
                </div>
                <div class="col-lg-6" style="text-align:right;">
                  <el-button size="small">상세보기</el-button>
                  <el-button size="small">차트보기</el-button>
                </div>
              </div>
            </div>
            <div class="Project-area">
              <IssueChart />
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

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
import Project from '../Project/Project.vue'
import ProjectChart from '../Project/Chart.vue'
import IssueChart from '../Task/IssueList/Chart.vue'
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
  },
  data() {
    return {
      Detail: true,
      chart: false,
    }
  },
  methods: {
    View_Detail() {
      this.Detail = true;
      this.chart = false;
    },
    View_Chart() {
      this.chart = true;
      this.Detail = false;
    }
  },
}
</script>

<style scoped>

.Main_Component {
  width: 100%;
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

.project-chart-header, .issue-chart-header {
  border-bottom: 1px solid #D8D8D8;
  margin-bottom: 5px;
  font-size: 15px;
  color: #595959;
  font-weight: 700;
}

.project-chart-header span, .issue-chart-header span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 10px;
}

</style>
