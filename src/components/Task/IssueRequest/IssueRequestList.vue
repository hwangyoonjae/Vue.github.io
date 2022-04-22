<template>
  <div class="IssuerequestList_component">
    <el-card class="box-card">
      <div class="IssuerequestList_component_search">
        <el-select v-model="value" placeholder="Select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-input placeholder="검색하세요" v-model="input"></el-input>
        <el-button type="primary" icon="el-icon-search">Search</el-button>
      </div>
    </el-card>
    <el-card class="box-card">
      <el-table :data="items" @row-click="rowClick">
        <el-table-column label="번호" prop="number"></el-table-column>
        <el-table-column label="제목" prop="title"></el-table-column>
        <el-table-column label="내용" prop="component"></el-table-column>
        <el-table-column label="작성자" prop="name"></el-table-column>
        <el-table-column label="등록일" prop="created_at"></el-table-column>
        <el-table-column label="구분" prop="division"></el-table-column>
      </el-table>
      <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000"></el-pagination>
    </el-card>
    <div class="IssuerequestList_write">
        <el-button type="primary" @click="writeContent">등록하기</el-button>
    </div>
  </div>
</template>

<script>
import data from '@/data'

export default {
  name : 'Notice',
  data() {
    let items = data.IssueRequestContent.sort((a,b) => {return b.number - a.number})
    return {
        items: items,
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }],
        value: ''
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
        path: `/issuerequest/list/detail/${item.number}`
      })
    },
    writeContent() {
      this.$router.push({
        path: '/issuerequest/list/write/'
      })
    }
  },
}
</script>

<style>
.IssuerequestList_component {
  text-align: center;
  margin: 10px;
}

.box-card {
  margin: 10px 0px;
}

.IssuerequestList_component_search {
  display: flex;
}

.IssuerequestList_write {
  text-align: right;
  margin: 10px;
}
</style>