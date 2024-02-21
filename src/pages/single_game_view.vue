<template>
     <el-container class="container">
         <el-header class="header">

             <div class="Box">
                <div class="Box1">1</div>
                <div class="Box2">2</div>
             </div>

         </el-header>

         <div class="main">
             <div class="box left">
             <div class="sub-box top">Left Top Box (75%)</div>
             <div class="sub-box bottom">Left Bottom Box (25%)</div>
         </div>
             <div class="box right">
             <div class="sub-box top">Right Top Box (45%)</div>
             <div class="sub-box bottom">Right Bottom Box (40%)</div>
         </div>
</div>

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
.Box {
    display: flex;
    justify-content: flex-start;
    height: 50%;
}

.Box1 {
    width: 45%;
    height: 95%;
    border: 1px solid rgb(255, 0, 255);
    overflow: scroll;
}
.Box2 {
    width: 45%;
    height: 95%;
    margin-left: 10px;
    border: 1px solid rgb(255, 0, 255);
}

.main {
  display: flex;
  height: 100vh; /* Adjust height as needed */
}

.box {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 10px; /* Adjust spacing as needed */
}

.left .top {
  flex: 3; /* 3 parts of 4 total */
  background-color: lightgreen; /* Just for visual aid, can be removed */
}

.left .bottom {
  flex: 1; /* 1 part of 4 total */
  background-color: darkseagreen; /* Just for visual aid, can be removed */
}

.right .top {
  flex: 9; /* 9 parts of 17 total */
  background-color: lightgreen; /* Just for visual aid, can be removed */
}

.right .bottom {
  flex: 8; /* 8 parts of 17 total */
  background-color: darkseagreen; /* Just for visual aid, can be removed */
}


</style>
  