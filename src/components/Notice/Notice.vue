<template>
  <div class="Notice_component">
    <el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
      <el-table-column label="번호" prop="number"></el-table-column>
      <el-table-column label="제목" prop="title"></el-table-column>
      <el-table-column label="작성자" prop="name"></el-table-column>
      <el-table-column label="작성일" prop="date"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="{}">
          <el-input v-model="search" size="mini" placeholder="작성자 검색"/>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tableData: [
        {
          number : '1',
          title : '질문있습니다',
          date: '2016-05-03',
          name: 'Tom',
        }, 
        {
          number : '2',
          title : '답변있습니다',
          date: '2016-05-02',
          name: 'John',
        }, 
        {
          number : '3',
          title : '대답하겠습니다.',
          date: '2016-05-04',
          name: 'Morgan',
        }, 
        {
          number : '4',
          title : '공지하겠습니다.',
          date: '2016-05-01',
          name: 'Jessy',
        }],
        search: '',
      }
    },
    methods: 
    {
      handleEdit(index, row) {
        console.log(index, row);
    },
      handleDelete(index, row) {
        console.log(index, row);
    }
  },
}
</script>

<style>

</style>