<template>
  <div class="Noticewrite_component">
    <div class="input-group" style="margin-bottom:10px;">
      <el-input placeholder="프로젝트명을 입력하세요" v-model="title"></el-input>
      <el-select v-model="state" placeholder="상태">
        <el-option label="접수대기" value="접수대기"></el-option>
        <el-option label="진행중" value="진행중"></el-option>
        <el-option label="완료" value="완료"></el-option>
      </el-select>
    </div>
    <div class="button-group">
      <el-button type="success" @click="updateMode ? updateContent() : uploadContent()">등록하기</el-button>
      <el-button type="danger" @click="cancle">취소하기</el-button>
    </div>
  </div>
</template>

<script>
import data from '@/data'

export default {
  data() {
    return {
      title : '',
      start : '2016-05-03',
      finish : '2016-05-04',
      problem : '',
      state : '',
      success : ''
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
      data.ProjectContent.push({
        number: number,
        title: this.title,
        start: this.start,
        finish: this.finish,
        problem: this.problem,
        state: this.state,
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

