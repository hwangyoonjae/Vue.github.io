<template>
  <div class="Issue_component">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item label="제목" prop="title">
        <el-input type="text" v-model="ruleForm.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="내용" prop="component">
        <el-input type="text" v-model="ruleForm.component" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="담당자" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="상태" prop="state">
        <el-select v-model="ruleForm.state" placeholder="상태">
          <el-option label="완료" value="success"></el-option>
          <el-option label="진행" value="ing"></el-option>
          <el-option label="신규" value="new"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="우선순위" prop="level">
        <el-select v-model="ruleForm.level" placeholder="상태">
          <el-option label="높은" value="high"></el-option>
          <el-option label="보통" value="middle"></el-option>
          <el-option label="낮음" value="low"></el-option>
        </el-select>
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
        title : '',
        component : '',
        name : '',
        state : '',
        level : '',
        created_at: '2019-03-29 14:11:11',
        updated_at: null
      },
      rules: {
        title: [
          { validator: validateId, trigger: 'blur' }
        ],
        component: [
          { validator: checkname, trigger: 'blur' }
        ],
        name: [
          { required: true, message: 'Please input email address', trigger: 'blur' },
        ],
        state: [
          { required: true, message: 'Please select Activity zone', trigger: 'change' },
        ],
        level: [
          { required: true, message: 'Please select Activity zone', trigger: 'change' },
        ],
      }
    };
  },
  methods:{
    uploadContent() {
      let items = data.IssueContent.sort((a,b) => {return b.number - a.number})
      const number = items[0].number + 1
      data.IssueContent.push({
        number: number,
        title: this.title,
        component: this.component,
        name: this.name,
        date: this.date,
        updated_at: null
      })
      this.$router.push({
        path: '/notice'
      })
    },
    updateContent() {
      this.updateObject.title = this.title;
      this.updateObject.component = this.component;
      this.$router.push({
        path: '/notice'
      })
    },
    cancle() {
      this.$router.push({
        path: '/notice'
      })
    },
  }
}
</script>

<style scoped>

</style>