<template>
  <div class="Project_component">
    <el-card class="box-card">
      <div class="Project_component_search">
        <el-select v-model="value" placeholder="전체">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-input placeholder="검색하세요" v-model="input"></el-input>
        <el-button type="primary" icon="el-icon-search">검색</el-button>
      </div>
    </el-card>
    <el-card class="box-card">
      <el-table :data="items" @row-click="rowClick" style="width: 100%">
        <el-table-column label="번호" prop="number"></el-table-column>
        <el-table-column label="프로젝트명" prop="title"></el-table-column>
        <el-table-column label="시작일" prop="start"></el-table-column>
        <el-table-column label="완료일" prop="finish"></el-table-column>
        <el-table-column label="이슈" prop="problem"></el-table-column>
        <el-table-column label="구분" prop="state"></el-table-column>
        <el-table-column label="완료율" prop="success"></el-table-column>
        <el-table-column label="라이센스" prop="license"></el-table-column>
      </el-table>
      <div class="Project_write">
        <el-button type="primary" @click="writeContent">프로젝트 등록하기</el-button>
      </div>
    </el-card>
      <span>{{items[0].number}}</span>
  </div>
</template>

<script>
import data from '@/data'

export default {
  data() {
    let items = data.ProjectContent.sort((a,b) => {return b.number - a.number})
    return {
      items: items,
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
  methods: {
    rowClick(item, index, e) {
      this.$router.push({
        path: `/project/detail/${item.number}`
      })
    },
    writeContent() {
      this.$router.push({
        path: '/project/write'
      })
    }
  }
}
</script>

<style scoped>
.Project_component {
  text-align: center;
  margin: 10px;
}

.box-card {
  margin: 10px 0px;
}

.Project_component_search {
  display: flex;
}

.Project_component_search > * {
  margin: 4px;
}

.Project_write {
  text-align: right;
  margin: 10px;
}
</style>