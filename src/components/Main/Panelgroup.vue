<template>
  <div class="Panelgroup_Component">
    <el-row :gutter="40">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="projectgo">
        <div class="card-panel-icon-wrapper icon-project">
          <i class="el-icon-s-cooperation card-panel-icon"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            프로젝트
          </div>
          <count-to :start-val="0" :end-val="this.project" :duration="2600" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="usergo">
        <div class="card-panel-icon-wrapper icon-people">
          <i class="el-icon-s-custom card-panel-icon"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            사용자
          </div>
          <count-to :start-val="0" :end-val="this.user" :duration="2600" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="noticego">
        <div class="card-panel-icon-wrapper icon-notice">
          <i class="el-icon-message-solid card-panel-icon"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            공지사항
          </div>
          <count-to :start-val="0" :end-val="this.notice" :duration="2600" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="issuego">
        <div class="card-panel-icon-wrapper icon-issue">
          <i class="el-icon-warning card-panel-icon"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            이슈현황
          </div>
          <count-to :start-val="0" :end-val="this.issue" :duration="2600" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    </el-row>
  </div>
</template>

<script>
import data from '@/data'
import countTo from 'vue-count-to'

export default {
  components: { 
    countTo,
  },
  data () {
    const project = data.ProjectContent.sort((a,b) => {return b.number - a.number})
    const user = data.User.sort((a,b) => {return b.user_id - a.user_id})
    const notice = data.NoticeContent.sort((a,b) => {return b.number - a.number})
    const issue = data.IssueContent.sort((a,b) => {return b.number - a.number})
    return {
      project : project[0].number,
      user : user[0].user_id,
      notice : notice[0].number,
      issue : issue[0].number
    }
  },
  methods: {
    projectgo() {
      this.$router.push({
        path: '/project'
      })
    },
    usergo() {
      this.$router.push({
        path: '/userlist'
      })
    },
    noticego() {
      this.$router.push({
        path: '/notice'
      })
    },
    issuego() {
      this.$router.push({
        path: '/issue'
      })
    },
  }
}
</script>

<style scoped>
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
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
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
