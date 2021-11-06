<template>
  <div class="Card_component">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div class="Card_people_component">
            <span class="Card_people_icon">
              <svg-icon icon-class="peoples" class-name="card-panel-icon" />
            </span>
          </div>
          <div class="Card_people_count">
            <div> New Visits </div>
            <span> 102,400 </span>
          </div>
        </div>
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
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