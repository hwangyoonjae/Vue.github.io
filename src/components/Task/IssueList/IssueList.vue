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
      <el-table :data="item" @row-click="rowClick">
        <el-table-column label="번호" prop="id"></el-table-column>
        <el-table-column label="제목" prop="title"></el-table-column>
        <el-table-column label="담당자" prop="name"></el-table-column>
        <el-table-column label="상태" prop="state"></el-table-column>
        <el-table-column label="우선순위" prop="level"></el-table-column>
        <el-table-column label="작성일" prop="created_at"></el-table-column>
        <el-table-column label="수정일" prop="updated_at"></el-table-column>
        <el-table-column label="구분" prop="division"></el-table-column>
      </el-table>
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
    }
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