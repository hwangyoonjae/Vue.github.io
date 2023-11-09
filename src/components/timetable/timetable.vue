<template>
  <div>
    <el-calendar :clickable="true" v-on:click="handleDateClick"/>
    <el-dialog :visible.sync="dialogVisible" title="일정 추가">
      <el-form ref="scheduleForm" :model="schedule" label-width="80px">
        <el-form-item label="작업명" prop="taskName">
          <el-input v-model="schedule.taskName" />
        </el-form-item>
        <el-form-item label="시간" prop="time">
          <el-time-picker v-model="schedule.time" format="HH:mm" />
        </el-form-item>
        <el-form-item label="장소" prop="location">
          <el-input v-model="schedule.location" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">취소</el-button>
        <el-button type="primary" @click="saveSchedule">저장</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      schedule: {
        taskName: '',
        time: '',
        location: '',
      },
    };
  },
  methods: {
    handleDateClick(date) {
      this.dialogVisible = true;
      // 여기서 선택한 날짜를 사용하거나 저장할 수 있어
      console.log('Selected Date:', date);
    },
    saveSchedule() {
      // 여기서 작업명, 시간, 장소를 저장하면 돼
      // 일반적으로 서버에 저장하는 로직을 추가해도 좋겠지
      console.log('Saved Schedule:', this.schedule);
      this.dialogVisible = false;
      // 저장 후 다이얼로그를 닫아줘
    },
  },
};
</script>

<style>
.dialog-footer {
  text-align: right;
}
</style>
