<template>
  <div class="Attendance_component">
    <el-card class="box-card">
      <div class="Attendance_component_search">
        <el-select v-model="value" placeholder="전체">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-input placeholder="검색하세요" v-model="input"></el-input>
        <el-button type="primary" icon="el-icon-search">검색</el-button>
      </div>
    </el-card>
    <el-card class="box-card">
      <el-table :data="displayData" @row-click="rowClick">
        <el-table-column label="번호" prop="number"></el-table-column>
        <el-table-column label="이름" prop="title"></el-table-column>
        <el-table-column label="부서" prop="component"></el-table-column>
        <el-table-column label="직책" prop="name"></el-table-column>
        <el-table-column label="근태여부" prop="check"></el-table-column>
        <el-table-column label="시간" prop="date"></el-table-column>
      </el-table>
      <el-pagination :page-size="pageSize" layout="prev, pager, next" @current-change="handleCurrentChange" :total="items.length"></el-pagination>
    </el-card>
  </div>
</template>

<script>
import data from '@/data'

export default {
  name : 'Attendance',
  data() {
    let items = data.CheckattendanceContent.sort((a,b) => {return b.number - a.number})
    return {
        items: items,
        page: 1,
        pageSize: 10,
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
        path: `checkattendance/detail/${item.number}`
      })
    },
    writeContent(index, row) {
      this.$router.push({
        name: 'CheckattendanceWrite'
      })
    },
    handleCurrentChange(val) {
      this.page = val;
    },
  },
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