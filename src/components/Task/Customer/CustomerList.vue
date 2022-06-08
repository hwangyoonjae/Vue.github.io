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
      <el-table :data="item" @row-click="rowClick">
        <el-table-column label="번호" prop="id"></el-table-column>
        <el-table-column label="구분" prop="division"></el-table-column>
        <el-table-column label="업체명" prop="company"></el-table-column>
        <el-table-column label="담당자" prop="name"></el-table-column>
        <el-table-column label="직급" prop="position"></el-table-column>
        <el-table-column label="연락처" prop="phone"></el-table-column>
        <el-table-column label="이메일" prop="mail"></el-table-column>
        <el-table-column label="등록일" prop="created_at"></el-table-column>
      </el-table>
      <div class="Issue_write">
        <el-button type="primary" @click="writeContent">고객사 등록</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import data from '@/data'

export default {
  name : 'CustomerList',
  data() {
    //let items = data.CustomerList.sort((a,b) => {return b.number - a.number})
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
    }
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