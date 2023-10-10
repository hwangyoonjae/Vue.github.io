<template>
  <div class="Signup_Component">
    <div class="Signup_Component_part">
      <el-row type="flex" justify="center" align="middle" style="height: 100vh;">
        <el-col :span="20">
          <div class="Signup_Component_header">
            <h1>회원가입</h1>
          </div>
          <div class="grid-content">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
              <el-form-item label="아이디" prop="id">
                <el-input type="username" v-model="ruleForm.id" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="비밀번호" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="비밀번호 확인" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="이름" prop="name">
                <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="이메일" prop="email">
                <el-input v-model="ruleForm.email" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <!--<el-button type="primary" @click="updateMode ? updateContent() : uploadContent()">회원가입</el-button>-->
                <el-button type="primary" @click="submitForm('ruleForm')">회원가입</el-button>
                <el-button @click="resetForm('ruleForm')">초기화</el-button>
                <el-button type="danger" @click="cancle">취소하기</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import data from '@/data'

export default {
  data() {
    var validateId = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('아이디를 입력하세요.'));
      } else {
        if (this.ruleForm.checkId !== '') {
          this.$refs.ruleForm.validateField('checkId');
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('비밀번호를 입력하세요.'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('비밀번호를 입력하세요.'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('입력한 비밀번호가 일치하지 않습니다.'));
      } else {
        callback();
      }
    };
    var checkname = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('이름을 입력하세요.'));
      }
    };
    return {
      ruleForm: {
        id: '',
        pass: '',
        checkPass: '',
        name: '',
        email: '',
      },
      rules: {
        id: [
          { required: true, validator: validateId, trigger: 'blur' }
        ],
        pass: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ],
        name: [
          { required: true, validator: checkname, trigger: 'blur' }
        ],
        email: [
          { required: true, message: '이메일을 입력하세요.', trigger: 'blur' },
          { type: 'email', message: '이메일 형식이 올바르지 않습니다.', trigger: ['blur', 'change'] }
        ]
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
.el-col {
  border-radius: 4px;
}

.grid-content {
  width: 100%;
  border-radius: 4px;
  min-height: 36px;
  padding: 30px;
}

.Signup_Component_part {
  background-color: #F2F2F2;
  width: 100%;
}

.Signup_Component_header {
  text-align: center;
}

.Signup_Component_Button {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
}
</style>