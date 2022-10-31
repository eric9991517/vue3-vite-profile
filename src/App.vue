<script setup>
import info from "./components/info.vue";
import skill from "./components/skills.vue";
import work from "./components/work.vue";
import ed from "./components/school.vue";
// import bar from "./components/menu.vue";

</script>

<template>
  <!-- 回到頂部功能 Back Top-->
  <el-backtop :right="50" :bottom="50" />
  <div class="common-layout">
    <el-container>
      <el-header>
        <!-- <bar /> -->
        <scrollactive
          ref="scrollactive"
          :offset="offset"
          :always-track="alwaysTrack"
          :duration="duration"
          :click-to-scroll="clickToScroll"
          :bezier-easing-value="easing"
        >
          <ul class="nav-center">
            <li>
              <a href="#exp" class="scrollactive-item nav-item"
                >Work Experience</a
              >
            </li>
            <li>
              <a href="#ed" class="scrollactive-item nav-item">Education</a>
            </li>
            <li><a href="#sk" class="scrollactive-item nav-item">Skills</a></li>
          </ul>
        </scrollactive>
        <!-- <vue-navigation-bar :options="navbarOptions" /> -->
        <!-- <RouterView></RouterView> -->
      </el-header>
      <el-divider content-position="center"/>
      <el-main>
        <el-row justify="center">
          <el-col :lg="24">
            <info />
          </el-col>
        </el-row>
        <!-- 工作經歷 -->
        <el-divider id="exp" content-position="left"
          ><h2>
            <i class="fa-solid fa-briefcase fa-md"></i> Work Experience
          </h2></el-divider
        >
        <el-row>
          <el-col :lg="24">
            <work />
          </el-col>
        </el-row>
        <el-divider id="ed" content-position="left"
          ><h2>
            <i class="fa-solid fa-user-graduate fa-md"></i> Education
          </h2></el-divider
        >
        <el-row>
          <el-col :lg="24">
            <!-- <skill/> -->
            <ed />
          </el-col>
        </el-row>
        <!-- 技能技術 -->
        <section id="sk">
          <el-divider content-position="left"
            ><h2>
              <i class="fa-solid fa-screwdriver-wrench fa-md"></i> Skills
            </h2></el-divider
          >
          <el-row>
            <el-col :lg="24">
              <!-- <ed/> -->
              <skill />
            </el-col>
            <!-- <el-col :lg="24" >
            <work/>
          </el-col> -->
          </el-row>
        </section>
      </el-main>
      <el-footer>
        <div class="content has-text-centered">
          <p>
            Code Could be Found
            <a href="https://github.com/eric9991517/vue3-vite-profile">here</a>
          </p>
          <p>Last Updated: 2022/10/26</p>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<style>
.box-card {
  /* width: 1024px; */
  border-radius: 20px;
}
.content {
  text-align: center;
  margin-top: 80px;
}
.nav-center {
  /* width: 200px; */
  list-style: none;
  margin: 10px;
  padding: 0;
}
.nav-center li {
  margin-right: 20px;
  padding-top: 20px;
  /* margin: auto auto; */
  float: left;
}
.nav-center li a {
  /* padding: 20px 0; */
  color: #000;
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
}
</style>
