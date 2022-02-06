<template>
  <div class="Project_component">
    <el-table :data="items" style="width: 100%">
      <el-table-column label="번호" prop="number"></el-table-column>
      <el-table-column label="프로젝트명" prop="title"></el-table-column>
      <el-table-column label="시작일" prop="start"></el-table-column>
      <el-table-column label="완료일" prop="finish"></el-table-column>
      <el-table-column label="이슈" prop="problem"></el-table-column>
      <el-table-column label="상태" prop="state"></el-table-column>
      <el-table-column label="완료율" prop="success"></el-table-column>
    </el-table>
    <div class="Project_write">
        <el-button type="primary" @click="writeContent">프로젝트 등록하기</el-button>
    </div>
  </div>
</template>

<script>
import data from '@/data'

export default {
  data() {
    let items = data.ProjectContent.sort((a,b) => {return a.number - b.number})

    return {
      items: items
    }
  },
  methods: {
    writeContent() {
      this.$router.push({
        path: '/project/write'
      })
    }
  }
}
</script>

<style scoped>
.Project_component {
  width: 100%;
}

.Project_write {
  text-align: right;
  margin: 10px;
}
</style>