<script lang="ts" setup>
import { reactive, toRefs } from 'vue'


const state = reactive({
    fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
    circleUrl:'https://github.com/eric9991517/vue3-vite-profile/blob/main/src/assets/profile.JPG?raw=true',
})

const { circleUrl } = toRefs(state)
</script>

<template>
    <el-row>
        <el-col :span="12" :xs="24" lg="12">
            <div class="demo-basic--circle">       
                <el-avatar :size="230" fits='fill' :src="circleUrl" />
            </div>
        </el-col>
        <el-col :span="12" :xs="24" :lg="12">
            <div class="info-text-header">
                <h2>陳羿翊｜Yiyi Chen</h2>
                <h4 style="display: flex; align-items: center">
                <span style="margin-right:10px">後端工程師 Backend Engineer</span>
                  <span >
                    <!--contact info-->
                    <a href="mailto:eric9991517@gmail.com">
                      <span class="icon-span">
                        <i class="fa-solid fa-envelope fa-xl"></i>
                      </span>
                    </a>
                    <!--github link-->
                    <a href="https://github.com/eric9991517" target="_BLANK">
                      <span class="icon-span">
                        <i class="fa-brands fa-github fa-xl"></i>
                      </span>
                    </a>
                    <!--Linkedin link-->
                    <a href="https://www.linkedin.com/in/yiyi-chen-261aa1248/" target="_BLANK">
                      <span class="icon-span" >
                        <i class="fa-brands fa-linkedin fa-xl"></i>
                      </span>
                    </a>
                  </span>
                </h4>
            </div>
            <span><i class="fa-solid fa-location-dot fa-xl" style="color:red"></i> <b>Taipei , TW</b></span>
            <br>  
            <div class="info-text-content">
                <p>擁有6年後端經驗，喜歡在工作過程中自學程式研究新穎技術<br>目前在 <b>緯創軟體</b> 擔任後端工程師，期許自己持續精進技術實<br>力並結合過往經驗，協助公司解決問題。</p>
            </div>

        </el-col>
    </el-row>
</template>

<style>
.el-avatar>img {
    display: block;
    height: 300px;
    width: 300px;
    /* margin: -2px; */
    /* top: -38px; */
    /* right: -2px; */
    /* left: 30px; */
}
.info-text-header{
    font-weight:bold;
    text-align:left
}
.info-text-content{
    /* width:360px; */
    text-align:left
}
.icon-span{
    padding: 3px;
}

</style>