<template>
  <div class="AdminList_component">
    <!--<el-table :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">-->
    <el-table :data="items">
      <el-table-column label="번호" prop="admin_number"></el-table-column>
      <el-table-column label="아이디" prop="admin_id"></el-table-column>
      <el-table-column label="이름" prop="name"></el-table-column>
      <el-table-column label="이메일" prop="email"></el-table-column>
      <el-table-column label="등록일" prop="created_at"></el-table-column>
      <el-table-column label="수정일" prop="updated_at"></el-table-column>
    </el-table>
    <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
import data from '@/data'

export default {
  data() {
    let items = data.Admin.sort((a,b) => {return b.admin_number - a.admin_number})
    
    const admin = Number(this.$route.params.admin_number);
    const contentData = data.User.filter(item => item.admin_number === admin)[0];
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
.AdminList_component {
  text-align: center;
}
</style>