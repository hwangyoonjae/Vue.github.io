<template>
  <div class="Customer_component">
    <el-table :data="item" @row-click="rowClick">
      <el-table-column label="번호" prop="id"></el-table-column>
      <el-table-column label="구분" prop="division"></el-table-column>
      <el-table-column label="업체명" prop="company"></el-table-column>
      <el-table-column label="담당자" prop="name"></el-table-column>
      <el-table-column label="직급" prop="position"></el-table-column>
      <el-table-column label="연락처" prop="phone"></el-table-column>
      <el-table-column label="이메일" prop="mail"></el-table-column>
      <el-table-column label="등록일" prop="created_at"></el-table-column>
    </el-table>
    <div class="Issue_write">
      <el-button type="primary" @click="writeContent">이슈등록</el-button>
    </div>
  </div>
</template>

<script>
import data from '@/data'

export default {
  name : 'CustomerList',
  data() {
    //let items = data.CustomerList.sort((a,b) => {return b.number - a.number})
    return {
      item: '',
    }
  },
  methods: {
    rowClick(item, index, e) {
      this.$router.push({
        path: `/customerList/detail/${item.id}`
      })
    },
    writeContent() {
      this.$router.push({
        path: '/customerList/write'
      })
    },
    getData: function() {
      const baseURI = 'http://localhost:8443';
      this.$axios.get(`${baseURI}/api/customer`)
      .then(result => {
        console.log(result.data)
        this.item = result.data
      })
    }
  },
  mounted() {
    this.getData();
  }
}
</script>

<style scoped>
.Issue_component {
  width: 100%;
}

.Issue_write {
  text-align: right;
  margin: 10px;
}
</style>