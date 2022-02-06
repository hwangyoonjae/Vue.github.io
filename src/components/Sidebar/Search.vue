<template>
  <div class="search-wrapper">
    <div class="input-holder">
        <el-input placeholder="Type to Search" v-model="input" clearable></el-input>
        <el-button type="primary" icon="el-icon-search">Search</el-button>
    </div>
    <span class="close" onclick="searchToggle(this, event);"></span>
  </div>
</template>

<script>
export default {
    data() {
        return {
            input: '',
        }
    },
    methods: {
        
    }
}
</script>

<style>
.search-wrapper {
    height: 100%;
}
</style>