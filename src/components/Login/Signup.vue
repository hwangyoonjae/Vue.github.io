<template>
  <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item label="아이디" prop="id">
        <el-input type="username" v-model="ruleForm.id" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="비밀번호" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" show-password></el-input>
      </el-form-item>
      <el-form-item label="비밀번호 확인" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" show-password></el-input>
      </el-form-item>
      <el-form-item label="이름" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="이메일" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="계정권한" prop="division">
        <el-select v-model="ruleForm.division" placeholder="계정권한">
          <el-option label="관리자" value="admin"></el-option>
          <el-option label="사용자" value="user"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updateMode ? updateContent() : uploadContent()">회원가입</el-button>
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
    var validateId = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the ID'));
      } else {
        if (this.ruleForm.checkId !== '') {
          this.$refs.ruleForm.validateField('checkId');
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('Two inputs don\'t match!'));
      } else {
        callback();
      }
    };
    var checkname = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Please input the name'));
      }
    };
    return {
      ruleForm: {
        id: '',
        pass: '',
        checkPass: '',
        name: '',
        email: '',
        division: '',
      },
      rules: {
        id: [
          { validator: validateId, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        name: [
          { validator: checkname, trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Please input email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
        ],
        division: [
          { required: true, message: 'Please select Activity zone', trigger: 'change' },
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          document.querySelector('.demo-ruleForm').classList.add('success');
          alert('회원가입 되었습니다.');
        } else {
          document.querySelector('.demo-ruleForm').classList.remove('success');
          this.$message.error('입력값을 확인하세요.');
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    uploadContent() {
      let adminitems = data.Admin.sort((a,b) => {return b.admin_id - a.admin_id})
      let useritems = data.User.sort((a,b) => {return b.user_id - a.user_id})

      const admin = adminitems[0].admin_id + 1
      const user = useritems[0].user_id + 1
      
      if (this.ruleForm.division == 'admin') {
        data.Admin.push({
          admin_id: admin,
          id: this.ruleForm.id,
          name: this.ruleForm.name,
          email: this.ruleForm.email,
          created_at: '2018-09-11 11:42:11',
          updated_at: '2022-01-26 11:42:11'
        })
        this.$router.push({
          path: '/adminlist'
        })
      } else if (this.ruleForm.division == 'user') {
        data.User.push({
          user_id: user,
          id: this.ruleForm.id,
          name: this.ruleForm.name,
          email: this.ruleForm.email,
          created_at: '2018-09-11 11:42:11'
        })
        this.$router.push({
          path: '/userlist'
        })
      } else {
        console.log("signup error!!");
      }
    },
    updateContent() {
      this.updateObject.id = this.id;
      this.updateObject.name = this.name;
      this.updateObject.email = this.email;
      this.$router.push({
        path: '/userlist'
      })
    },
    cancle() {
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style scoped>

</style>