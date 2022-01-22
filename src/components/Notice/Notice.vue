<template>
  <div class="Notice_component">
    <!--<el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">-->
    <el-table :data="tableData">
      <el-table-column label="번호" prop="number"></el-table-column>
      <el-table-column label="제목" prop="title"></el-table-column>
      <el-table-column label="작성자" prop="name"></el-table-column>
      <el-table-column label="작성일" prop="date"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="{}">
          <el-input v-model="search" size="mini" placeholder="작성자 검색"/>
        </template>
        <template>
          <el-button size="mini">수정</el-button>
          <el-button size="mini" type="danger">삭제</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000"></el-pagination>
    <div class="Notice_write">
        <el-button type="primary" @click="writeContent">글쓰기</el-button>
    </div>
  </div>
</template>

<script>
import data from '@/data'

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
    },
    writeContent() {
      this.$router.push({
        path: '/notice/write'
      })
    }
  },
}
</script>

<style>
.Notice_component {
  text-align: center;
} 

.Notice_write {
  text-align: right;
  margin: 10px;
}
</style>