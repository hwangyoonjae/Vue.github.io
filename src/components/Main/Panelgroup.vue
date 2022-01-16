<template>
  <div class="Panelgroup_Component">
    <el-breadcrumb class="el-icon-arrow-right" style="margin:10px">
      <el-breadcrumb-item :to="{ path: '/main' }">대시보드</el-breadcrumb-item>
      <el-breadcrumb-item>promotion management</el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
        <div class="card-panel-icon-wrapper icon-project">
          <i class="el-icon-s-cooperation card-panel-icon"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            프로젝트
          </div>
          <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
        <div class="card-panel-icon-wrapper icon-people">
          <i class="el-icon-s-custom card-panel-icon"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            사용자
          </div>
          <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
        <div class="card-panel-icon-wrapper icon-notice">
          <i class="el-icon-message-solid card-panel-icon"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            공지사항
          </div>
          <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
        <div class="card-panel-icon-wrapper icon-issue">
          <i class="el-icon-question card-panel-icon"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            이슈사항
          </div>
          <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
        </div>
      </div>
    </el-col>
  </el-row>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.panel-group {
  margin: 18px 0px 0px 0px;
  width: 100%;
}

.card-panel-col {
  margin-bottom: 32px;
}

.card-panel {
  height: 108px;
  cursor: pointer;
  font-size: 12px;
  position: relative;
  overflow: hidden;
  color: #666;
  background: #fff;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
  border-color: rgba(0, 0, 0, .05);
}

.card-panel-icon-wrapper:hover {
  color: #fff;
}

.icon-people:hover {
  background: #40c9c6;
}

.icon-project:hover {
  background: #36a3f7;
}

.icon-issue:hover {
  background: #f4516c;
}

.icon-notice:hover {
  background: #FFBF00
}

.icon-people {
  color: #40c9c6;
}

.icon-project {
  color: #36a3f7;
}

.icon-issue {
  color: #f4516c;
}

.icon-notice {
  color: #FFBF00
}

.card-panel-icon-wrapper {
  float: left;
  margin: 14px 0 0 14px;
  padding: 16px;
  transition: all 0.38s ease-out;
  border-radius: 6px;
}

.card-panel-icon {
  float: left;
  font-size: 48px;
}

.card-panel-description {
  float: right;
  font-weight: bold;
  margin: 26px;
  margin-left: 0px;
}

.card-panel-text {
  line-height: 18px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
  margin-bottom: 12px;
}

.card-panel-num {
  font-size: 20px;
}
</style>
