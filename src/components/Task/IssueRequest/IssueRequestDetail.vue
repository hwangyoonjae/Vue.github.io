<template>
  <div class="IssueRequestDetail_component">
    <el-row :gutter="12" style="margin : 0px">
      <el-col :span="8">
        <el-card shadow="never">
          <el-form label-width="120px">
            <el-form-item label="구분" prop="division">
              <el-select v-model="division" placeholder="선택" :disabled="true">
                <el-option label="Blue X-ray Enterprise" value="Blue X-ray Enterprise"></el-option>
                <el-option label="Blue X-ray DLP" value="Blue X-ray DLP"></el-option>
                <el-option label="전군DLP" value="전군DLP"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="제목">
              <el-input v-model="title" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="내용">
              <el-input v-model="component" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="담당자">
              <el-input v-model="name" :disabled="true"></el-input>
            </el-form-item>
            </el-form>
          <el-button type="primary" icon="el-icon-edit" @click="updateData">수정하기</el-button>
          <el-button type="danger" icon="el-icon-document-delete" @click="deleteData">삭제하기</el-button>
          <el-button type="info" icon="el-icon-edit-outline" @click="commentData">댓글달기</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import data from "@/data";

export default {
  name: "IssueRequestDetail",
  data() {
    const contentData = this.$route.query.item;
    return {
      division: contentData.division,
      title: contentData.title,
      component: contentData.component,
      name: contentData.name
    }
  },
  methods: {
    updateData() {
      this.$router.push({
        path: `/issuerequest/list/write/${this.$route.query.item.id}`
      })
    },
    deleteData() {
      const content_index = data.IssueRequestContent.findIndex(item => item.number === this.number);
      data.IssueRequestContent.splice(content_index, 1)
      this.$router.push({
        path: '/issuerequest/list'
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

