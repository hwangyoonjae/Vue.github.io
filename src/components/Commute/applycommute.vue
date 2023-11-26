<template>
  <div class="Attendance_component">
    <el-card class="box-card">
      <div class="Attendance_component_search">
        <el-select v-model="value" placeholder="전체">
          <el-option v-for="items in options" :key="items.value" :label="items.label" :value="items.value"></el-option>
        </el-select>
        <el-input placeholder="검색하세요" v-model="input"></el-input>
        <el-button type="primary" icon="el-icon-search" @click="searchData">검색</el-button>
      </div>
    </el-card>
    <el-card class="box-card">
      <el-table :data="displayData">
        <el-table-column label="번호" prop="id"></el-table-column>
        <el-table-column prop="category" label="신청항목"></el-table-column>
        <el-table-column prop="name" label="이름"></el-table-column>
        <el-table-column prop="depart" label="부서"></el-table-column>
        <el-table-column prop="proceedDate" label="진행날짜">
          <template slot-scope="scope">
            {{ formatDate(scope.row.proceedDate) }}
          </template>
        </el-table-column>
        <el-table-column prop="startDate" label="시작시간">
          <template slot-scope="scope">
            {{ formatTime(scope.row.startDate) }}
          </template>
        </el-table-column>
        <el-table-column prop="endDate" label="종료시간">
          <template slot-scope="scope">
            {{ formatTime(scope.row.endDate) }}
          </template>
        </el-table-column>
        <el-table-column prop="createdat" label="작성일">
          <template slot-scope="scope">
            {{ formatTimestamp(scope.row.createdat) }}
          </template>
        </el-table-column>
        <el-table-column prop="reason" label="신청사유"></el-table-column>
      </el-table>
      <el-pagination :page-size="pageSize" layout="prev, pager, next" @current-change="handleCurrentChange" :total="items.length"></el-pagination>
    </el-card>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name : 'Attendance',
  data() {
    return {
      items: '',
      page: 1,
      pageSize: 10,
      options: [
        { value: 'name', label: '이름' },
        { value: 'category', label: '신청항목' }
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
    writeContent(index, row) {
      this.$router.push({
        name: 'CheckattendanceWrite'
      })
    },
    getData: function() {
      const baseURI = 'http://localhost:8443';
      this.$axios.get(`${baseURI}/api/applylist`)
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
      this.$axios.get(`${baseURI}/api/apllylist/search`, {
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
    formatTimestamp(date) {
      return moment(date).format('YYYY-MM-DD HH:mm:ss');
    },
    formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    formatTime(date) {
      return moment(date).format('HH:mm:ss');
    }
  },
  mounted() {
    this.getData();
  }
}
</script>

<style scoped>
.Attendance_component {
  width: 100%;
  padding: 20px;
  background-color: #f0f2f5;
  position: relative;
} 

.box-card {
  margin: 10px 0px;
  text-align: center;
}

.Attendance_component_search {
  display: flex;
}

.Attendance_component_search > * {
  margin: 4px;
}

.Attendance_write {
  text-align: right;
  margin: 10px;
}
</style>