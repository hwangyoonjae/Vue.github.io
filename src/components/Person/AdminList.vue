<template>
  <div class="AdminList_component">
    <el-card class="box-card">
      <div class="AdminList_component_search">
        <el-select v-model="value" placeholder="전체">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-input placeholder="검색하세요" v-model="input"></el-input>
        <el-button type="primary" icon="el-icon-search">검색</el-button>
      </div>
    </el-card>
    <!--<el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">-->
    <el-card class="box-card">  
      <el-table :data="items">
        <el-table-column label="번호" prop="admin_id"></el-table-column>
        <el-table-column label="아이디" prop="id"></el-table-column>
        <el-table-column label="이름" prop="name"></el-table-column>
        <el-table-column label="이메일" prop="email"></el-table-column>
        <el-table-column label="등록일" prop="created_at"></el-table-column>
        <el-table-column label="수정일" prop="updated_at"></el-table-column>
      </el-table>
      <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000"></el-pagination>
    </el-card>
  </div>
</template>

<script>
import data from '@/data'

export default {
  data() {
    let items = data.Admin.sort((a,b) => {return b.admin_id - a.admin_id})
    
    const admin = Number(this.$route.params.admin_id);
    const contentData = data.User.filter(item => item.admin_id === admin)[0];
    return {
        items: items,
        options: [{
          value: '아이디',
          label: '아이디'
        }, {
          value: '이름',
          label: '이름'
        }, {
          value: '이메일',
          label: '이메일'
        }],
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
  },
}
</script>

<style>
.AdminList_component {
  text-align: center;
  margin: 10px;
}

.box-card {
  margin: 10px 0px;
}

.AdminList_component_search {
  display: flex;
}

.AdminList_component_search > * {
  margin: 4px;
}
</style>