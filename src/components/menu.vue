

<script lang="ts" setup>
import { ref } from 'vue'
// import {RouterLink, RouterView} from 'vue-router'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<template>
  <!-- <div class="navbar-start">
    <a href="#exp" class="navbar-item">Work Experience</a>
    <a href="#ed" class="navbar-item">Education</a>
    <a href="#sk" class="navbar-item">Skills</a>
  </div> -->

  <el-menu router
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
  <el-menu-item to="/" >About</el-menu-item>
  <el-menu-item to="/exp">Work Experience</el-menu-item>
  <el-menu-item to="/ed">Education</el-menu-item>
  <el-menu-item to="/sk">Skills</el-menu-item>    
  </el-menu>

<!-- <RouterView/> -->

</template>


<style>
.navbar-start{
  font-weight: 200;
}
</style>