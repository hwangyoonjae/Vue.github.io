<template>
  <div class="Project_component">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="번호" prop="id"></el-table-column>
      <el-table-column label="프로젝트명" prop="title"></el-table-column>
      <el-table-column label="시작일" prop="start"></el-table-column>
      <el-table-column label="완료일" prop="finish"></el-table-column>
      <el-table-column label="이슈" prop="problem"></el-table-column>
      <el-table-column label="상태" prop="state"></el-table-column>
      <el-table-column label="완료율" prop="success"></el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tableData: [
      {
        id : 1,
        title : 'Blue X-ray Enterprise',
        start : '2016-05-03',
        finish : '2016-05-04',
        problem : '2',
        state : 'soso',
        success : '88%'
      },
      {
        id : 2,
        title : 'Blue X-ray DLP',
        start : '2016-05-03',
        finish : '2016-05-04',
        problem : '0',
        state : 'good',
        success : '100%'
      },
      {
        id : 3,
        title : '전군PC보안체계',
        start : '2016-05-03',
        finish : '2016-05-04',
        problem : '10',
        state : 'just',
        success : '50%'
      },
      {
        id : 4,
        title : 'DBSafer',
        start : '2016-05-03',
        finish : '2016-05-04',
        problem : '20',
        state : 'just',
        success : '90%'
      },
      ]
    }
  }
}
</script>

<style scoped>
.Project_component {
  width: 100%;
}
</style>