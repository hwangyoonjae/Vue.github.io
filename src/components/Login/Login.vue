<template>
  <div class="Login_Component">
    <div class="Login_Component_part">
      <el-row type="flex" justify="center" align="middle" style="height: 100vh;">
        <el-col :span="20">
          <div class="Login_Component_header">
            <h1>로그인</h1>
          </div>
          <div class="grid-content">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
              <el-form-item label="ID" prop="id">
                <el-input type="username" v-model="ruleForm.id" autocomplete="off" placeholder="Enter Username..."></el-input>
              </el-form-item>
              <el-form-item label="PW" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="Enter Password..."></el-input>
              </el-form-item>
              <el-form-item>
                <el-button class="Login_Component_Button" type="primary" @click="submitForm('ruleForm')">Login</el-button>
              </el-form-item>
              <el-form-item>
                <p>
                  <span> 회원이 아니신가요?</span>
                  <b-link to="/signup">가입하기</b-link>
                </p>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
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
      return {
        ruleForm: {
          id: '',
          pass: '',
        },
        rules: {
          id: [
            { validator: validateId, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 하드코딩된 아이디와 비밀번호
          const hardcodedUsername = 'admin';
          const hardcodedPassword = 'admin';

          if (this.ruleForm.id === hardcodedUsername && this.ruleForm.pass === hardcodedPassword) {
            // 로그인 성공 시 사용자 님 환영합니다 알림 표시
            this.$alert('사용자님 환영합니다', '알림', {
              confirmButtonText: '확인',
              callback: action => {
                if (action === 'confirm') {
                  // 확인 버튼을 누르면 메인 페이지로 이동
                  this.$router.push('/main');
                }
              }
            });
          } else {
            // 아이디와 비밀번호가 일치하지 않는 경우 에러 메시지 표시
            this.$message.error('아이디 또는 비밀번호가 올바르지 않습니다.');
          }
        } else {
          // 폼 유효성 검사 실패 시 에러 메시지 표시
          this.$message.error('입력값을 확인하세요.');
        }
      });
    },
  }
}
</script>

<style>
.el-col {
  border-radius: 4px;
}

.grid-content {
  width: 100%;
  border-radius: 4px;
  min-height: 36px;
  padding: 30px;
}

.Login_Component_part {
  background-color: #F2F2F2;
  width: 100%;
}

.Login_Component_header {
  text-align: center;
}

.Login_Component_Button {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
}
</style>