<template>
  <div class="IssueRequestDetail_component">
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
            <el-form-item label="제목">
              <el-input v-model="title"></el-input>
            </el-form-item>
            <el-form-item label="내용">
              <el-input v-model="component"></el-input>
            </el-form-item>
            <el-form-item label="담당자">
              <el-input v-model="name"></el-input>
            </el-form-item>
            </el-form>
          <el-button type="primary" icon="el-icon-edit" @click="updateData">수정하기</el-button>
          <el-button type="danger" icon="el-icon-document-delete" @click="deleteData">삭제하기</el-button>
          <el-button type="info" icon="el-icon-edit-outline" @click="commentData">댓글달기</el-button>
        </el-card>
      </el-col>
    </el-row>
    <span>{{item}}</span>
  </div>
</template>

<script>
import data from "@/data";

export default {
  name: "IssueRequestDetail",
  data() {
    //const contentData = this.$route.query.item;
    return {
      /*Request_DetailData : {
        division: contentData.division,
        title: contentData.title,
        component: contentData.component,
        name: contentData.name
      },*/
      item: this.$route.query,
      idx: this.$route.query.id,
      division : '',
      title : '',
      component : '',
      name : ''
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$axios.get(this.$serverUrl + '/issuerequest/list/detail/' + this.idx, {
        
      }).then((res) => {
        this.division = res.data.division
        this.title = res.data.title
        this.component = res.data.component
        this.name = res.data.name
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

