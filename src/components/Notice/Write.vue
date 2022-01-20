<template>
  <div class="Noticewrite_component">
    <div class="input-group" style="margin-bottom:10px;">
      <el-input placeholder="제목을 입력하세요" v-model="title" @keyup.enter ="createNotice(title)"></el-input>
      <el-input placeholder="내용을 입력하세요" v-model="component" @keyup.enter ="createNotice(component)"></el-input>
    </div>
    <div class="button-group">
      <el-button type="success" @click="createNotice(str)">등록하기</el-button>
      <el-button type="danger" @click="cancle">취소하기</el-button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      str: {
        title: null,
        component: null,
      },
      title: null,
      component: null,
    }
  },
  methods:{
    createNotice:function(val){
      this.users.push({ title: val.title, component: val.component});
      this.usersNumber++;
 
      this.pageUsers = [[]];
      this.maxpageNumber = this.usersNumber / 10 + 1;
      for(var i = 0; i < this.maxpageNumber; i++)
        this.pageUsers.push([]);
 
        var page = 1;
        var num = 0;
        for(var i = 0; i < this.usersNumber; i++){
          this.pageUsers[page].push(this.users[i]);
          num++;
          if(num == 10){
            num = 0;
            page++;
          }
        }
    },
    cancle() {
      this.$router.push({
        path: '/notice'
      })
    },
  }
}
</script>

