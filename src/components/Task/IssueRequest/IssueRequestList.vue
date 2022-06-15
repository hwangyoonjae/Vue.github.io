<template>
  <div class="IssuerequestList_component">
    <el-card class="box-card">
      <div class="IssuerequestList_component_search">
        <el-select v-model="value" placeholder="전체">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-input placeholder="검색하세요" v-model="input"></el-input>
        <el-button type="primary" icon="el-icon-search">검색</el-button>
      </div>
    </el-card>
    <el-card class="box-card">
      <el-table :data="item" @row-click="rowClick">
        <el-table-column label="번호" prop="id" width="50"></el-table-column>
        <el-table-column label="제목" prop="title"></el-table-column>
        <el-table-column label="내용" prop="component"></el-table-column>
        <el-table-column label="작성자" prop="name" width="80"></el-table-column>
        <el-table-column label="등록일" prop="created_at" width="100"></el-table-column>
        <el-table-column label="구분" prop="division"></el-table-column>
      </el-table>
      <el-pagination :page-size="pageSize" :pager-count="11" layout="prev, pager, next" @current-change="handleCurrentChange" :total="item.length"></el-pagination>
      <div class="IssuerequestList_write">
        <el-button type="primary" @click="writeContent">요청등록</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name : 'IssueRequestList',
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
      input: '',
      //페이징 데이터
      page: this.$route.query.page ? this.$route.query.page : 1,
      size: this.$route.query.size ? this.$route.query.size : 10,
    }
  },
  computed: {
    displayData() {
      if (!this.item || this.item.length === 0) return [];
      return this.item.slice(this.pageSize * this.page - this.pageSize, this.pageSize * this.page)
    }
  },
  methods: {
    rowClick(id) {
      this.item.id = id; // 클릭한 게시글에 데이터를 보냄.
      this.$router.push({
        //name : 'IssueRequestDetail',
        path: './list/detail/',
        query : this.item
      })
    },
    getData() {
      const baseURI = 'http://localhost:8443';
      this.$axios.get(`${baseURI}/api/request`)
      .then(result => {
        console.log(result.data)
        this.item = result.data  //서버에서 데이터를 목록으로 보내므로 바로 할당하여 사용할 수 있다.
      })
    },
    writeContent() {
      this.$router.push({
        path: '/issuerequest/list/write/'
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

<style>
.IssuerequestList_component {
  text-align: center;
  margin: 10px;
}

.box-card {
  margin: 10px 0px;
}

.IssuerequestList_component_search {
  display: flex;
}

.IssuerequestList_component_search > * {
  margin: 4px;
}

.IssuerequestList_write {
  text-align: right;
  margin-top: 10px;
}
</style>