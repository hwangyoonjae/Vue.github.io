<template>
  <div class="Notice_component">
    <el-row>
      <el-col :span="16">
        <el-card>
          <div slot="header" class="clearfix">
            <span>공지사항</span>
          </div>
          <div class="grid_content_input">
            <el-form :model="Notice_form" status-icon label-width="120px" class="demo-ruleForm" ref="Notice_form">
              <el-form-item label="제목" prop="title">
                <el-input type="text" v-model="Notice_form.title" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="내용" prop="component">
                <el-input type="textarea" v-model="Notice_form.component" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="이름" prop="name">
                <el-input type="text" v-model="Notice_form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item class="button_component">
                <el-button type="success" @click="uploadContent('Notice_form')">등록하기</el-button>
                <el-button @click="resetForm('Notice_form')">초기화</el-button>
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
      Notice_form : {
        title : '',
        component : '',
        name : '',
        updateObject: null,
        updateMode: this.$route.params.id > 0 ? true : false,
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
      this.Notice_form.updateMode = true;
    }
  },
  methods:{
    uploadContent(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const baseURI = 'http://localhost:8443';
          var data = {
            title : this.Notice_form.title,
            component : this.Notice_form.component,
            name : this.Notice_form.name,
          }
          this.$axios.post(`${baseURI}/notice/post`, data)
          .then(result => {
            alert('등록되었습니다.');
            console.log(result)
            this.$router.push({
              path: '/notice'
            })
          })
          .catch(error => {
            alert('에러발생.');
            console.log(error)
          })
        } else {
            alert('저장부터안함');
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
      this.$router.push({
        path: '/notice'
      })
    },
    cancle() {
      this.$router.push({
        path: '/notice'
      })
    },
  }
}
</script>

<style scoped>
.Notice_component {
  width: 100%;
  padding: 20px;
  background-color: #f0f2f5;
  position: relative;
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