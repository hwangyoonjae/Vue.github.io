<template>
  <div class="Projectwrite_component">
    <el-row>
      <el-col :span="16">
        <el-card>
          <div slot="header" class="clearfix">
            <span>출/퇴근하기</span>
          </div>
          <div class="grid_content_input">
            <el-form :model="Comuute_form" ref="Comuute_form" label-position="top" label-width="120px" rules="rules">
              <el-form-item label="부서" prop="checkDepart">
                <el-input v-model="Comuute_form.depart"></el-input>
              </el-form-item>
              <el-form-item label="이름" prop="checkName">
                <el-input v-model="Comuute_form.name"></el-input>
              </el-form-item>
              <el-form-item label="직책" prop="checkPosition">
                <el-input v-model="Comuute_form.position"></el-input>
              </el-form-item>
              <el-form-item label="상태구분" prop="checkState">
                <el-select v-model="Comuute_form.state" placeholder="구분">
                  <el-option label="출근" value="출근"></el-option>
                  <el-option label="퇴근" value="퇴근"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="success" @click="uploadContent('Comuute_form')">등록하기</el-button>
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
import data from '@/data'

export default {
  name: 'Commute',
  data() {
    var checkname = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('이름을 입력하세요.'));
      }
    };
    var checkdepart = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('부서를 입력하세요.'));
      }
    };
    var checkdeposition = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('직책을 입력하세요.'));
      }
    };
    var checkstate = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('직책을 입력하세요.'));
      }
    };
    return {
      Comuute_form : {
        depart : '',
        name : '',
        state : '',
        position: '',
      },
      rules: {
        checkName: [
          { required: true, validator: checkname, trigger: 'blur' }
        ],
        checkDepart: [
          { required: true, validator: checkdepart, trigger: 'blur' }
        ],
        checkPosition: [
          { required: true, validator: checkdeposition, trigger: 'blur' }
        ],
        checkState: [
          { required: true, validator: checkstate, trigger: 'blur' }
        ],
      }
    }
  },
  created() {
    if (this.$route.params.number > 0) {
      const number = Number(this.$route.params.number)
      this.updateObject = data.ProjectContent.filter(item => item.number === number)[0]
      this.depart = this.updateObject.depart;
      this.name = this.updateObject.name;
      this.position = this.updateObject.position;
      this.state = this.updateObject.state;
    }
  },
  methods:{
    uploadContent(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const baseURI = 'http://localhost:8443';
          var data = {
            depart : this.Comuute_form.depart,
            name : this.Comuute_form.name,
            position : this.Comuute_form.position,
            state : this.Comuute_form.state
          }
          this.$axios.post(`${baseURI}/api/attendancepost`, data)
          .then(result => {
            alert('등록되었습니다.');
            console.log(result)
            this.$router.push({
              path: '/checkattendance'
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
    cancle() {
      this.$router.push({
        path: '/commute'
      })
    },
  }
}
</script>

<style scoped>
.Projectwrite_component {
  margin: 10px;
}

.clearfix {
  color: #595959;
  font-weight: 700;
}

.line {
  text-align: center;
}

.box-card {
  margin: 10px 0px;
}
</style>