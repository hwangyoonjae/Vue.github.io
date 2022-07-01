<template>
  <div>
    <el-row :gutter="12" style="margin : 0px">
      <el-col :span="8">
        <el-card shadow="never">
          <el-form label-width="120px">
            <el-form-item label="구분" prop="division">
              <el-select v-model="division" placeholder="선택">
                <el-option label="Blue X-ray Enterprise" value="Blue X-ray Enterprise"></el-option>
                <el-option label="Blue X-ray DLP" value="Blue X-ray DLP"></el-option>
                <el-option label="전군DLP" value="전군DLP"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="업체명">
              <el-input v-model="company"></el-input>
            </el-form-item>
            <el-form-item label="담당자">
              <el-input v-model="name"></el-input>
            </el-form-item>
            <el-form-item label="직급" prop="position">
              <el-select v-model="position" placeholder="선택">
                <el-option label="완료" value="완료"></el-option>
                <el-option label="진행" value="진행"></el-option>
                <el-option label="신규" value="신규"></el-option>
              </el-select>
              </el-form-item>
              <el-form-item label="연락처" prop="phone">
                <el-input v-model="phone"></el-input>
              </el-form-item>
              <el-form-item label="이메일" prop="mail">
                <el-input v-model="mail"></el-input>
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
    const number = Number(this.$route.params.id);
    //const contentData = item.filter(item => item.number === number)[0];
    return {
      division: item.division,
      id: number,
      company: item.company,
      name: item.name,
      position: item.position,
      phone: item.phone,
      mail: item.mail,
    }
  },
  methods: {
    updateData() {
      this.$router.push({
        path: `/customerList/write/${this.number}`
      })
    },
    deleteData() {
      const content_index = data.CustomerList.findIndex(item => item.number === this.number);
      data.CustomerList.splice(content_index, 1)
      this.$router.push({
        path: '/customerList'
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

