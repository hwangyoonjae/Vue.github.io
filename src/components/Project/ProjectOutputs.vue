<template>
  <div class="ProjectOutputs_Component">
    <div class="row">
      <div class="col-lg-12 mb-8">
        <div class="card shadow mb-4">
          <div class="card-body">
            <div class="Project-area">
              <div class="project_title">
                <p>Blue X-ray Enterprise</p>
              </div>
              <BlueEnter />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 mb-8">
        <div class="card shadow mb-4">
          <div class="card-body">
            <div class="Project-area">
              <div class="project_title">
                <p>Blue X-ray DLP</p>
              </div>
              <BlueDLP />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 mb-8">
        <div class="card shadow mb-4">
          <div class="card-body">
            <div class="Project-area">
              <div class="project_title">
                <p>전군PC보안체계</p>
              </div>
              <div style="text-align:right; margin-top:10px">
                <el-link href="/project" :underline="false">더보기</el-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlueEnter from './ProjectOutputsinfo/BlueEnter.vue'
import BlueDLP from './ProjectOutputsinfo/BlueDLP.vue'

export default {
  components: {
    BlueEnter,
    BlueDLP
  }
}
</script>

<style scoped>
.ProjectOutputs_Component {
  width: 100%;
  height: 100%;
  padding: 32px;
  background-color: #f0f2f5;
  position: relative;
}
</style>