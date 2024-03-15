<template>
     <el-container class="container">
         <el-header class="header">
          <h3>c_name</h3>
          <el-button type="primary" round style="margin-left: 80%; height:80%; font-size: 16px; font-family: monospace;">Join</el-button>
         </el-header>

         <el-main class="main">
            <el-tabs v-model="activeName" @tab-click="handleClick" style="font-family:monospace;">
              <el-tab-pane label="Overview" name="first">
                <div style="font-size: 24px; font-weight: 600;margin-bottom: 1%;">Overview</div>
                <div style="margin-bottom: 1%; margin-left: 1%">Hi! Wellcome joinning us!</div>
                <el-collapse v-model="activeNames" @change="handleChange">
                  <el-collapse-item title="Description" name="1">
                    <div class="box">
                      This is the legendary Titanic ML competition – the best, first challenge for you to dive into ML competitions and familiarize yourself with how the Kaggle platform works.
                    </div>
                    <div class="box">You can download a detailed description on the 'Files' page</div>
                  </el-collapse-item>
                  <el-collapse-item title="Information">
                    <div class="box">
                      <el-tag style="margin-right: 1%;">AI</el-tag>
                      <el-tag type="danger">Medium</el-tag>
                    </div>
                    <el-card class="card">
                      <div>Teacher: neale</div>
                      <div>Course: COMP219</div>
                      <div>Participants: 555</div>
                    </el-card>
                  </el-collapse-item>
                  <el-collapse-item title="Evaluation">
                    <div class="box1">
                      <div style="font-size: 18px; font-weight: 600; margin-bottom: 1%;">Goal</div>
                      <div>
                        It is your job to predict the sales price for each house. For each Id in the test set, you must predict the value of the SalePrice variable.
                      </div>
                    </div>
                    <div class="box1">
                      <div style="font-size: 18px; font-weight: 600; margin-bottom: 1%;">Metric</div>
                      <div>
                        Submissions are evaluated on Root-Mean-Squared-Error (RMSE) between the logarithm of the predicted value and the logarithm of the observed sales price. (Taking logs means that errors in predicting expensive houses and cheap houses will affect the result equally.)
                      </div>
                    </div>
                    <div class="box1">
                      <div style="font-size: 18px; font-weight: 600; margin-bottom: 1%;">Submission File Format</div>
                      <div>The file should contain your name.</div>
                      <div style="margin-top: 1%;">You can download an example submission file (sample_submission.csv) on the 'Files' page.</div>
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </el-tab-pane>
              <el-tab-pane label="Files" name="second">
                <div style="margin: 1%; font-size: 24px; font-weight: 600;">All Files</div>
                <div style="margin-top: 2%;margin-left: 1%;margin-bottom: 1%; font-size: 18px; font-weight: 600;">File Details</div>
                <div class="box">
                  <div style="font-weight: 600;">train.csv</div>
                  <div> - the training set</div>
                </div>
                <el-link icon="el-icon-download" style="margin-left: 1%;">Download</el-link>
                <div class="box">
                  <div style="font-weight: 600;">test.csv </div>
                  <div>- the test set</div>
                </div>
                <el-link icon="el-icon-download" style="margin-left: 1%;">Download</el-link>
                <div class="box">
                  <div style="font-weight: 600;">data_description.txt</div>
                  <div> - full description of each column, originally prepared by Dean De Cock but lightly edited to match the column names used here</div>
                </div>
                <el-link icon="el-icon-download" style="margin-left: 1%;">Download</el-link>
                <div class="box">
                  <div style="font-weight: 600;">sample_submission.csv </div>
                  <div>- a benchmark submission from a linear regression on year and month of sale, lot square footage, and number of bedrooms</div>
                </div>
                <el-link icon="el-icon-download" style="margin-left: 1%;">Download</el-link>
                <div class="box">
                  <div style="font-weight: 600;">Description.docx</div>
                  <div> - the detailed description</div>
                </div>
                <el-link icon="el-icon-download" style="margin-left: 1%;">Download</el-link>
              </el-tab-pane>
              <el-tab-pane label="Leaderboard" name="third">
                <el-table
                  ref="filterTable"
                  :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                  style="width: 100%">
                    <el-table-column
                      prop="name"
                      label="name"
                      style="width: 5%;"
                      >
                    </el-table-column>
                    <el-table-column
                      prop="date"
                      label="date"
                      sortable
                      style="width: 10%;"
                      column-key="date"
                      :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
                      :filter-method="filterDate"
                      >
                    </el-table-column>
                    <el-table-column
                      prop="score"
                      label="score"
                      style="width: 25%;"
                      sortable
                      colum-key="score"
                      :filters="[{text:'88',value:'88'},{text:'68',value:'68'},{text:'58',value:'58'},{text:'48',value:'48'},]"
                      :filter-method="filterScore"
                      >
                    </el-table-column>
                    <el-table-column
                      align="right">
                        <template slot="header" slot-scope="scope">
                            <el-input
                                v-model="search"
                                size="large"
                                placeholder="Search"/>
                        </template>
                        <template slot-scope="scope">
                            <el-button
                                size="lage"
                                type="primary"
                                @click="handleEdit(scope.$index, scope.row)">Download all</el-button>
                        </template>
                  </el-table-column>
                 </el-table>
              </el-tab-pane>
              <el-tab-pane label="Submission & Feedback" name="fourth">
                <el-upload
                  class="upload-demo"
                  drag
                  action="https://jsonplaceholder.typicode.com/posts/"
                  multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">Drag files here, or<em>Click to upload</em></div>
                  <div class="el-upload__tip" slot="tip">Participation before submission!!!</div>
                </el-upload>
              </el-tab-pane>
            </el-tabs>
         </el-main>

     </el-container>
</template>
  

<script>
  export default {
    data() {
      return {
        activeNames: ['1'],
        activeName:'first',
        tableData: [{
          date: '2016-05-02',
          name: 'neale',
          score: '88',
        },{
          date: '2016-05-04',
          name: 'neal',
          score: '68',
        },{
          date: '2016-05-03',
          name: 'niel',
          score: '58',
        },{
          date: '2016-05-01',
          name: 'nio',
          score: '48',
        },],
        search: ''
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }

</script>
  

<style scoped> 

.container {
    height: 100%;
    font-family: monospace;
}
.header {
    margin-top: 1%;
    margin-left: 1%;
    margin-right: 1%;
    height: 10% !important;
    display: flex;
}

.main {
    margin-left: 1%; margin-right: 1%; margin-bottom: 1%;
    padding: 1%;
    border: 3px solid rgb(10, 10, 11);
    border-radius: 6px;
    height: 90%;
}
.box{
  padding: 1%;
  display: flex;
}
.box1{
  margin-bottom: 1%;
  padding: 1%;
}
.card{
  margin: 1%;
}
/deep/ .el-collapse-item__header {
  font-size: 24px !important; /* 使用 !important 来强制应用这个样式 */
  font-weight: 600;
}
</style>
  