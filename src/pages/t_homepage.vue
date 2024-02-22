<template>
<el-container>
     <el-header calss="header">
         <el-select v-model="value1" multiple placeholder="Course">
             <el-option
                 v-for="item in options"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
             </el-option>
         </el-select>

         <el-select
             v-model="value2"
             multiple
             collapse-tags
             style="margin-left: 40px;"
             placeholder="Level">
                 <el-option
                 v-for="item in options"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
                 </el-option>
         </el-select>
         <el-select
             v-model="value3"
             multiple
             collapse-tags
             style="margin-left: 40px;"
             placeholder="Tyoe">
                 <el-option
                 v-for="item in options"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
                 </el-option>
         </el-select>
         <el-select
             v-model="value"
             multiple
             filterable
             remote
             reserve-keyword
             style="margin-left: 40px;"
             placeholder="Search"
             :remote-method="remoteMethod"
             :loading="loading">
         <el-option
             v-for="item in options"
             :key="item.value"
             :label="item.label"
             :value="item.value">
         </el-option>
  </el-select>
     </el-header>
     <el-main class="main">
         <div class="box">
         </div>
     </el-main>
</el-container>

</template>

<script>


</script>

<style scoped>
.container {
    border: 1px solid rgb(0, 255, 0);
    height: calc(100% - 90px);
}
.header {
    border: 1px solid rgb(255, 0, 0)
}

.main {
    padding: 10px;
    margin: 10px;
    border: 1px solid rgb(0, 0, 255);
}
.box {
    height: 50%;
}


</style>