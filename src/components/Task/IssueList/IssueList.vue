<template>
  <div class="Issue_component">
    <el-card class="box-card">
      <div class="Issue_component_search">
        <el-select v-model="value" placeholder="전체">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-input placeholder="검색하세요" v-model="input"></el-input>
        <el-button type="primary" icon="el-icon-search">검색</el-button>
      </div>
    </el-card>
    <el-card class="box-card">
      <el-table :data="displayData" @row-click="rowClick">
        <el-table-column label="번호" prop="id"></el-table-column>
        <el-table-column label="제목" prop="title"></el-table-column>
        <el-table-column label="담당자" prop="name"></el-table-column>
        <el-table-column label="상태" prop="state"></el-table-column>
        <el-table-column label="우선순위" prop="level"></el-table-column>
        <el-table-column label="작성일" prop="created_at"></el-table-column>
        <el-table-column label="수정일" prop="updated_at"></el-table-column>
        <el-table-column label="구분" prop="division"></el-table-column>
      </el-table>
      <el-pagination :page-size="pageSize" :pager-count="11" layout="prev, pager, next" @current-change="handleCurrentChange" :total="item.length"></el-pagination>
      <div class="Issue_write">
        <el-button type="primary" @click="writeContent">이슈등록</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name : 'IssueList',
  data() {
    return {
      item: '',
      page: 1, // 페이지 로딩 시 초기에 보여줄 페이지 넘버
      pageSize: 10, // 한 페이지에 몇개의 데이터를 보여줄건지
      options: [{
        value: '전체',          
        label: '전체'
      }, {
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
      if (!this.item || this.item.length === 0) return [];
      return this.item.slice(this.pageSize * this.page - this.pageSize, this.pageSize * this.page)
    }
  },
  methods: {
    rowClick(item, index, e) {
      this.$router.push({
        path: `/issueList/detail/${item.id}`
      })
    },
    writeContent() {
      this.$router.push({
        path: '/issueList/write'
      })
    },
    getData: function() {
      const baseURI = 'http://localhost:8443';
      this.$axios.get(`${baseURI}/api/hello`)
      .then(result => {
        console.log(result.data)
        this.item = result.data
      })
    },
    // 10개씩 나눈 데이터를 페이지 넘버 클릭할 때마다 해당 데이터 보여주도록
    handleCurrentChange(val) {
      this.page = val;
    },
  },
  mounted() {
    this.getData();
  },
}
</script>

<style scoped>
.Issue_component {
  text-align: center;
  margin: 10px;
}

.box-card {
  margin: 10px 0px;
}

.Issue_component_search {
  display: flex;
}

.Issue_component_search > * {
  margin: 4px;
}

.Issue_write {
  text-align: right;
  margin-top: 10px;
}
</style>