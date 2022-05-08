<template>
  <div class="Issue_component">
    <el-form :model="Request_form" label-width="120px" class="demo-ruleForm" ref="Request_form" :rules="rules">
      <el-form-item label="구분" prop="division">
        <el-select v-model="Request_form.division" placeholder="선택">
          <el-option label="Blue X-ray Enterprise" value="Blue X-ray Enterprise"></el-option>
          <el-option label="Blue X-ray DLP" value="Blue X-ray DLP"></el-option>
          <el-option label="전군DLP" value="전군DLP"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="제목" prop="title">
        <el-input type="text" v-model="Request_form.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="내용" prop="component">
        <el-input type="text" v-model="Request_form.component" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="담당자" prop="name">
        <el-input v-model="Request_form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="updateMode ? updateContent() : uploadContent('Request_form')">등록하기</el-button>
        <el-button @click="resetForm('Request_form')">초기화</el-button>
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
      Request_form : {
        title : '',
        component : '',
        name : '',
        division: '',
        updateObject: null,
        updateMode: this.$route.params.number > 0 ? true : false,
      },
      rules: {
        title : [
          { required: true, message: '제목을 선택하세요.', trigger: 'change' }
        ],
        component : [
          { required: true, message: '내용을 입력하세요.', trigger: 'blur' }
        ],
        name : [
          { required: true, message: '이름을 입력하세요.', trigger: 'blur' }
        ],
        division : [
          { required: true, message: '구분을 입력하세요.', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    if (this.$route.params.number > 0) {
      const number = Number(this.$route.params.number)
      this.updateObject = data.IssueRequestContent.filter(item => item.number === number)[0]
      this.division = this.updateObject.division;
      this.title = this.updateObject.title;
      this.component = this.updateObject.component;
      this.name = this.updateObject.name;
    }
  },
  methods:{
    uploadContent(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('등록되었습니다.');
          const baseURI = 'http://localhost:8443';
          var data = {
            division : this.Request_form.division,
            title : this.Request_form.title,
            component : this.Request_form.component,
            name : this.Request_form.name
          }
          this.$axios.post(`${baseURI}/api/request/post`, data)
          .then(result => {
            console.log(result)
            this.$router.push({
              path: '/issuerequest/list'
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
      this.updateObject.division = this.division;
      this.updateObject.title = this.title;
      this.updateObject.component = this.component;
      this.updateObject.name = this.name;
      this.$router.push({
        path: '/issuerequest/list'
      })
    },
    cancle() {
      this.$router.push({
        path: '/issuerequest/list'
      })
    },
  }
}
</script>

<style scoped>

</style>