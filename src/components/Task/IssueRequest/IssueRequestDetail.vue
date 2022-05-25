<template>
  <div class="IssueRequestDetail_component">
    <el-row :gutter="12" style="margin : 0px">
      <el-col :span="8">
        <el-card shadow="never">
          <el-form label-width="120px">
            <el-form-item label="구분" prop="division">
              <el-select v-model="Request_DetailData.division" placeholder="선택">
                <el-option label="Blue X-ray Enterprise" value="Blue X-ray Enterprise"></el-option>
                <el-option label="Blue X-ray DLP" value="Blue X-ray DLP"></el-option>
                <el-option label="전군DLP" value="전군DLP"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="제목">
              <el-input v-model="Request_DetailData.title"></el-input>
            </el-form-item>
            <el-form-item label="내용">
              <el-input v-model="Request_DetailData.component"></el-input>
            </el-form-item>
            <el-form-item label="담당자">
              <el-input v-model="Request_DetailData.name"></el-input>
            </el-form-item>
            </el-form>
          <el-button type="primary" icon="el-icon-edit" @click="updateData">수정하기</el-button>
          <el-button type="danger" icon="el-icon-document-delete" @click="deleteData">삭제하기</el-button>
        </el-card>
      </el-col>
    </el-row>
    <span>{{item}}</span>
    <h1>{{id}}</h1>
  </div>
</template>

<script>
export default {
  name: "IssueRequestDetail",
  data() {
    return {
      item : this.$route.query,
      id : this.$route.query.id,
      Request_DetailData : {
        division: '',
        title: '',
        component: '',
        name: ''
      }
    }
  },
  mounted() {
    this.getContentData();
  },
  methods: {
    getContentData() {
      const baseURI = 'http://localhost:8443';
      this.$axios.get(`${baseURI}/api/request/` + this.item.id, {
        params: this.item
      }).then(res => {
        console.log(res.data)
        this.Request_DetailData.division = res.data.Request_DetailData.division
        this.Request_DetailData.title = res.data.Request_DetailData.title
        this.Request_DetailData.component = res.data.Request_DetailData.component
        this.Request_DetailData.name = res.data.Request_DetailData.name
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    updateData() {
      /*this.$router.push({
        path: `/issuerequest/list/write/${this.$route.query.item.id}`
      })*/
      const baseURI = 'http://localhost:8443';
      var data = {
        division : this.Request_DetailData.division,
        title : this.Request_DetailData.title,
        component : this.Request_DetailData.component,
        name : this.Request_DetailData.name
      }
      this.$axios.post(`${baseURI}/api/request/post_update`, data)
        .then(result => {
          console.log(result)
          alert('수정되었습니다.');
          this.$router.push({
            path: '/issuerequest/list'
          })
        })
        .catch(error => {
          console.log(error)
        }
      )
    },
    deleteData() {
      const content_index = data.IssueRequestContent.findIndex(item => item.number === this.number);
      data.IssueRequestContent.splice(content_index, 1)
      this.$router.push({
        path: '/issuerequest/list'
      })
    }
  },
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

