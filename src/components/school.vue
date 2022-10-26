<template>
<el-timeline>
      <el-timeline-item center timestamp="Sept. 2009 - June 2014" placement="top"  type="primary">
        <el-card class="box-card">
          <el-row :gutter="20">
            <el-col :span="18">
              <div class="grid-content ep-bg-purple" />
              <h2>亞洲大學 Asia University</h2>
              <h4>Computer Science and Information Engineering</h4>
              <p>Taichung, Taiwan</p>
            </el-col>
            <el-col :span="6" :xs="24">
              <div class="grid-content ep-bg-purple" />
              <a href="https://www.wistronits.com/tw/" target="_blank"><img class="image" src="../assets/asia_logo.png" width="160" ></a>
            </el-col>
          </el-row>  
        </el-card>
      </el-timeline-item>
   
      <el-timeline-item center timestamp="June 2007 - Sept. 2009" placement="top" >
        <el-card class="box-card">
          <el-row :gutter="20">
            <el-col :span="20">
              <div class="grid-content ep-bg-purple" />
          <h2>僑泰高級中學 CTS</h2>
          <h4>資訊科</h4>
          <p>Taichung, Taiwan</p>
            </el-col>
            <el-col :span="4" :xs="24">
              <div class="grid-content ep-bg-purple" />
              <a href="https://www.ctas.tc.edu.tw/home" target="_blank"><img class="image" src="../assets/cts.png" width="80" ></a>
            </el-col>
          </el-row>  
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </template>
