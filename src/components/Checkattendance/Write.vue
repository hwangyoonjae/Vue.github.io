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
              <el-form-item label="구분" prop="check">
                <el-select v-model="Attendance_form.check" placeholder="선택">
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
              <el-form-item label="시간" prop="state">
                {{ Attendance_form.state }}
              </el-form-item>
              <el-form-item class="button_component">
                <el-button type="success" @click="updateMode ? updateContent() : uploadContent('Attendance_form')">등록하기</el-button>
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
        check: '',
        updateObject: null,
        updateMode: this.$route.params.id > 0 ? true : false,
      },
      rules: {
        division : [
          { required: true, message: '구분을 선택하세요.', trigger: 'change' }
        ],
        title : [
          { required: true, message: '제목을 입력하세요.', trigger: 'blur' }
        ],
        component : [
          { required: true, message: '내용을 입력하세요.', trigger: 'blur' }
        ],
        name : [
          { required: true, message: '이름을 입력하세요.', trigger: 'blur' }
        ]
      }
    };
  },
  created() {
    if (this.$route.params.id > 0) {
      const number = Number(this.$route.params.id)
      this.updateObject = data.NoticeContent.filter(item => item.id === number)[0]
      this.check = this.updateObject.check;
      this.title = this.updateObject.title;
      this.component = this.updateObject.component;
      this.name = this.updateObject.name;
      //this.state = this.updateObject.state;

      this.fetchServerTime();
      this.Attendance_form.updateMode = true;
    }
  },
  methods:{
    fetchServerTime() {
    this.$axios.get('/api/getServerTime') // API 엔드포인트를 서버에 따라 수정
      .then(response => {
        // API 응답에서 서버 시간을 추출하고 'state'에 할당
        this.Attendance_form.state = response.data.serverTime;
      })
      .catch(error => {
        console.error('서버 시간 가져오기 실패:', error);
      });
    },
    uploadContent(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('등록되었습니다.');
          const baseURI = 'http://localhost:8443';
          var data = {
            check : this.Attendance_form.check,
            title : this.Attendance_form.title,
            component : this.Attendance_form.component,
            name : this.Attendance_form.name,
            state : this.Attendance_form.state,
          }
          this.$axios.post(`${baseURI}/api/post`, data)
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
      this.updateObject.check = this.check;
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