<template>
    <el-container class="container">
        
        <el-main class="main">
            
            <div class="box">
                <div class="box1">

                    <el-button @click="click_button({
                                            date: '2016-05-02',
                                            name: '王小虎',
                                            address: '上海市普陀区金沙江路 1518 弄'})">点击</el-button>
                    <el-table class="data"
                        :data="tableData">

                        <el-table-column
                            prop="date"
                            label="日期"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="姓名"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="地址">
                        </el-table-column>

                    </el-table>
                </div>
                <div class="box2">2</div>
            </div>

            <div class="box">
                <div class="box1">1</div>
                <div class="box2">2</div>
            </div>
            <div class="box">
                
            </div>
        </el-main>
    </el-container>
</template>
  
<script>
  export default {
    name: "homepage",
    data() {
      return {
        tableData: []
      }
    },
    mounted() {
      
    },
    methods: {
        click_button(d) {
            this.tableData.push(
                d
            );
        }
    }
  }
</script>
  
<style scoped>

.container {
    border: 1px solid rgb(0, 255, 0);
    height: 100%;
    width: 100%;
}
.header {
    border: 1px solid rgb(255, 0, 0)
}

.main {
    padding: 0px;
    margin: 0px;
    border: 1px solid rgb(0, 0, 255);
}
.box {
    display: flex;
    justify-content: center;
    height: 50%;
    border: 1px solid rgb(255, 0, 0);
}

.box1 {
    width: 48%;
    height: 95%;
    border: 1px solid rgb(255, 0, 255);
    overflow: scroll;
    margin-right: 10px;
    margin-top: 8px;
}
.box2 {
    width: 48%;
    height: 95%;
    margin-left: 10px;
    border: 1px solid rgb(255, 0, 255);
    margin-top: 8px;
}

.data {
    width: 100%;
}

</style>
  