<template>
  <div class="Attendance_component">
    <el-row>
      <el-col :span="16">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>근태 작성</span>
          </div>
          <div class="grid_content_input">
            <el-form :model="Attendance_form" status-icon label-width="120px" class="demo-ruleForm" ref="Attendance_form" :rules="rules">
              <el-form-item label="구분" prop="state">
                <el-select v-model="Attendance_form.state" placeholder="선택">
                  <el-option label="출근" value="출근"></el-option>
                  <el-option label="퇴근" value="퇴근"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="이름" prop="title">
                <el-input type="text" v-model="Attendance_form.title" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="부서" prop="component">
                <el-input type="text" v-model="Attendance_form.component" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="직책" prop="name">
                <el-input v-model="Attendance_form.name"></el-input>
              </el-form-item>
              <el-form-item class="button_component">
                <el-button type="success" @click="uploadContent('Attendance_form')">등록하기</el-button>
                <el-button @click="resetForm('Attendance_form')">초기화</el-button>
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
export default {
  data() {
    return {
      Attendance_form : {
        title : '',
        component : '',
        name : '',
        state : '',
      },
    };
  },
  created() {
    if (this.$route.params.id > 0) {
      const number = Number(this.$route.params.id)
      this.updateObject = data.NoticeContent.filter(item => item.id === number)[0]
      this.title = this.updateObject.title;
      this.component = this.updateObject.component;
      this.name = this.updateObject.name;
      this.state = this.updateObject.state;

      this.fetchServerTime();
      this.Attendance_form.updateMode = true;
    }
  },
  methods:{
    uploadContent(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('등록되었습니다.');
          const baseURI = 'http://localhost:8443';
          var data = {
            state : this.Attendance_form.state,
            title : this.Attendance_form.title,
            component : this.Attendance_form.component,
            name : this.Attendance_form.name
          }
          this.$axios.post(`${baseURI}/api/checkattendancepost`, data)
          .then(result => {
            console.log(result)
            this.$router.push({
              path: '/checkattendance'
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
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    updateContent() {
      this.updateObject.title = this.title;
      this.updateObject.component = this.component;
      this.updateObject.name = this.name;
      this.updateObject.state = this.state;
      this.$router.push({
        path: '/checkattendance'
      })
    },
    cancle() {
      this.$router.push({
        path: '/checkattendance'
      })
    },
  }
}
</script>

<style scoped>
.Attendance_component {
  margin: 10px;
  text-align: left;
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