<template>
  <div class="Burger_Component" @click.prevent="toggle">
    <div v-if="isNavOpen">
        <i class="el-icon-s-unfold"></i>
    </div>
    <div v-else>
        <i class="el-icon-s-fold"></i>
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
  },
}
</script>

<style>
.Burger_Component {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.el-icon-s-unfold, .el-icon-s-fold {
  margin: 10px;
  font-size: 20px;
}
</style>