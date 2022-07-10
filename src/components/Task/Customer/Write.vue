<template>
  <div class="Customer_component">
    <el-row>
      <el-col :span="16">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>고객 등록</span>
          </div>
          <div class="grid_content_input">
            <el-form :model="Customer_form" m status-icon label-width="120px" class="demo-ruleForm" ref="Customer_form" :rules="rules">
              <el-form-item label="구분" prop="division">
                <el-select v-model="Customer_form.division" placeholder="선택">
                  <el-option label="Blue X-ray Enterprise" value="Blue X-ray Enterprise"></el-option>
                  <el-option label="Blue X-ray DLP" value="Blue X-ray DLP"></el-option>
                  <el-option label="전군DLP" value="전군DLP"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="업체명" prop="company">
                <el-input type="text" v-model="Customer_form.company" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="담당자" prop="name">
                <el-input type="text" v-model="Customer_form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="직급" prop="rank">
                <el-select v-model="Customer_form.rank" placeholder="선택">
                  <el-option label="사원" value="사원"></el-option>
                  <el-option label="대리" value="대리"></el-option>
                  <el-option label="부장" value="부장"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="연락처" prop="phone">
                <el-input type="text" v-model="Customer_form.phone" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="이메일" prop="email">
                <el-input type="text" v-model="Customer_form.email" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="success" @click="updateMode ? updateContent() : uploadContent('Customer_form')">등록하기</el-button>
                <el-button @click="resetForm('Customer_form')">초기화</el-button>
                <el-button type="danger" @click="cancle">취소하기</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Customer_form : {
        division: '',
        company : '',
        name : '',
        rank : '',
        phone : '',
        email : '',
        updated_at: null,
        updateObject: null,
        updateMode: this.$route.params.number > 0 ? true : false,
      },
      rules: {
        division : [
          { required: true, message: '구분을 선택하세요.', trigger: 'change' }
        ],
        company : [
          { required: true, message: '업체명을 입력하세요.', trigger: 'blur' }
        ],
        name : [
          { required: true, message: '담당자를 입력하세요.', trigger: 'blur' }
        ],
        rank : [
          { required: true, message: '직급을 입력하세요.', trigger: 'change' }
        ],
        phone : [
          { required: true, message: '연락처를 입력하세요.', trigger: 'blur' }
        ],
        email : [
          { required: true, message: '이메일을 입력하세요.', trigger: 'change' }
        ]
      }
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
    uploadContent(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('등록되었습니다.');
          const baseURI = 'http://localhost:8443';
          var data = {
            division: this.Customer_form.division,
            company: this.Customer_form.company,
            name: this.Customer_form.name,
            rank: this.Customer_form.rank,
            phone: this.Customer_form.phone,
            email: this.Customer_form.email
          }
          this.$axios.post(`${baseURI}/api/customer/post`, data)
          .then(result => {
            console.log(result)
            this.$router.push({
              path: '/customerList'
            })
          })
          .catch(error => {
            console.log(error)
          })
        } else {
            console.log('error submit!!');
            return false;
          }
        }
      );
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
.Customer_component {
  margin: 10px;
}

.line {
  text-align: center;
}

.box-card {
  margin: 10px 0px;
}
</style>