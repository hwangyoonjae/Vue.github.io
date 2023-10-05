<template>
  <div class="Main_Component">
    <PanelGroup />

      <div class="col-lg-4 mb-4">
        <div class="card shadow mb-4">
          <div class="card-body">
            <div class="board-area">
              <Board />
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
import Board from '../Board/Board.vue'

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
