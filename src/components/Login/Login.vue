<template>
  <div class="container" id="container">
	  <div class="form-container sign-up-container">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
	      <h1>회원가입</h1>
        <el-form-item prop="id">
          <el-input v-model="ruleForm.id"></el-input>
        </el-form-item>
			  <el-form-item prop="id">
          <el-input v-model="ruleForm.id"></el-input>
        </el-form-item>
			  <el-button type="primary">회원가입</el-button>
      </el-form>
		</div>
	  <div class="form-container sign-in-container">
		  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
			  <h1>로그인</h1>
        <el-form-item prop="id">
          <el-input v-model="ruleForm.id"></el-input>
        </el-form-item>
	  		<el-form-item prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
			  <a href="#">비밀번호를 잊으셨나요?</a>
        <el-button type="primary" @click="submitForm('ruleForm')">로그인</el-button>
		  </el-form>
	  </div>
	  <div class="overlay-container">
		  <div class="overlay">
			  <div class="overlay-panel overlay-left">
				  <h1>어서와요!</h1>
				  <p>계정이 존재하면 지금 바로 로그인 하세요.</p>
				  <button class="ghost" id="signIn">로그인</button>
			  </div>
			  <div class="overlay-panel overlay-right">
				  <h1>환영합니다!</h1>
				  <p>계정을 만들고 우리 서비스의 일부가 되세요.</p>
				  <button class="ghost" id="signUp">회원가입</button>
			  </div>
		  </div>
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
  },
  mounted() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }
}
</script>

<style scoped>
body {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
  margin: -20px 0 50px;
}

h1 {
  font-weight: bold;
  margin: 0;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 20px;
  border: 1px solid #5882FA;
  background-color: #5882FA;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #FFFFFF;
}

form {
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

.container {
  background-color: #fff;
  border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
      0 10px 10px rgba(0,0,0,0.22);
  overflow: hidden;
  height: 100vh;
}

.form-container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }
  
  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container{
  transform: translateX(-100%);
}

.overlay {
  background: #5882FA;
  background: -webkit-linear-gradient(to right, #81BEF7, #5882FA);
  background: linear-gradient(to right, #81BEF7, #5882FA);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #FFFFFF;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
    transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #DDDDDD;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

footer {
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
}

footer p {
    margin: 10px 0;
}

footer i {
    color: red;
}

footer a {
    color: #3c97bf;
    text-decoration: none;
}
</style>