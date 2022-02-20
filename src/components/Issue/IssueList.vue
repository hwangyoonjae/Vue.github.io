<template>
  <div class="Issue_component">
    <el-table :data="items" style="width: 100%">
      <el-table-column label="번호" prop="number"></el-table-column>
      <el-table-column label="제목" prop="title"></el-table-column>
      <el-table-column label="담당자" prop="name"></el-table-column>
      <el-table-column label="상태" prop="state"></el-table-column>
      <el-table-column label="우선순위" prop="level"></el-table-column>
      <el-table-column label="작성일" prop="created_at"></el-table-column>
      <el-table-column label="수정일" prop="updated_at"></el-table-column>
    </el-table>
    <div class="Issue_write">
        <el-button type="primary" @click="writeContent">이슈 등록</el-button>
    </div>
  </div>
</template>

<script>
import data from '@/data'

export default {
  data() {
    let items = data.IssueContent.sort((a,b) => {return a.number - b.number})

    return {
      items: items
    }
  },
  methods: {
    writeContent() {
      this.$router.push({
        path: '/issuelist/write'
      })
    }
  }
}
</script>

<style scoped>
.Issue_component {
  width: 100%;
}

.Issue_write {
  text-align: right;
  margin: 10px;
}
</style>