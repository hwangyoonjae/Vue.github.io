<template>
  <div class="Panelgroup_Component">
    <div class="row">
      <div class="col-lg-3 mb-3">
        <div class="card-panel" @click="checkattendancego">
          <div class="card-panel-icon-wrapper icon-project">
            <i class="el-icon-s-cooperation card-panel-icon"></i>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              출/퇴근
            </div>
            <count-to :start-val="0" :end-val="this.Checkattendance.length" :duration="2600" class="card-panel-num" />
          </div>
        </div>
      </div>
      <div class="col-lg-3 mb-3">
        <div class="card-panel" @click="usergo">
          <div class="card-panel-icon-wrapper icon-people">
            <i class="el-icon-s-custom card-panel-icon"></i>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              사원수
            </div>
            <count-to :start-val="0" :end-val="this.Userlist.length" :duration="2600" class="card-panel-num" />
          </div>
        </div>
      </div>
      <div class="col-lg-3 mb-3">
        <div class="card-panel" @click="noticetgo">
          <div class="card-panel-icon-wrapper icon-notice">
            <i class="el-icon-bell card-panel-icon"></i>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              공지사항
            </div>
            <count-to :start-val="0" :end-val="this.Noticelist.length" :duration="2600" class="card-panel-num" />
          </div>
        </div>
      </div>
      <div class="col-lg-3 mb-3">
        <div class="card-panel" @click="applycommutego">
          <div class="card-panel-icon-wrapper icon-issue">
            <i class="el-icon-document-checked card-panel-icon"></i>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              신청내역
            </div>
            <count-to :start-val="0" :end-val="this.Applylist.length" :duration="2600" class="card-panel-num" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to'

export default {
  components: { 
    countTo,
  },
  data () {
    return {
      Checkattendance: '',
      Issuelist: '',
      Applylist: '',
      Noticelist: '',
      Userlist: '',
    }
  },
  methods: {
    checkattendancego() {
      this.$router.push({
        path: '/checkattendance'
      })
    },
    usergo() {
      this.$router.push({
        path: '/employeelist'
      })
    },
    noticetgo() {
      this.$router.push({
        path: '/notice'
      })
    },
    applycommutego() {
      this.$router.push({
        path: '/applycommute'
      })
    },
    getnoticelistData: function() {
      const baseURI = 'http://localhost:8443';
      this.$axios.get(`${baseURI}/api/noticelist`)
      .then(result => {
        console.log(result.data)
        this.Noticelist = result.data
      })
    },
    getcheckattendanceData: function() {
      const baseURI = 'http://localhost:8443';
      this.$axios.get(`${baseURI}/api/checkattendancelist`)
      .then(result => {
        console.log(result.data)
        this.Checkattendance = result.data
      })
    },
    getapplylistData() {
      const baseURI = 'http://localhost:8443';
      this.$axios.get(`${baseURI}/api/applylist`)
      .then(result => {
        console.log(result.data)
        this.Applylist = result.data  //서버에서 데이터를 목록으로 보내므로 바로 할당하여 사용할 수 있다.
      })
    },
    getuserData() {
      const baseURI = 'http://localhost:8443';
      this.$axios.get(`${baseURI}/api/userlist`)
      .then(result => {
        console.log(result.data)
        this.Userlist = result.data  //서버에서 데이터를 목록으로 보내므로 바로 할당하여 사용할 수 있다.
      })
    }
  },
  mounted() {
    this.getcheckattendanceData();
    this.getapplylistData();
    this.getnoticelistData();
    this.getuserData();
  },
}
</script>

<style scoped>
.card-panel-col {
  margin-bottom: 20px;
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
  margin-bottom: 16px;
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
