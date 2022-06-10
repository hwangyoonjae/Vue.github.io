<template>
  <div class="Projectwrite_component">
    <el-row>
      <el-col :span="16">
        <div class="grid_content_input">
          <el-form :rules="rules" label-width="120px">
            <el-form-item label="프로젝트명" prop="title">
              <el-input v-model="title"></el-input>
            </el-form-item>
            <el-form-item label="프로젝트 기간" required>
              <el-col :span="11" prop="start">
                <el-date-picker type="date" placeholder="시작일" v-model="start" format="yyyy/MM/dd" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11" prop="finish">
                <el-date-picker type="date" placeholder="종료일" v-model="finish" format="yyyy/MM/dd" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
              </el-col>   
            </el-form-item>
            <el-form-item label="상태구분" prop="state">
              <el-select v-model="state" placeholder="구분">
                <el-option label="프리세일즈" value="프리세일즈"></el-option>
                <el-option label="사업진행" value="사업진행"></el-option>
                <el-option label="사업종료" value="사업종료"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="라이센스" prop="license">
              <el-input v-model="license"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">
        </div>
      </el-col>
    </el-row>
    <div class="button-group">
      <el-button type="success" @click="updateMode ? updateContent() : uploadContent()">등록하기</el-button>
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
      rules: {
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
      this.updateObject = data.ProjectContent.filter(item => item.number === number)[0]
      this.title = this.updateObject.title;
      this.start = this.updateObject.start;
      this.finish = this.updateObject.finish;
      this.state = this.updateObject.state;
      this.license = this.updateObject.license;
    }
  },
  methods:{
    uploadContent() {
      let items = data.ProjectContent.sort((a,b) => {return b.number - a.number})
      const number = items[0].number + 1

      data.ProjectContent.push({
        number: number,
        title: this.title,
        start: this.start,
        finish: this.finish,
        problem: this.problem,
        state: this.state,
        success: this.success,
        license: this.license
      })
      this.$router.push({
        path: '/project'
      })
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
