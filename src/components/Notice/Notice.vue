<template>
  <div class="Notice_component">
    <!--<el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">-->
    <el-table :data="items" @row-click="rowClick">
      <el-table-column label="번호" prop="number"></el-table-column>
      <el-table-column label="제목" prop="title"></el-table-column>
      <el-table-column label="내용" prop="component"></el-table-column>
      <el-table-column label="작성자" prop="name"></el-table-column>
      <el-table-column label="작성일" prop="date"></el-table-column>
    </el-table>
    <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000"></el-pagination>
    <div class="Notice_write">
      <router-link to="/notice/write" style="margin-left: 10px">
        <el-button type="primary">글쓰기</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import data from '@/data'

export default {
  name : 'Notice',
  data() {
    let items = data.NoticeContent.sort((a,b) => {return b.number - a.number})
    return {
        items: items
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
    },
      handleDelete(index, row) {
        console.log(index, row);
    },
    rowClick(item, index, e) {
      this.$router.push({
        path: `detail/${item.number}`
      })
    },
    writeContent(index, row) {
      this.$router.push({
        name: 'NoticeWrite'
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