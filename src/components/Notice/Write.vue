<template>
  <div class="Noticewrite_component">
    <div class="input-group" style="margin-bottom:10px;">
      <el-input placeholder="제목을 입력하세요" v-model="title"></el-input>
      <el-input placeholder="내용을 입력하세요" v-model="component"></el-input>
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
      name: 'James',
      updatedAt: null,
      updateObject: null,
      updateMode: this.$route.params.number > 0 ? true : false,
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
      let items = data.NoticeContent.sort((a,b) => {return b.number - a.number})
      const number = items[0].number + 1
      data.NoticeContent.push({
        number: number,
        title: this.title,
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

