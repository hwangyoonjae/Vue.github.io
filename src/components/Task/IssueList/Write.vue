<template>
  <div class="Issue_component">
    <el-form status-icon label-width="120px" class="demo-ruleForm">
      <el-form-item label="구분" prop="division">
        <el-select v-model="division" placeholder="선택">
          <el-option label="Blue X-ray Enterprise" value="Blue X-ray Enterprise"></el-option>
          <el-option label="Blue X-ray DLP" value="Blue X-ray DLP"></el-option>
          <el-option label="전군DLP" value="전군DLP"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="제목" prop="title">
        <el-input type="text" v-model="title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="내용" prop="component">
        <el-input type="text" v-model="component" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="담당자" prop="name">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item label="상태" prop="state">
        <el-select v-model="state" placeholder="선택">
          <el-option label="완료" value="완료"></el-option>
          <el-option label="진행" value="진행"></el-option>
          <el-option label="신규" value="신규"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="우선순위" prop="level">
        <el-select v-model="level" placeholder="선택">
          <el-option label="높은" value="높은"></el-option>
          <el-option label="보통" value="보통"></el-option>
          <el-option label="낮음" value="낮음"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="updateMode ? updateContent() : uploadContent()">등록하기</el-button>
        <el-button @click="resetForm('ruleForm')">초기화</el-button>
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
      title : '',
      component : '',
      name : '',
      state : '',
      level : '',
      created_at: '2019-03-29 14:11:11',
      division: '',
      updated_at: null,
      updateObject: null,
      updateMode: this.$route.params.number > 0 ? true : false,
    }
  },
  created() {
    if (this.$route.params.number > 0) {
      const number = Number(this.$route.params.number)
      this.updateObject = data.IssueContent.filter(item => item.number === number)[0]
      this.division = this.updateObject.division;
      this.title = this.updateObject.title;
      this.component = this.updateObject.component;
      this.name = this.updateObject.name;
      this.state = this.updateObject.state;
      this.level = this.updateObject.level;
    }
  },
  methods:{
    uploadContent() {
      let items = data.IssueContent.sort((a,b) => {return b.number - a.number})
      const number = items[0].number + 1
      data.IssueContent.push({
        division: this.division,
        number: number,
        title: this.title,
        component: this.component,
        name: this.name,
        state: this.state,
        level: this.level,
        created_at: this.created_at,
        updated_at: null
      })
      this.$router.push({
        path: '/issueList'
      })
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