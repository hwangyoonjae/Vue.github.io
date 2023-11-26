<template>
  <div class="Employee_component">
    <el-card class="box-card">
      <div class="Employee_component_search">
        <el-select v-model="value" placeholder="전체">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-input placeholder="검색하세요" v-model="input"></el-input>
        <el-button type="primary" icon="el-icon-search" @click="searchData">검색</el-button>
      </div>
    </el-card>
    <el-card class="box-card">
      <el-table :data="displayData">
        <el-table-column label="번호" prop="idx"></el-table-column>
        <el-table-column label="아이디" prop="id"></el-table-column>
        <el-table-column label="이름" prop="name"></el-table-column>
        <el-table-column label="부서" prop="depart"></el-table-column>
        <el-table-column label="이메일" prop="email"></el-table-column>
        <el-table-column label="등록일" prop="createdat">
          <template slot-scope="scope">
            {{ formatDate(scope.row.createdat) }}
          </template>
        </el-table-column>
      </el-table>
      <el-pagination :page-size="pageSize" layout="prev, pager, next" @current-change="handleCurrentChange" :total="items.length"></el-pagination>
    </el-card>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name : 'Employee',
  data() {
    return {
      items: '',
      page: 1,
      pageSize: 10,
      options: [
        { value: 'id', label: '아이디' },
        { value: 'name', label: '이름' }
      ],
      value: '',
      input: ''
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
    getData: function() {
      const baseURI = 'http://localhost:8443';
      this.$axios.get(`${baseURI}/api/userlist`)
      .then(result => {
        console.log(result.data)
        this.items = result.data
      })
    },
    searchData() {
      const baseURI = 'http://localhost:8443';
      const searchField = this.value;
      const searchTerm = this.input.toLowerCase();

      if (!searchField) {
        this.$message({
          type: 'warning',
          message: '검색 옵션을 선택하세요.',
        });
        return;
      }

      // 검색 조건으로 백엔드에 Axios 요청
      this.$axios.get(`${baseURI}/api/userlist/search`, {
        params: {
          field: searchField,
          term: searchTerm,
        },
      })
      .then(result => {
        console.log(result.data);
        this.items = result.data;
        // 검색 후 페이지네이션을 첫 번째 페이지로 리셋
        this.page = 1;
      })
      .catch(error => {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      });
    },
    handleCurrentChange(val) {
      this.page = val;
    },
    formatDate(date) {
      return moment(date).format('YYYY-MM-DD HH:mm:ss');
    }
  },
  mounted() {
    this.getData();
  }
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