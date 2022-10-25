<script setup>
import {reactive } from "vue";
// 定義技能
const state = reactive({
    names:[
        {title: "Frontend", value: ["Html/CSS","Javascript/JQuery","Bootstrap","Vue"]},
        {title: "Backend", value: ["Java","Python","C#","Visual Basic"]},
        {title: "Database", value: ["Oracle","MySQL","DB2"]},
        {title: "Framework", value: ["Struts2","SpringBoot","Hibernate"]},
        // {title: "Others", value: ["iReport","FineReport","Postman"]}
    ]
})
</script>

<template>
  <el-row :gutter="10" justify="space-evenly">
      <el-card class="sk-box-card" v-for="item in state.names" >
          <template #header>
          <div class="sk-card-header" >
              <span>{{item.title}}</span>
          </div>
          </template>
          <li v-for="o in item.value" class="text item">{{ o }}</li>
      </el-card>
  </el-row>
</template>

<style>
/* .card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight:bold;
  
}

.text {
  font-size: 14px;
  font-weight:normal;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

.item {
  margin-bottom: 2px;
} */
.el-card__header{
  background-color: darkseagreen;
  font-weight: bold;
  text-align: center;

}
.sk-box-card{
  width: 200px;
  border-radius: 20px;
  margin-bottom: 10px; 
  margin: 3px;
} 
</style>