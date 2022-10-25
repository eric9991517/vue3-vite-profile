<script setup>
import info from './components/info.vue'
import skill from './components/skills.vue'
import work from './components/work.vue'
import ed from './components/school.vue'
import bar from './components/menu.vue'
// import {RouterLink, RouterView} from 'vue-router'

 

</script>
<template>
  
  <!-- 回到頂部功能 Back Top-->
   <el-backtop :right="100" :bottom="100" />
    <div class="common-layout">
    <el-container>
      <el-header>
        <!-- <router-link to="/">Go to Home</router-link>
        <router-link to="/ed">Go to About</router-link> -->
        <bar/>
        <RouterView></RouterView>

      </el-header>
      <el-main>
        <el-row justify="center">
          <el-col :lg="24">
            <info/>
          </el-col>
        </el-row>
        <!-- 工作經歷 -->
        <el-divider id="exp" content-position="left"><h2><i class="fa-solid fa-briefcase fa-md"></i> Work Experience</h2></el-divider>
        <el-row >
          <el-col :lg="24" >
            <work/>
          </el-col>
        </el-row>
        <el-divider id="ed" content-position="left"><h2><i class="fa-solid fa-user-graduate fa-md"></i> Education</h2></el-divider>
        <el-row>
          <el-col :lg="24" >
            <!-- <skill/> -->
            <ed/>
          </el-col>
        </el-row>
         <!-- 技能技術 -->
         <el-divider id="sk" content-position="left"><h2><i class="fa-solid fa-screwdriver-wrench fa-md"></i> Skills</h2></el-divider>
        <el-row>
          <el-col :lg="24" >
            <!-- <ed/> -->
            <skill/>
          </el-col>
          <!-- <el-col :lg="24" >
            <work/>
          </el-col> -->
        </el-row>
      </el-main>
      <el-footer>
        <div class="content has-text-centered">
          <p>Code Could be Found <a href="https://github.com/eric9991517/yiyi-chen.github.io">here</a></p>
          <p>Last Updated: 2022/08/30</p>
      </div>   
      </el-footer>
    </el-container>
  </div>
</template>

<style >
.box-card {
  /* width: 1024px; */
  border-radius: 20px;
}
.content{
  text-align: center;
  margin-top: 80px;
}
</style>
