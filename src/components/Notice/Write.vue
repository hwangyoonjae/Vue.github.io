<template>
  <div class="Noticewrite_component">
    <div class="input-group" style="margin-bottom:10px;">
      <el-input placeholder="제목을 입력하세요" v-model="title"></el-input>
      <el-input placeholder="내용을 입력하세요" v-model="component"></el-input>
    </div>
    <div class="button-group">
      <el-button type="success">등록하기</el-button>
      <el-button type="danger">취소하기</el-button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: '',
      component: '',
    }
  }
}
</script>

