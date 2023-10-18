<template>
  <div class="Attendance_component">
    <el-row :gutter="12" style="margin : 0px">
      <el-col :span="8">
        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span>근태 작성</span>
          </div>
          <el-form label-width="120px">
            <el-form-item label="이름">
              <el-input v-model="title" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="부서">
              <el-input v-model="component" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="직책">
              <el-input v-model="name" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="구분" prop="check">
                <el-select v-model="check" placeholder="선택">
                  <el-option label="출근" value="출근"></el-option>
                  <el-option label="퇴근" value="퇴근"></el-option>
                </el-select>
              </el-form-item>
          </el-form>
          <el-button type="primary" icon="el-icon-edit" @click="updateData">수정하기</el-button>
          <el-button type="danger" icon="el-icon-document-delete" @click="deleteData">삭제하기</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import data from "@/data";

export default {
  name: "ContentDetail",
  data() {
    const number = Number(this.$route.params.number);
    const contentData = data.NoticeContent.filter(item => item.number === number)[0];
    return {
      number: number,
      title: contentData.title,
      component: contentData.component,
      name: contentData.name,
      check: contentData.check
    }
  },
  methods: {
    updateData() {
      this.$router.push({
        path: `/checkattendance/write/${this.number}`
      })
    },
    deleteData() {
      const content_index = data.NoticeContent.findIndex(item => item.number === this.number);
      data.NoticeContent.splice(content_index, 1)
      this.$router.push({
        path: '/checkattendance'
      })
    },
  }
};
</script>

<style scoped>
.text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 60%;
  }
</style>

