<template>
  <div class="Main_Component">
    <PanelGroup />

    <div class="row">
      <div class="col-lg-6 mb-3">
        <div class="card shadow mb-3">
          <el-card style="height: 300px;">
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
          <el-card style="height: 300px;">
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
                  <el-button type="primary" size="medium" plain disabled>{{ confirmationMessage }}</el-button>
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
                <el-button @click="showMeetingDialog">회의 시작</el-button>
                <el-dialog :visible.sync="dialogVisible" title="회의 시작" width="30%">
                  <!-- 다이얼로그 내용 입력 폼 -->
                  <el-form :model="meetingForm" label-position="top">
                    <el-form-item label="회의 시간">
                      <el-time-picker v-model="meetingForm.time" :picker-options="timePickerOptions" placeholder="시간 선택"></el-time-picker>
                    </el-form-item>
                    <el-form-item label="장소">
                      <el-input v-model="meetingForm.location" placeholder="장소 입력"></el-input>
                    </el-form-item>
                  </el-form>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible=false">취소</el-button>
                    <el-button type="primary" @click="startMeeting">시작</el-button>
                  </span>
                </el-dialog>
                <el-button @click="showGoOutDialog">외출 신청</el-button>
                <el-dialog :visible.sync="goOutDialogVisible" title="외출 신청" width="30%">
                  <!-- 다이얼로그 내용 입력 폼 -->
                  <el-form :model="goOutForm" label-position="top">
                    <el-form-item label="시작 시간">
                      <el-time-picker v-model="goOutForm.startTime" :picker-options="timePickerOptions" placeholder="시간 선택"></el-time-picker>
                    </el-form-item>
                    <el-form-item label="종료 시간">
                      <el-time-picker v-model="goOutForm.endTime" :picker-options="timePickerOptions" placeholder="종료 시간 선택"></el-time-picker>
                    </el-form-item>
                    <el-form-item label="사유">
                      <el-input v-model="goOutForm.reason" type="textarea" placeholder="외출 사유 입력"></el-input>
                    </el-form-item>
                  </el-form>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="goOutDialogVisible=false">취소</el-button>
                    <el-button type="primary" @click="submitGoOutRequest">시작</el-button>
                  </span>
                </el-dialog>
                <el-button @click="showRemoteWorkDialog">외근 신청</el-button>
                <el-dialog :visible.sync="remoteWorkDialogVisible" title="외근 신청" width="30%">
                  <!-- 다이얼로그 내용 입력 폼 -->
                  <el-form :model="remoteWorkForm" label-position="top">
                    <el-form-item label="날짜">
                      <el-date-picker v-model="remoteWorkForm.date" type="date" placeholder="날짜 선택"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="시작 시간">
                      <el-time-picker v-model="remoteWorkForm.startTime" :picker-options="timePickerOptions" placeholder="시작 시간 선택"></el-time-picker>
                    </el-form-item>
                    <el-form-item label="종료 시간">
                      <el-time-picker v-model="remoteWorkForm.endTime" :picker-options="timePickerOptions" placeholder="종료 시간 선택"></el-time-picker>
                    </el-form-item>
                    <el-form-item label="고객사명">
                      <el-input v-model="remoteWorkForm.client" placeholder="고객사명 입력"></el-input>
                    </el-form-item>
                      <el-form-item label="사유">
                      <el-input v-model="remoteWorkForm.reason" type="textarea" placeholder="외근 사유 입력"></el-input>
                    </el-form-item>
                  </el-form>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="remoteWorkDialogVisible=false">취소</el-button>
                    <el-button type="primary" @click="submitRemoteWorkRequest">시작</el-button>
                  </span>
                </el-dialog>
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
            <div slot="header" class="clearfix">
              <i class="el-icon-monitor"></i>
              근무현황
              <el-button style="float: right; padding: 3px 0" type="text">더보기</el-button>
            </div>
            <div class="main">
              <div class="timeline-container">
              <el-timeline :reverse="reverse">
                <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
                  {{activity.content}}
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
            <div slot="header" class="clearfix">
              <i class="el-icon-date"></i>
              주간테이블
              <el-button style="float: right; padding: 3px 0" type="text">더보기</el-button>
            </div>
            <div>
              <el-table :data="timetableData" height="200" style="width: 100%" border>
                <el-table-column prop="time" label="시간" width="180"></el-table-column>
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
          <el-card style="height: 300px;">
            <div slot="header" class="clearfix">
              <i class="el-icon-date"></i>
              최근근태내역
              <el-button style="float: right; padding: 3px 0" type="text" @click="checkattendancego">더보기</el-button>
            </div>
            <div>
              <el-table :data="attendanceData" height="200" style="width: 100%" border>
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
      confirmationMessage: '출근전',
      activities: [
        {
          content: ' ',
          timestamp: ' '
        }
      ],
      // 회의 시작 다이얼로그의 표시 여부를 제어하는 변수
      dialogVisible: false,
      meetingForm: [
        {
        time: '', // 선택한 시간
        location: '', // 입력한 장소
        }
      ],
      timePickerOptions: [
        {
        selectableRange: '09:00:00 - 18:00:00', // 예시 시간 범위, 필요에 따라 수정
        }
      ],
      // 외출 신청 다이얼로그의 표시 여부를 제어하는 변수
      goOutDialogVisible: false,
      goOutForm: [
        {
        startTime: '', // 외출 시작 시간
        endTime: '', // 외출 종료 시간
        reason: '', // 외출 사유
        }
      ],
      // 시간 선택용 옵션
      timePickerOptions: {
        selectableRange: '09:00:00 - 18:00:00', // 예시 시간 범위, 필요에 따라 수정
      },
      // 외근 신청 다이얼로그의 표시 여부를 제어하는 변수
      remoteWorkDialogVisible: false,
      remoteWorkForm: [
        {
        date: '', // 날짜
        startTime: '', // 시작 시간
        endTime: '', // 종료 시간
        client: '', // 고객사명
        reason: '', // 외근 사유
        },
      ],
      timetableData: [
        {
          time: '근무시간',
          mon: '08:00',
          tue: '08:21',
          wed: '09:00',
          thu: '08:45',
          fri: '-',
        },
        {
          time: '연장근무시간',
          mon: '08:00',
          tue: '08:21',
          wed: '09:00',
          thu: '08:45',
          fri: '-',
        },
        {
          time: '총 근무시간',
          mon: '08:00',
          tue: '08:21',
          wed: '09:00',
          thu: '08:45',
          fri: '-',
        },
        {
          time: '상태',
          mon: '정상처리',
          tue: '정상처리',
          wed: '정상처리',
          thu: '정상처리',
          fri: '-',
        },
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
        },
        {
          type: '외출',
          category: '장소 이전',
          startDate: '2023-09-10',
          endDate: '2023-09-12',
          createdDate: '2023-08-25',
          status: '결재 완료',
        },
        {
          type: '회의',
          category: '장애',
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
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
  
      // 24시간 형식으로 시간을 변경합니다.
      const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      this.serverTime = formattedTime;
    },
    showConfirmation(title, action) {
      const now = new Date();
      const formattedTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
      const formattedTimestamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${formattedTime}`;
      if (action === 'checkIn') {
        this.confirmationMessage = '퇴근전';
      } else if (action === 'checkOut') {
        this.confirmationMessage = '출근전';
      }
      const content = action === 'checkIn' ? `출근` : `퇴근`;
      this.activities.push({ content, timestamp: formattedTimestamp });
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
    },
    checkattendancego() {
      this.$router.push({
        path: '/checkattendance'
      })
    },
    showMeetingDialog() {
      this.dialogVisible = true;
    },
    startMeeting() {
      this.dialogVisible = false;
    },
    showGoOutDialog() {
      this.goOutDialogVisible = true;
    },
    submitGoOutRequest() {
      this.goOutDialogVisible = false;
    },
    showRemoteWorkDialog() {
      this.remoteWorkDialogVisible = true;
    },
    submitRemoteWorkRequest() {
      this.remoteWorkDialogVisible = false;
    },
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

.timeline-container {
  width: 50%;
  max-height: 200px; /* 원하는 높이로 설정하세요 */
  overflow: auto;
}

button.el-button.el-button--default {
  margin: 0px 10px;
}
</style>
