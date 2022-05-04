<template>
  <div class="Issue_component">
    <el-form :model="Issue_form" status-icon label-width="120px" class="demo-ruleForm" ref="Issue_form" :rules="rules">
      <el-form-item label="구분" prop="division">
        <el-select v-model="Issue_form.division" placeholder="선택">
          <el-option label="Blue X-ray Enterprise" value="Blue X-ray Enterprise"></el-option>
          <el-option label="Blue X-ray DLP" value="Blue X-ray DLP"></el-option>
          <el-option label="전군DLP" value="전군DLP"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="제목" prop="title">
        <el-input type="text" v-model="Issue_form.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="내용" prop="component">
        <el-input type="text" v-model="Issue_form.component" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="담당자" prop="name">
        <el-input v-model="Issue_form.name"></el-input>
      </el-form-item>
      <el-form-item label="상태" prop="state">
        <el-select v-model="Issue_form.state" placeholder="선택">
          <el-option label="완료" value="완료"></el-option>
          <el-option label="진행" value="진행"></el-option>
          <el-option label="신규" value="신규"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="우선순위" prop="level">
        <el-select v-model="Issue_form.level" placeholder="선택">
          <el-option label="높은" value="높은"></el-option>
          <el-option label="보통" value="보통"></el-option>
          <el-option label="낮음" value="낮음"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="updateMode ? updateContent() : uploadContent('Issue_form')">등록하기</el-button>
        <el-button @click="resetForm('Issue_form')">초기화</el-button>
        <el-button type="danger" @click="cancle">취소하기</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import data from '@/data'

export default {
  data() {
    return {
      Issue_form: {
        title : '',
        component : '',
        name : '',
        state : '',
        level : '',
        division: '',
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
        ],
        state : [
          { required: true, message: '상태를 입력하세요.', trigger: 'change' }
        ],
        level : [
          { required: true, message: '우선순위를 입력하세요.', trigger: 'change' }
        ]
      }
    };
  },
  created() {
    if (this.$route.params.id > 0) {
      const number = Number(this.$route.params.id)
      this.updateObject = data.IssueContent.filter(item => item.id === number)[0]
      this.division = this.updateObject.division;
      this.title = this.updateObject.title;
      this.component = this.updateObject.component;
      this.name = this.updateObject.name;
      this.state = this.updateObject.state;
      this.level = this.updateObject.level;
    }
  },
  methods:{
    uploadContent(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          const baseURI = 'http://localhost:8443';
          var data = {
            division : this.Issue_form.division,
            title : this.Issue_form.title,
            component : this.Issue_form.component,
            name : this.Issue_form.name,
            state : this.Issue_form.state,
            level : this.Issue_form.level
          }
          this.$axios.post(`${baseURI}/api/post`, data)
          .then(result => {
            console.log(result)
            this.$router.push({
              path: '/issueList'
            })
          })
          .catch(error => {
            console.log(error)
          })
        } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    updateContent() {
      this.updateObject.division = this.division;
      this.updateObject.title = this.title;
      this.updateObject.component = this.component;
      this.updateObject.name = this.name;
      this.updateObject.state = this.state;
      this.updateObject.level = this.level;
      this.$router.push({
        path: '/issueList'
      })
    },
    cancle() {
      this.$router.push({
        path: '/issueList'
      })
    },
  }
}
</script>

<style scoped>

</style>