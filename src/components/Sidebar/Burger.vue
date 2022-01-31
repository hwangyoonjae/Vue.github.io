<template>
  <div id="burger" :class="{ 'active' : isBurgerActive }" @click.prevent="toggle">
    <div v-if="isNavOpen">
      <el-radio-button>
        <i class="el-icon-s-fold"></i>
      </el-radio-button>
    </div>
    <div v-else>
      <el-radio-button>
        <i class="el-icon-s-unfold"></i>
      </el-radio-button>
    </div>
  </div>
</template>

<script>
import { store, mutations } from "@/store.js";

export default {
  computed: {
    isNavOpen() {
      console.log(store.isNavOpen);
      return store.isNavOpen
    }
  },
  methods: {
    toggle() {
      console.log(store.isNavOpen);
      mutations.toggleNav();
      console.log(store.isNavOpen);
    }
  }
}
</script>

<style>
.Sidebar_Component {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>