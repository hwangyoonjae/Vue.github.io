<template>
  <div class="Projectwrite_component">
    <el-row>
      <el-col :span="16">
        <el-card class="box-card">
          <div class="grid_content_input">
            <el-form :model="Project_form" ref="Project_form" :rules="rules" label-width="120px">
              <el-form-item label="프로젝트명" prop="title">
                <el-input v-model="Project_form.title"></el-input>
              </el-form-item>
              <el-form-item label="프로젝트 기간" required>
                <el-col :span="11" prop="start">
                  <el-date-picker type="date" placeholder="시작일" v-model="Project_form.start" format="yyyy/MM/dd" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11" prop="finish">
                  <el-date-picker type="date" placeholder="종료일" v-model="Project_form.finish" format="yyyy/MM/dd" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
                </el-col>   
              </el-form-item>
              <el-form-item label="상태구분" prop="state">
                <el-select v-model="Project_form.state" placeholder="구분">
                  <el-option label="프리세일즈" value="프리세일즈"></el-option>
                  <el-option label="사업진행" value="사업진행"></el-option>
                  <el-option label="사업종료" value="사업종료"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="라이센스" prop="license">
                <el-input v-model="Project_form.license"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="button-group">
      <el-button type="success" @click="updateMode ? updateContent() : uploadContent('Project_form')">등록하기</el-button>
      <el-button type="danger" @click="cancle">취소하기</el-button>
    </div>
  </div>
</template>

<script>
import data from '@/data'

export default {
  name: 'Write',
  data() {
    return {
      Project_form : {
        title : '',
        start : '',
        finish : '',
        problem : '7',        
        state : '',
        success : '100%',
        license : '',
        updatedAt: null,
        updateObject: null,
        updateMode: this.$route.params.number > 0 ? true : false,
      },
      rules: {
        title : [
          { required: true, message: '제목을 선택하세요.', trigger: 'blur' }
        ],
        start: [
          { required: true, message: '프로젝트 시작일을 선택해주세요.', trigger: 'change' },
        ],
        finish: [
          { required: true, message: '프로젝트 종료일을 선택해주세요.', trigger: 'change' },
        ],
        state : [
          { required: true, message: '상태를 입력하세요.', trigger: 'change' }
        ],
        license : [
          { required: true, message: '라이센스을 입력하세요.', trigger: 'blur' }
        ],
      }
    }
  },
  created() {
    if (this.$route.params.number > 0) {
      const number = Number(this.$route.params.number)
      this.updateObject = data.ProjectContent.filter(item => item.number === number)[0]
      this.title = this.updateObject.title;
      this.start = this.updateObject.start;
      this.finish = this.updateObject.finish;
      this.state = this.updateObject.state;
      this.license = this.updateObject.license;
    }
  },
  methods:{
    uploadContent(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('등록되었습니다.');
          const baseURI = 'http://localhost:8443';
          var data = {
            division : this.Project_form.division,
            title : this.Project_form.title,
            component : this.Project_form.component,
            name : this.Project_form.name,
            state : this.Project_form.state,
            level : this.Project_form.level
          }
          this.$axios.post(`${baseURI}/api/project`, data)
          .then(result => {
            console.log(result)
            this.$router.push({
              path: '/project'
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
    updateContent() {
      this.updateObject.title = this.title;
      this.updateObject.start = this.start;
      this.updateObject.finish = this.finish;
      this.updateObject.state = this.state;
      this.updateObject.license = this.license;
      this.$router.push({
        path: '/project'
      })
    },
    cancle() {
      this.$router.push({
        path: '/project'
      })
    },
  }
}
</script>

<style scoped>
.Projectwrite_component {
  margin: 10px;
}

.line {
  text-align: center;
}

.box-card {
  margin: 10px 0px;
}
</style>