<template>
  <div class="Card_component">
    <div class="Card_people_component">
      <span class="Card_people_icon">
        <i class="fas fa-user-friends" aria-hidden="true"></i>
      </span>
      <div class="Card_people_count">
          <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {};
  }
};
</script>

<style scoped>
.Card_people_icon {
  background: linear-gradient(to right, #6478FB, #8763FB);
  width: 3rem;
}
.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>