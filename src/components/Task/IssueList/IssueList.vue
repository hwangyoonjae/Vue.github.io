<template>
  <div class="Issue_component">
    <el-table :data="connectData" @row-click="rowClick">
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
  </div>
</template>

<script>
import data from '@/data'

export default {
  name : 'IssueList',
  data() {
    //let items = data.IssueContent.sort((a,b) => {return b.id - a.id})
    return {
      //items: items,
      connectData: "",
    }
  },
  methods: {
    /*rowClick(item, index, e) {
      this.$router.push({
        path: `/issueList/detail/${item.id}`
      })
    },
    writeContent() {
      this.$router.push({
        path: '/issueList/write'
      })
    }
  }*/
  get() {
      this.axios.get("/connectTest").then((response) => {
        this.connectData = response.data;
      });
    },
  },
  mounted() {
    this.get();
  },
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