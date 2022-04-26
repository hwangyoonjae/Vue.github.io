<template>
  <div class="UserList_component">
    <el-card class="box-card">
      <div class="UserList_component_search">
        <el-select v-model="value" placeholder="Select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-input placeholder="검색하세요" v-model="input"></el-input>
        <el-button type="primary" icon="el-icon-search">검색</el-button>
      </div>
    </el-card>
    <!--<el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">-->
    <el-card class="box-card">
      <el-table :data="items">
        <el-table-column label="번호" prop="user_id"></el-table-column>
        <el-table-column label="아이디" prop="id"></el-table-column>
        <el-table-column label="이름" prop="name"></el-table-column>
        <el-table-column label="이메일" prop="email"></el-table-column>
        <el-table-column label="등록일" prop="created_at"></el-table-column>
      </el-table>
      <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000"></el-pagination>
    </el-card>
  </div>
</template>

<script>
import data from '@/data'
import user from '@/components/Login/Signup'

export default {
  components: {
    user,
  },
  data() {
    let items = data.User.sort((a,b) => {return b.user_id - a.user_id})
    
    const user = Number(this.$route.params.user_id);
    const contentData = data.User.filter(item => item.user_id === user)[0];
    return {
        items: items
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
.UserList_component {
  text-align: center;
  margin: 10px;
}

.box-card {
  margin: 10px 0px;
}

.UserList_component_search {
  display: flex;
}

</style>