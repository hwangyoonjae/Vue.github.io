<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="never">
          <el-form label-width="120px">
            <el-form-item label="제목">
              <el-input v-model="title"></el-input>
            </el-form-item>
            <el-form-item label="내용">
              <el-input v-model="component"></el-input>
            </el-form-item>
            <el-form-item label="담당자">
              <el-input v-model="writer"></el-input>
            </el-form-item>
            <el-form-item label="상태" prop="state">
              <el-select v-model="state" placeholder="선택">
                <el-option label="완료" value="완료"></el-option>
                <el-option label="진행" value="진행"></el-option>
                <el-option label="신규" value="신규"></el-option>
              </el-select>
              </el-form-item>
              <el-form-item label="우선순위" prop="level">
                <el-select v-model="level" placeholder="선택">
                  <el-option label="높은" value="높은"></el-option>
                  <el-option label="보통" value="보통"></el-option>
                  <el-option label="낮음" value="낮음"></el-option>
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
    const contentData = data.IssueContent.filter(item => item.number === number)[0];
    return {
      number: number,
      title: contentData.title,
      component: contentData.component,
      writer: contentData.name,
      state: contentData.state,
      level: contentData.level
    }
  },
  methods: {
    updateData() {
      this.$router.push({
        path: `/issueList/write/${this.number}`
      })
    },
    deleteData() {
      const content_index = data.IssueContent.findIndex(item => item.number === this.number);
      data.IssueContent.splice(content_index, 1)
      this.$router.push({
        path: '/issueList'
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

