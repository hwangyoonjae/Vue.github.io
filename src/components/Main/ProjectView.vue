<template>
  <div class="Project_component">
    <el-table :data="items" style="width: 100%">
      <el-table-column label="번호" prop="number"></el-table-column>
      <el-table-column label="프로젝트명" prop="title"></el-table-column>
      <el-table-column label="시작일" prop="start"></el-table-column>
      <el-table-column label="완료일" prop="finish"></el-table-column>
      <el-table-column label="이슈" prop="problem"></el-table-column>
      <el-table-column label="구분" prop="state"></el-table-column>
      <el-table-column label="완료율" prop="success"></el-table-column>
    </el-table>
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
}
</script>

<style scoped>
.Project_component {
  width: 100%;
}
</style>