<template>
  <div class="IssuerequestList_component">
    <el-card class="box-card">
      <div class="IssuerequestList_component_search">
        <el-select v-model="value" placeholder="Select">
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
      <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000"></el-pagination>
      <div class="IssuerequestList_write">
        <el-button type="primary" @click="writeContent">등록하기</el-button>
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
  methods: {
    rowClick(item, index, e) {
      this.$router.push({
        path: `/issuerequest/list/detail/${item.id}`
      })
    },
    getData: function() {
      const baseURI = 'http://localhost:8443';
      this.$axios.get(`${baseURI}/api/request`)
      .then(result => {
        console.log(result.data)
        this.item = result.data
      })
    },
    writeContent() {
      this.$router.push({
        path: '/issuerequest/list/write/'
      })
    }
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

.IssuerequestList_write {
  text-align: right;
  margin-top: 10px;
}
</style>