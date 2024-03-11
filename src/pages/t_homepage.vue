<template>
<el-container class="container">
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
             style="margin-left: 13%;margin-top: 1%;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"
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
             style="margin-left: 13%;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"
             placeholder="Type">
                 <el-option
                 v-for="item in options"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
                 </el-option>
         </el-select>
         <el-button type="success" style="margin-left: 13%;
                                          font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                                          font-size: 18px;">
             Add new
         </el-button>
     </el-header>

     <el-main class="main">
        <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%;
                   font-size: 16px;
                   font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
            <el-table-column
                label="competition name"
                prop="teacher_homepage_competiton_name">
            </el-table-column>
            <el-table-column
                label="anverage socre"
                prop="anverage">
            </el-table-column>
            <el-table-column
                align="right">
                <template slot="header" slot-scope="scope">
                    <el-input
                        v-model="search"
                        size="mini"
                        style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                               font-size: 16px;"
                        placeholder="Search"/>
                </template>
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
     </el-main>
</el-container>

</template>

<script>
export default {
    data() {
      return {
        tableData: [{
          teacher_homepage_competiton_name: 'ai competiton',
          anverage: '78.5',
        },{
          teacher_homepage_competiton_name: 'ai competiton',
          anverage: '78.5',
        },
      ],
        search: ''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }

</script>

<style scoped>
.container {
    height: 100%;
}
.header {
    border: 1px solid rgb(255, 0, 195)
}

.main {
    margin: 10px;
    border: 1px solid rgb(11, 11, 11);
    border-radius: 1%;
    border-width: 2px;
    height: 90%;
}
.box {
    height: 100%;
    
}


</style>