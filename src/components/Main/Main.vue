<template>
  <div class="Main_Component">
    <PanelGroup />

    <div class="row">
      <div class="col-lg-6 mb-3">
        <div class="card shadow mb-3">
          <el-card style="padding: 10px; height: 300px;">
            <div slot="header" class="clearfix">
              <i class="el-icon-date"></i>
              근무계획
              <el-button style="float: right; padding: 3px 0" type="text">더보기</el-button>
            </div>
            <div class="main">
              <div class="checkInTime">
                <h3>08:23분 출근</h3>
              </div>
              <div class="workingHours">09:00 ~ 18:00 (소정근무 8시간)</div>
              <div class="request_components">
                <el-button @click="requestOvertime">연장근무 신청</el-button>
                <el-button @click="requestLeave">휴(무)일 근무 신청</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </div>

      <div class="col-lg-6 mb-3">
        <div class="card shadow mb-3">
          <el-card style="padding: 10px; height: 300px;">
            <div slot="header" class="clearfix">
              <i class="el-icon-circle-check"></i>
              근무체크
              <el-button style="float: right; padding: 3px 0" type="text">더보기</el-button>
            </div>
            <div class="main">
              <div class="checkTime_components">
                <div class="current-time">
                  <h3>{{ serverTime }}</h3>
                </div>
                <div class="check">
                  <el-button type="primary" size="medium" plain disabled>퇴근전</el-button>
                </div>
              </div>

              <!-- 출근 및 퇴근 버튼 영역 -->
              <div class="checkInOut_components">
                <div class="checkInOut_components_checkIn" @click="showConfirmation('출근확인', 'checkIn')">
                  <i class="el-icon-success"></i>
                  <span>출근하기</span>
                </div>
                <div class="checkInOut_components_checkOut" @click="showConfirmation('퇴근확인', 'checkOut')">
                  <i class="el-icon-circle-close"></i>
                  <span>퇴근하기</span>
                </div>
              </div>

              <!-- 회의, 외출, 외근 버튼 영역 -->
              <div class="checkOther_components">
                <el-button @click="startMeeting">회의 시작</el-button>
                <el-button @click="goOut">외출 신청</el-button>
                <el-button @click="remoteWork">외근 신청</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>

    <div class="row">
        <div class="col-lg-4 mb-3">
          <div class="card shadow mb-3">
            <el-card style="padding: 10px; height: 300px;">
              <div slot="header" class="clearfix">
                <i class="el-icon-monitor"></i>
                근무현황
                <el-button style="float: right; padding: 3px 0" type="text">더보기</el-button>
              </div>
              <div class="main">
                <el-timeline :reverse="reverse">
                  <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
                    {{activity.content}}
                  </el-timeline-item>
                </el-timeline>  
              </div>
            </el-card>
          </div>
        </div>

        <div class="col-lg-8 mb-3">
          <div class="card shadow mb-3">
            <el-card style="padding: 10px; height: 300px;">
              <div slot="header" class="clearfix">
                <i class="el-icon-date"></i>
                주간테이블
                <el-button style="float: right; padding: 3px 0" type="text">더보기</el-button>
              </div>
              <div class="main">
                <el-table :data="timetableData" style="width: 100%" border :row-class-name="rowClassName">
                  <el-table-column prop="time" label="시간" width="120"></el-table-column>
                  <el-table-column prop="mon" label="월"></el-table-column>
                  <el-table-column prop="tue" label="화"></el-table-column>
                  <el-table-column prop="wed" label="수"></el-table-column>
                  <el-table-column prop="thu" label="목"></el-table-column>
                  <el-table-column prop="fri" label="금"></el-table-column>
                </el-table>
              </div>
            </el-card>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 mb-3">
          <div class="card shadow mb-3">
            <el-card style="padding: 10px; height: 300px;">
              <div slot="header" class="clearfix">
                <i class="el-icon-date"></i>
                최근근태내역
                <el-button style="float: right; padding: 3px 0" type="text">더보기</el-button>
              </div>
              <div class="main">
                <el-table :data="attendanceData" style="width: 100%" border :row-class-name="rowClassName">
                  <el-table-column prop="type" label="신청항목"></el-table-column>
                  <el-table-column prop="category" label="신청구분"></el-table-column>
                  <el-table-column prop="startDate" label="시작일자"></el-table-column>
                  <el-table-column prop="endDate" label="종료일자"></el-table-column>
                  <el-table-column prop="createdDate" label="작성일"></el-table-column>
                  <el-table-column prop="status" label="상태"></el-table-column>
                </el-table>
              </div>
            </el-card>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
import PanelGroup from './panelgroup.vue'
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
    Board
  },
  data() {
    return {
      Detail: true,
      chart: false,
      serverTime: '',
      reverse: true,
        activities: [
        {
          content: 'Event start',
          timestamp: '2018-04-15'
        }, 
        {
          content: 'Approved',
          timestamp: '2018-04-13'
        }, 
        {
          content: 'Success',
          timestamp: '2018-04-11'
        }
      ],
      timetableData: [
        {
          time: '09:00 AM',
          mon: 'Math',
          tue: 'History',
          wed: 'Science',
          thu: 'English',
          fri: 'Physical Ed.',
        },
        {
          time: '10:00 AM',
          mon: 'Math',
          tue: 'History',
          wed: 'Science',
          thu: 'English',
          fri: 'Physical Ed.',
        },
        {
          time: '11:00 AM',
          mon: 'Math',
          tue: 'History',
          wed: 'Science',
          thu: 'English',
          fri: 'Physical Ed.',
        }
      ],
      attendanceData: [
        {
          type: '휴가',
          category: '연차',
          startDate: '2023-09-01',
          endDate: '2023-09-05',
          createdDate: '2023-08-15',
          status: '미결재',
        },
        {
          type: '외근',
          category: '장소 이전',
          startDate: '2023-09-10',
          endDate: '2023-09-12',
          createdDate: '2023-08-25',
          status: '결재 완료',
        }
      ]
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
      // 서버 또는 클라이언트의 현재 시간을 가져옵니다.
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const amOrPm = hours >= 12 ? 'PM' : 'AM';
      const formattedTime = `${hours % 12}:${minutes}:${String(seconds).padStart(2, '0')}`;
      this.serverTime = formattedTime;
    },
    showConfirmation(title, action) {
      const confirmationMessage = action === 'checkIn' ? '출근 확인' : '퇴근 확인';
      alert(confirmationMessage);
    },
    rowClassName({ row }) {
      if (row.status === '미결재') {
        return 'unprocessed-row';
      } else if (row.status === '결재 완료') {
        return 'processed-row';
      }
      return ''; // 기본 클래스
    },
    requestOvertime() {
      // 연장근무 신청 로직을 여기에 추가
    },
    requestLeave() {
      // 휴(무)일 근무 신청 로직을 여기에 추가
    }
  },
  created() {
    this.updateServerTime(); // 컴포넌트 생성 시 현재 시간 업데이트
    setInterval(this.updateServerTime, 1000); // 1초마다 현재 시간 업데이트
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

.clearfix {
  line-height: 18px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
  font-weight: bold;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
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
</style>
