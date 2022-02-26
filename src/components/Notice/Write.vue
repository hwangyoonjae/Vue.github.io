<template>
  <div class="Noticewrite_component">
    <div class="input-group_title">
      <el-input placeholder="제목을 입력하세요" v-model="title"></el-input>
    </div>
    <div class="input-group_component">
      <el-input placeholder="내용을 입력하세요" v-model="component"></el-input>
    </div>
    <div class="input-group_component">
      <el-input placeholder="내용을 입력하세요" v-model="name"></el-input>
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
      title: '',
      component: '',
      date: '2021-01-24',
      name: 'James', // 로그인한 계정에 따라 자동으로 불러오도록 수정 필요
      updatedAt: null,
      updateObject: null,
      updateMode: this.$route.params.number > 0 ? true : false,
    }
  },
  created() {
    if (this.$route.params.number > 0) {
      const number = Number(this.$route.params.number)
      this.updateObject = data.NoticeContent.filter(item => item.number === number)[0]
      this.title = this.updateObject.title;
      this.component = this.updateObject.component;
    }
  },
  methods:{
    uploadContent() {
      let items = data.NoticeContent.sort((a,b) => {return b.number - a.number})
      const number = items[0].number + 1
      data.NoticeContent.push({
        number: number,
        title: this.title,
        component: this.component,
        name: this.name,
        date: this.date,
        updated_at: null
      })
      this.$router.push({
        path: '/notice'
      })
    },
    updateContent() {
      this.updateObject.title = this.title;
      this.updateObject.component = this.component;
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
.Noticewrite_component {
  width:100%; 
  padding:10px; 
}

.Noticewrite_component .input-group_title, .input-group_component {
  margin-bottom:10px;
}
</style>