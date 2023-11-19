<template>
  <div class="Projectwrite_component">
    <el-row>
      <el-col :span="16">
        <el-card>
          <div slot="header" class="clearfix">
            <span>출/퇴근하기</span>
          </div>
          <div class="grid_content_input">
            <el-form :model="Comuute_form" ref="Comuute_form" label-width="120px">
              <el-form-item label="부서" prop="depart">
                <el-input v-model="Comuute_form.depart"></el-input>
              </el-form-item>
              <el-form-item label="이름" prop="name">
                <el-input v-model="Comuute_form.name"></el-input>
              </el-form-item>
              <el-form-item label="상태구분" prop="state">
                <el-select v-model="Comuute_form.state" placeholder="구분">
                  <el-option label="출근" value="출근"></el-option>
                  <el-option label="퇴근" value="퇴근"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="success" @click="updateMode ? updateContent() : uploadContent('Comuute_form')">등록하기</el-button>
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
  name: 'Write',
  data() {
    return {
      Comuute_form : {
        depart : '',
        name : '',
        state : '',
        updatedAt: null,
        updateObject: null,
        updateMode: this.$route.params.number > 0 ? true : false,
      },
    }
  },
  created() {
    if (this.$route.params.number > 0) {
      const number = Number(this.$route.params.number)
      this.updateObject = data.ProjectContent.filter(item => item.number === number)[0]
      this.title = this.updateObject.title;
      this.state = this.updateObject.state;
      this.license = this.updateObject.license;
    }
  },
  methods:{
    uploadContent(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('등록되었습니다.');
          const baseURI = 'http://localhost:8443';
          var data = {
            depart : this.Comuute_form.depart,
            name : this.Comuute_form.name,
            state : this.Comuute_form.state
          }
          this.$axios.post(`${baseURI}/comuute`, data)
          .then(result => {
            console.log(result)
            this.$router.push({
              path: '/comuute'
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
        path: '/comuute'
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