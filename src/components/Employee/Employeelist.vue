<template>
  <div class="Employee_component">
    <el-card class="box-card">
      <div class="Employee_component_search">
        <el-select v-model="value" placeholder="전체">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-input placeholder="검색하세요" v-model="input"></el-input>
        <el-button type="primary" icon="el-icon-search">검색</el-button>
      </div>
    </el-card>
    <el-card class="box-card">
      <el-table :data="items" @row-click="rowClick">
        <el-table-column label="번호" prop="user_id"></el-table-column>
        <el-table-column label="이름" prop="name"></el-table-column>
        <el-table-column label="부서" prop="component"></el-table-column>
        <el-table-column label="직급" prop="name"></el-table-column>
        <el-table-column label="등록일" prop="created_at"></el-table-column>
      </el-table>
      <el-pagination :page-size="pageSize" layout="prev, pager, next" @current-change="handleCurrentChange" :total="items.length"></el-pagination>
      <div class="Employee_write">
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
  name : 'Employee',
  data() {
    let items = data.User.sort((a,b) => {return b.user_id - a.user_id})
    
    const user = Number(this.$route.params.user_id);
    const contentData = data.User.filter(item => item.user_id === user)[0];
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
    computed: {
      displayData() {
        if (!this.items || this.items.length === 0) return [];
        return this.items.slice(this.pageSize * this.page - this.pageSize, this.pageSize * this.page)
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
    },
    handleCurrentChange(val) {
      this.page = val;
    },
  },
}
</script>

<style>
.Employee_component {
  width: 100%;
  padding: 20px;
  background-color: #f0f2f5;
  position: relative;
} 

.box-card {
  margin: 10px 0px;
  text-align: center;
}

.Employee_component_search {
  display: flex;
}

.Employee_component_search > * {
  margin: 4px;
}

.Employee_write {
  text-align: right;
  margin: 10px;
}
</style>