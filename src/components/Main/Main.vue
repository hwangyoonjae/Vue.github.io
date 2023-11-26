<template>
  <div class="Main_Component">
    <PanelGroup />
    <div class="row">
      <div class="col-lg-6 mb-3">
        <div class="card shadow mb-3">
          <el-card style="height: 300px;">
            <div slot="header" class="clearfix"><i class="el-icon-date"></i>근무계획</div>
            <div class="main">
              <div class="checkInTime" style="margin-bottom: 20px;"><h3>다른업무를 봐야하거나 이후에 추가 근무하는 경우 신청바랍니다.</h3></div>
              <div class="workingHours" style="margin-bottom: 20px;">업무시간 : 09:00 ~ 18:00 (소정근무 8시간)</div>
              <div class="request_components" style="margin-bottom: 20px;">
                <el-button @click="applycommutgo()">근태신청하기</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </div>
      <div class="col-lg-6 mb-3">
        <div class="card shadow mb-3">
          <el-card style="height: 300px;">
            <div slot="header" class="clearfix"><i class="el-icon-circle-check"></i>근무체크</div>
            <div class="main">
              <div class="checkTime_components" style="margin-bottom: 20px;">
                <div class="current-time"><h3>현재시간 :{{ serverTime }} 출근 및 퇴근</h3></div>
              </div>
              <!-- 출근 및 퇴근 버튼 영역 -->
              <div class="checkInOut_components" style="margin-bottom: 20px;">
                <div class="checkInOut_components_checkIn">
                  <el-button @click="commutego()">출근하기</el-button>
                </div>
                <div class="checkInOut_components_checkOut">
                  <el-button @click="commutego()">퇴근하기</el-button>
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 mb-3">
        <div class="card shadow mb-3">
          <el-card style="height: 300px;">
            <div slot="header" class="clearfix"><i class="el-icon-monitor"></i>근무현황</div>
            <div class="main">
              <div class="timeline-container">
              <el-timeline :reverse="reverse">
                <el-timeline-item v-for="(activity, index) in Attendancelive" :key="index" :timestamp="formatTimestamp(activity.createdat)">
                  {{activity.name}}
                  {{activity.state}}
                </el-timeline-item>
              </el-timeline>
              </div>
            </div>
          </el-card>
        </div>
      </div>
      <div class="col-lg-8 mb-3">
        <div class="card shadow mb-3">
          <el-card style="height: 300px;">
            <div slot="header" class="clearfix"><i class="el-icon-date"></i>근태현황</div>
            <div>
              <el-table :data="attendanceData" height="200" style="width: 100%" border>
                <el-table-column prop="name" label="이름"></el-table-column>
                <el-table-column prop="depart" label="부서"></el-table-column>
                <el-table-column prop="position" label="직책"></el-table-column>
                <el-table-column prop="state" label="근태여부"></el-table-column>
                <el-table-column prop="createdat" label="근태시간"><template slot-scope="scope">{{ formatTimestamp(scope.row.createdat) }}</template>
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 mb-3">
        <div class="card shadow mb-3">
          <el-card style="height: 300px;">
            <div slot="header" class="clearfix"><i class="el-icon-date"></i>근태신청현황</div>
            <div>
              <el-table :data="displayData" height="200" style="width: 100%" border>
                <el-table-column prop="category" label="신청항목"></el-table-column>
                <el-table-column prop="name" label="이름"></el-table-column>
                <el-table-column prop="depart" label="부서"></el-table-column>
                <el-table-column prop="proceedDate" label="진행날짜">
                  <template slot-scope="scope">{{ formatDate(scope.row.proceedDate) }}</template>
                </el-table-column>
                <el-table-column prop="startDate" label="시작시간">
                  <template slot-scope="scope">{{ formatTime(scope.row.startDate) }}</template>
                </el-table-column>
                <el-table-column prop="endDate" label="종료시간">
                  <template slot-scope="scope">{{ formatTime(scope.row.endDate) }}</template>
                </el-table-column>
                <el-table-column prop="createdat" label="작성일">
                  <template slot-scope="scope">{{ formatDate(scope.row.createdat) }}</template>
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </div>
      </div>      
    </div>
  </div>
</template>

<script>
import moment from 'moment';

import PanelGroup from './panelgroup.vue'
import Board from '../Board/Board.vue'

export default {
  components: {
    PanelGroup,
    Board
  },
  data() {
    return {
      items: '',
      Attendancelist: '',
      Attendancelive: '',
      page: 1,
      pageSize: 10,
      Detail: true,
      chart: false,
      serverTime: '',
      reverse: true,
      confirmationMessage: '출근전',
      activities: [
        {
          state: ' ',
          timestamp: ' '
        }
      ]
    }
  },
  computed: {
    displayData() {        
      if (!this.items || this.items.length === 0) return [];
        return this.items.slice(this.pageSize * this.page - this.pageSize, this.pageSize * this.page)
    },
    attendanceData() {        
      if (!this.Attendancelist || this.Attendancelist.length === 0) return [];
        return this.Attendancelist.slice(this.pageSize * this.page - this.pageSize, this.pageSize * this.page)
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
    },
    updateServerTime() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
  
      // 24시간 항목으로 시간을 변경합니다.
      const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      this.serverTime = formattedTime;
    },
    applycommutgo() {
      this.$router.push({
        path: '/applycommutewrite'
      })
    },
    commutego() {
      this.$router.push({
        path: '/commute'
      })
    },
    getcheckData: function() {
      const baseURI = 'http://localhost:8443';
      this.$axios.get(`${baseURI}/api/checkattendancelist`)
      .then(result => {
        console.log(result.data)
        this.Attendancelist = result.data;
      })
    },
    getliveData: function() {
      const baseURI = 'http://localhost:8443';
      this.$axios.get(`${baseURI}/api/checkattendancelist`)
      .then(result => {
        console.log(result.data)
        this.Attendancelive = result.data.reverse();
      })
    },
    getData: function() {
      const baseURI = 'http://localhost:8443';
      this.$axios.get(`${baseURI}/api/applylist`)
      .then(result => {
        console.log(result.data)
        this.items = result.data
      })
    },
    formatTimestamp(date) {
      return moment(date).format('YYYY-MM-DD HH:mm:ss');
    },
    formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    formatTime(date) {
      return moment(date).format('HH:mm:ss');
    }
  },
  created() {
    this.updateServerTime(); // 컴포넌트 생성 시 현재 시간 업데이트
    setInterval(this.updateServerTime, 1000); // 1초마다 현재 시간 업데이트
  },
  mounted() {
    this.getData();
    this.getcheckData();
    this.getliveData();
  }
}
</script>

<style scoped>
.Main_Component {
  width: 100%;
  padding: 32px;
  position: relative;
}

.clearfix {
  line-height: 18px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
  font-weight: bold;
}
.main {
  width: 100%;
  padding: 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 수직 가운데 정렬을 위한 추가 */
  margin: auto; /* 수평 가운데 정렬을 위한 추가 */
}

.request_components, .checkTime_components, .checkInOut_components, .checkOther_components {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px; /* 각 영역 사이 간격 조절 */
}

/* 각 영역의 스타일 수정 가능 */
.current-time {
  text-align: center; 
}

.current-time > h3 {
  margin: 0px 10px;
}

.unprocessed-row {
  background-color: lightgray;
}

.processed-row {
  background-color: lightblue;
}

.timeline-container {
  width: 50%;
  max-height: 200px; /* 원하는 높이로 설정하세요 */
  overflow: auto;
}

button.el-button.el-button--default {
  margin: 0px 10px;
}
</style>
