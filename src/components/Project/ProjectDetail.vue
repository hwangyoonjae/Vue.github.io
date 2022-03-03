<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="never">
          <el-form label-width="120px">
            <el-form-item label="프로젝트명">
              <el-input v-model="title" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="시작일">
              <el-date-picker type="date" placeholder="시작일" v-model="start" format="yyyy/MM/dd" value-format="yyyy-MM-dd" style="width: 100%;" :disabled="true"></el-date-picker>
            </el-form-item>
            <el-form-item label="완료일">
              <el-date-picker type="date" placeholder="종료일" v-model="finish" format="yyyy/MM/dd" value-format="yyyy-MM-dd" style="width: 100%;" :disabled="true"></el-date-picker>
            </el-form-item>
            <el-form-item label="상태구분" prop="state">
              <el-select v-model="state" placeholder="구분" :disabled="true">
                <el-option label="프리세일즈" value="프리세일즈"></el-option>
                <el-option label="사업진행" value="사업진행"></el-option>
                <el-option label="사업종료" value="사업종료"></el-option>
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
  name: "projectDetail",
  data() {
    const number = Number(this.$route.params.number);
    const contentData = data.ProjectContent.filter(item => item.number === number)[0];
    return {
      number: number,
      title: contentData.title,
      start: contentData.start,
      finish: contentData.finish,
      problem : contentData.problem,
      state: contentData.state,
      success: contentData.success
    }
  },
  methods: {
    updateData() {
      this.$router.push({
        path: `/project/write/${this.number}`
      })
    },
    deleteData() {
      const content_index = data.ProjectContent.findIndex(item => item.number === this.number);
      data.ProjectContent.splice(content_index, 1)
      this.$router.push({
        path: '/project'
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

