<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="never">
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="작성자">
              <el-input v-model="writer"></el-input>
            </el-form-item>
            <el-form-item label="제목">
              <el-input v-model="title"></el-input>
            </el-form-item>
            <el-form-item label="내용">
              <el-input v-model="content"></el-input>
            </el-form-item>
            <el-form-item label="작성일">
              <el-input v-model="created"></el-input>
            </el-form-item>
          </el-form>
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
      contentId: number,
      title: contentData.title,
      content: contentData.component,
      writer: contentData.name,
      created: contentData.date
    }
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

