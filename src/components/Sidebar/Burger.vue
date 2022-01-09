<template>
  <div id="burger" :class="{ 'active' : isBurgerActive }" @click.prevent="toggle">
        <i class="el-icon-s-unfold"></i>
  </div>
</template>

<script>
import { store, mutations } from "../store/store";

export default {
  computed: {
    // 버튼 클릭 후 X 아이콘으로 변경
    isBurgerActive() {
      return store.isNavOpen;
    }
  },
  methods: {
    toggle() {
      mutations.toggleNav();
    }
  }
};
</script>