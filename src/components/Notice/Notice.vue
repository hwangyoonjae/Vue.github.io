<template>
  <div class="Notice_component">
    <el-card class="box-card">
      <div class="Notice_component_search">
        <el-select v-model="value" placeholder="Select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-input placeholder="검색하세요" v-model="input"></el-input>
        <el-button type="primary" icon="el-icon-search">검색</el-button>
      </div>
    </el-card>
    <!--<el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">-->
    <el-card class="box-card">
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
    </el-card>
  </div>
</template>

<script>
import data from '@/data'

export default {
  name : 'Notice',
  data() {
    let items = data.NoticeContent.sort((a,b) => {return b.number - a.number})
    return {
        items: items,
        options: [{
          value: '제목',
          label: '제목'
        }, {
          value: '내용',
          label: '내용'
        }],
        value: '',
        input: ''
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
  margin: 10px;
} 

.box-card {
  margin: 10px 0px;
}

.Notice_component_search {
  display: flex;
}

.Notice_component_search > * {
  margin: 4px;
}

.Notice_write {
  text-align: right;
  margin: 10px;
}
</style>