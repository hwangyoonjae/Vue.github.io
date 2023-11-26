<template>
  <div class="Projectwrite_component">
    <el-row>
      <el-col :span="16">
        <el-card>
          <div slot="header" class="clearfix">
            <span>근태신청하기</span>
          </div>
          <div class="grid_content_input">
            <el-form :model="Apply_form" label-position="top" ref="Apply_form" :rules="rules">
              <el-form-item label="항목">
                <el-input v-model="Apply_form.category" placeholder="회의, 외근, 외출, 연장근무, 휴(무)일근무신청 입력"></el-input>
              </el-form-item>
              <el-form-item label="부서" prop="depart">
                <el-input v-model="Apply_form.depart"></el-input>
              </el-form-item>
              <el-form-item label="이름" prop="name">
                <el-input v-model="Apply_form.name"></el-input>
              </el-form-item>
              <el-form-item label="날짜">
                <el-date-picker v-model="Apply_form.proceedDate" type="date" placeholder="진행"></el-date-picker>
              </el-form-item>
              <el-form-item label="시작 시간">
                <el-time-picker v-model="Apply_form.startDate" :picker-options="timePickerOptions" placeholder="시간 선택"></el-time-picker>
              </el-form-item>
              <el-form-item label="종료 시간">
                <el-time-picker v-model="Apply_form.endDate" :picker-options="timePickerOptions" placeholder="종료 시간 선택"></el-time-picker>
              </el-form-item>
              <el-form-item label="내용">
                <el-input v-model="Apply_form.reason" type="textarea" placeholder="회의, 외근, 외출 사유, 연장근무, 휴(무)일근무신청 입력 (외근 시 고객사명도 기입 바람.)"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="success" @click="uploadContent('Apply_form')">등록하기</el-button>
                <el-button type="danger" @click="cancle">취소하기</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import data from '@/data'

export default {
  name: 'Commute',
  data() {
    return {
      Apply_form : {
        category: '',
        depart: '',
        name: '',
        proceedDate: '',
        createdat: '',
        startDate: '', // 시작시간
        endDate: '',
        reason: '' // 외근 사유
      },
      timePickerOptions: [
        {
          selectableRange: '00:00:00 - 23:59:59' // 예시 시간 범위, 필요에 따라 수정
        }
      ]
    }
  },
  created() {
    if (this.$route.params.number > 0) {
      const number = Number(this.$route.params.number)
      this.updateObject = data.ProjectContent.filter(item => item.number === number)[0]
      this.depart = this.updateObject.depart;
      this.name = this.updateObject.name;
      this.position = this.updateObject.position;
      this.state = this.updateObject.state;
    }
  },
  methods:{
    uploadContent(formName) {
      this.dialogVisible = false;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('등록되었습니다.');
          const baseURI = 'http://localhost:8443';
          var data = {
            category : this.Apply_form.category,
            depart : this.Apply_form.depart,
            name : this.Apply_form.name,
            proceedDate : this.Apply_form.proceedDate,
            startDate : this.Apply_form.startDate,
            endDate : this.Apply_form.endDate,
            reason : this.Apply_form.reason
          }
          console.log(data)
          this.$axios.post(`${baseURI}/api/applypost`, data)
          .then(result => {
            console.log(result)
            this.$router.push({
              path: '/applycommute'
            })
          })
          .catch(error => {
            console.log(error)
          })
        } else {
            console.log('error submit!!');
            return false;
          }
        }
      );
    },
    cancle() {
      this.$router.push({
        path: '/applycommute'
      })
    },
  }
}
</script>

<style scoped>
.Projectwrite_component {
  margin: 10px;
}

.clearfix {
  color: #595959;
  font-weight: 700;
}

.line {
  text-align: center;
}

.box-card {
  margin: 10px 0px;
}
</style>