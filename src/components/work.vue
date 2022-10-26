<template>
  <el-timeline style="padding-left: unset">
    <el-timeline-item
      center
      timestamp="Jan. 2021 ~ Present"
      placement="top"
      type="primary"
    >
      <el-card class="box-card">
        <el-row :gutter="20">
          <el-col :span="18" :xs="24">
            <div class="grid-content ep-bg-purple" />
            <h2>緯創軟體 Wistron ITS</h2>
            <h4>Software Engineer</h4>
            <p>協助國泰人壽進行後台維護及開發新功能<br>使用Java、Springboot、iReport</p>
          </el-col>
          <el-col :span="6" :xs="24">
            <div class="grid-content ep-bg-purple" />
            <a href="https://www.wistronits.com/tw/" target="_blank"
              ><img class="image" src="../assets/wist.svg" width="160"
            /></a>
          </el-col>
        </el-row>
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="May 2018 ~ May 2022" placement="top">
      <el-card class="box-card">
        <el-row :gutter="20">
          <el-col :span="18">
            <div class="grid-content ep-bg-purple" />
            <h2>成霖實業 GLOBE UNION</h2>
            <h4>Software Engineer</h4>
            <p>現有BPM系統維護及開發新程式<br>客製化表單及簽核流程<br>客製化報表<br>使用Java、Springboot、Vue2、FineReport</p>
          </el-col>
          <el-col :span="6" :xs="24">
            <div class="grid-content ep-bg-purple" />
            <a href="https://tw.globeunion.com/" target="_blank"
              ><img class="image" src="../assets/gu.png" width="160"
            /></a>
          </el-col>
        </el-row>
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="Jun 2015 ~ Mar 2018" placement="top">
      <el-card class="box-card">
        <el-row :gutter="20">
          <el-col :span="18">
            <div class="grid-content ep-bg-purple" />
            <h2>八旺實業 BarWand Corp.</h2>
            <h4>Technical Support Engineer</h4>
            <p>精通各廠牌標籤積及Barcode Reader維修保養<br>客製標籤機程式(VB6 & VB.NET & C#)<br>客製化攜帶型PDA進出庫掃碼程式(WinCE & C)</p>
          </el-col>
          <el-col :span="6" :xs="24">
            <div class="grid-content ep-bg-purple" />
            <a href="https://www.barwand.com.tw/" target="_blank"
              ><img class="image" src="../assets/bw.png" width="160"
            /></a>
          </el-col>
        </el-row>
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="Jan 2015 ~ May 2015" placement="top">
      <el-card class="box-card">
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="grid-content ep-bg-purple" />
            <h2>寶成集團 POU CHEN GROUP</h2>
            <h4>Software Engineer</h4>
            <P>將現有自動化產生3D鞋模程式從VB6改寫成VB.NET
              <br>將PowerSHAPE做二次開發公司內部專用tools
            </P>
          </el-col>
          <el-col :span="4" :xs="24">
            <div class="grid-content ep-bg-purple" />
            <a href="https://www.pouchen.com/index.php/tw/" target="_blank"
              ><img class="image" src="../assets/Pou.png" width="80"
            /></a>
          </el-col>
        </el-row>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<style>
.el-timeline-item__timestamp {
  color: var(--el-text-color-secondary);
  font-size: 16px;
  font-weight: bold;
}
</style>
