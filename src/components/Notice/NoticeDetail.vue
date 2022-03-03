<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="never">
          <el-form label-width="120px">
            <el-form-item label="작성자">
              <el-input v-model="writer" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="제목">
              <el-input v-model="title" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="내용">
              <el-input v-model="component" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="작성일">
              <el-input v-model="created" :disabled="true"></el-input>
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
      writer: contentData.name,
      created: contentData.date
    }
  },
  methods: {
    updateData() {
      this.$router.push({
        path: `/notice/write/${this.number}`
      })
    },
    deleteData() {
      const content_index = data.NoticeContent.findIndex(item => item.number === this.number);
      data.NoticeContent.splice(content_index, 1)
      this.$router.push({
        path: '/notice'
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

