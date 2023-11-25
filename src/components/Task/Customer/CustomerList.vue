<template>
  <div class="Customer_component">
    <el-card class="box-card">
      <div class="Customer_component_search">
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
        <el-table-column label="구분" prop="division"></el-table-column>
        <el-table-column label="업체명" prop="company"></el-table-column>
        <el-table-column label="담당자" prop="name"></el-table-column>
        <el-table-column label="직급" prop="position"></el-table-column>
        <el-table-column label="연락처" prop="phone"></el-table-column>
        <el-table-column label="이메일" prop="mail"></el-table-column>
        <el-table-column label="등록일" prop="createdat"></el-table-column>
      </el-table>
      <el-pagination :page-size="pageSize" :pager-count="11" layout="prev, pager, next" @current-change="handleCurrentChange" :total="item.length"></el-pagination>
      <div class="Issue_write">
        <el-button type="primary" @click="writeContent">고객사 등록</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name : 'CustomerList',
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
    },
    // 10개씩 나눈 데이터를 페이지 넘버 클릭할 때마다 해당 데이터 보여주도록
    handleCurrentChange(val) {
      this.page = val;
    },
  },
  mounted() {
    this.getData();
  }
}
</script>

<style scoped>
.Customer_component {
  text-align: center;
  margin: 10px;
}

.box-card {
  margin: 10px 0px;
}

.Customer_component_search {
  display: flex;
}

.Customer_component_search > *{
  margin: 4px;
}

.Issue_write {
  text-align: right;
  margin-top: 10px;
}
</style>