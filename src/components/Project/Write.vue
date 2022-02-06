<template>
  <div class="Projectwrite_component">
    <el-form :model="projectForm" :rules="rules" ref="projectForm" label-width="120px">
      <el-form-item label="프로젝트명" prop="title">
        <el-input v-model="projectForm.title"></el-input>
      </el-form-item>
      <el-form-item label="프로젝트 기간" required>
        <el-col :span="11" prop="start">
          <el-date-picker type="date" placeholder="시작일" v-model="projectForm.start" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11" prop="finish">
          <el-date-picker type="date" placeholder="종료일" v-model="projectForm.finish" style="width: 100%;"></el-date-picker>
        </el-col>   
      </el-form-item>
      <el-form-item label="상태구분" prop="state">
        <el-select v-model="projectForm.state" placeholder="구분">
          <el-option label="프리세일즈" value="프리세일즈"></el-option>
          <el-option label="사업진행" value="사업진행"></el-option>
          <el-option label="사업종료" value="사업종료"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="button-group">
      <el-button type="success" @click="updateMode ? updateContent() : uploadContent('formName')">등록하기</el-button>
      <el-button type="danger" @click="cancle">취소하기</el-button>
    </div>
  </div>
</template>

<script>
import data from '@/data'

export default {
  data() {
    return {
      projectForm: {
        title : '',
        start : '',
        finish : '',
        problem : '',
        state : '',
        success : ''
      },
      rules: {
        title: [
          { required: true, message: '프로젝트명을 입력해주세요.', trigger: 'blur' },
        ],
        state: [
          { required: true, message: '프로젝트 상태구분을 선택해주세요.', trigger: 'change' },
        ],
        start: [
          { required: true, message: '프로젝트 시작일을 선택해주세요.', trigger: 'change' },
        ],
        finish: [
          { required: true, message: '프로젝트 종료일을 선택해주세요.', trigger: 'change' },
        ],
      }
    }
  },
  created() {
    if (this.$route.params.number > 0) {
      const number = Number(this.$route.params.number)
      this.updateObject = data.Content.filter(item => item.number === number)[0]
      this.title = this.updateObject.title;
      this.component = this.updateObject.component;
    }
  },
  methods:{
    uploadContent() {
      let items = data.ProjectContent.sort((a,b) => {return a.number - b.number})
      const number = items[3].number + 1

      const date = dateFormat()

      data.ProjectContent.push({
        number: number,
        title: this.projectForm.title,
        start: this.projectForm.start,
        finish: this.projectForm.finish,
        problem: this.problem,
        state: this.projectForm.state,
        success: this.success
      })
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

