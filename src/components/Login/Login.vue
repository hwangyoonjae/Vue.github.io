<template>
  <div class="Login_Component">
    <el-row>
      <el-col :span="4">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
            <el-form-item label="ID" prop="id">
              <el-input type="username" v-model="ruleForm.id" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">로그인 하기</el-button>
            </el-form-item>
            <el-form-item>
              <p>
                <span> 회원이 아니신가요?</span>
                <b-link to="/main/signup">지금 가입하세요</b-link>
              </p>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
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
            alert('Success sign up!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>

<style>
.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
}
</style>