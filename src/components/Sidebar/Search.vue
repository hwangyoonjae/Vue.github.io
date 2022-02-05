<template>
  <div class="search-wrapper">
    <div class="input-holder">
        <el-input placeholder="Type to Search" v-model="input" clearable></el-input>
        <el-row class="search-icon" onclick="searchToggle(this, event);">
            <el-button icon="el-icon-search" circle></el-button>
        </el-row>
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

</style>