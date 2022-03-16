<template>
  <div class="Customer_component">
    <el-form status-icon label-width="120px" class="demo-ruleForm">
      <el-form-item label="구분" prop="division">
        <el-select v-model="division" placeholder="선택">
          <el-option label="Blue X-ray Enterprise" value="Blue X-ray Enterprise"></el-option>
          <el-option label="Blue X-ray DLP" value="Blue X-ray DLP"></el-option>
          <el-option label="전군DLP" value="전군DLP"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="업체명" prop="company">
        <el-input type="text" v-model="company" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="담당자" prop="name">
        <el-input type="text" v-model="name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="직급" prop="rank">
        <el-select v-model="rank" placeholder="선택">
          <el-option label="사원" value="사원"></el-option>
          <el-option label="대리" value="대리"></el-option>
          <el-option label="부장" value="부장"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="연락처" prop="phone">
        <el-input type="text" v-model="phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="이메일" prop="email">
        <el-input type="text" v-model="email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="updateMode ? updateContent() : uploadContent()">등록하기</el-button>
        <el-button @click="resetForm('ruleForm')">초기화</el-button>
        <el-button type="danger" @click="cancle">취소하기</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import data from '@/data'

export default {
  data() {
    return {
      division: '',
      company : '',
      name : '',
      rank : '',
      phone : '',
      email : '',
      created_at: '2019-03-29 14:11:11',
      updated_at: null,
      updateObject: null,
      updateMode: this.$route.params.number > 0 ? true : false,
    }
  },
  created() {
    if (this.$route.params.number > 0) {
      const number = Number(this.$route.params.number)
      this.updateObject = data.CustomerList.filter(item => item.number === number)[0]
      this.division = this.updateObject.division;
      this.company = this.updateObject.company;
      this.name = this.updateObject.name;
      this.rank = this.updateObject.rank;
      this.phone = this.updateObject.phone;
      this.email = this.updateObject.email;
    }
  },
  methods:{
    uploadContent() {
      let items = data.CustomerList.sort((a,b) => {return b.number - a.number})
      const number = items[0].number + 1
      data.CustomerList.push({
        division: this.division,
        number: number,
        company: this.company,
        name: this.name,
        rank: this.rank,
        phone: this.phone,
        email: this.email,
        created_at: this.created_at,
      })
      this.$router.push({
        path: '/customerList'
      })
    },
    updateContent() {
      this.updateObject.division = this.division;
      this.updateObject.company = this.company;
      this.updateObject.name = this.name;
      this.updateObject.rank = this.rank;
      this.updateObject.phone = this.phone;
      this.updateObject.email = this.email;
      this.$router.push({
        path: '/customerList'
      })
    },
    cancle() {
      this.$router.push({
        path: '/customerList'
      })
    },
  }
}
</script>

<style scoped>

</style>