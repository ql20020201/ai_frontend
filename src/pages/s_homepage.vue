<template>
    <el-container class="main-container">
      <el-aside class="sidebar">
        <el-menu>
          <el-menu-item index="1" @click="scrollToSection('descriptions')">descriptions</el-menu-item>
          <el-menu-item index="2" @click="scrollToSection('hot')">hot race</el-menu-item>
          <el-menu-item index="3" @click="scrollToSection('new')">new race</el-menu-item>
          <el-menu-item index="4" @click="scrollToSection('leaderboard')">leaderboard</el-menu-item>
          <el-menu-item index="5" @click="scrollToSection('competitions')">competitions</el-menu-item>
        </el-menu>
      </el-aside>
  
            
        <el-main class="main">
          <div id="descriptions" class="section descriptions">
            <div class="block">
                
                <el-carousel trigger="click" height="250px">
                  <el-carousel-item v-for="item in 4" :key="item">
                    <h3 class="small">{{ item }}</h3>
                  </el-carousel-item>
                </el-carousel>
            </div>
          </div>

          <div id="hot" class="section hot">
            <div class="flex_box">Hot Race</div>
            <el-table class="race"
              :data="hotData"
              stripe
              style="width: 100%">
              <el-table-column
                fixed
                type="index" 
                label="No." 
                style="width: 10%">
              </el-table-column>
              <el-table-column
                prop="name"
                label="competition"
                style="width: 40%">
              </el-table-column>
              <el-table-column
                prop="people"
                label="quorum"
                style="width: 20%">
              </el-table-column>
              <el-table-column
                   prop="ddl"
                   label="time span"
                   style="width: 30%">
              </el-table-column>
            </el-table>
          </div>

          <div id="new" class="section new">
            <div class="flex_box">New Race</div>
            <el-table class="race"
              :data="newData"
              stripe
              style="width: 100%">
              <el-table-column
                fixed
                type="index" 
                label="No." 
                style="width: 10%">
              </el-table-column>
              <el-table-column
                prop="name"
                label="competition"
                style="width: 40%">
              </el-table-column>
              <el-table-column
                prop="people"
                label="quorum"
                style="width: 20%">
              </el-table-column>
              <el-table-column
                   prop="ddl"
                   label="time span"
                   style="width: 30%">
              </el-table-column>
            </el-table>
          </div>

          <div id="leaderboard" class="section leaderboard">
            <div class="flex_box">leaderboard</div>
            <el-table class="race"
              :data="leaderboardData"
              stripe
              style="width: 100%">
              <el-table-column
                fixed
                type="index" 
                label="No." 
                style="width: 10%">
              </el-table-column>
              <el-table-column
                prop="l_student_name"
                label="name"
                style="width: 70%">
              </el-table-column>
              <el-table-column
                prop="l_total_score"
                label="score"
                style="width: 20%">
              </el-table-column>
            </el-table>
          </div>

          <div id="competitions" class="section competitions">
            <div class="flex_box">All competitions</div>
            <el-table class="all-race"
               :data="tableData"
               stripe
               style="width: 100%"
               max-height="380">
                 <el-table-column
                   fixed
                   type="index" 
                   label="No." 
                   style="width: 10%">
                 </el-table-column>
                 <el-table-column
                   prop="c_name"
                   label="competition name"
                   style="width: 30%">
                 </el-table-column>
                 <el-table-column
                   prop="c_people"
                   label="participants"
                   style="width: 20%">
                 </el-table-column>
                 <el-table-column
                   prop="c_anverage_score"
                   label="anverage score"
                   style="width: 20%">
                 </el-table-column>
                 <el-table-column
                   prop="c_level"
                   label="level"
                   style="width: 20%">
                 </el-table-column>
            </el-table>
          </div>
        </el-main>
      </el-container>
  </template>
  
  <script>
  export default {
    
    methods: {
      scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
    
    data() {
      return {
        tableData: [{
          name: 'Store Sale - Time Series Forcasting',
          people: '666',
          ddl: '11/11/2023 - 11/11/2024',
          l_student_name:'neale',
          l_total_score:'1234(total 20 matches)',
          c_name:'cnn',
          c_people:'678',
          c_anverage_score:'56',
          c_level:'middle'
        },
        {
          name: 'Store Sale - Time Series Forcasting',
          people: '666',
          ddl: '11/11/2023 - 11/11/2024',
          l_student_name:'neale',
          l_total_score:'1234(total 20 matches)',
          c_name:'cnn',
          c_people:'678',
          c_anverage_score:'56',
          c_level:'middle'
        },
        {
          name: 'Store Sale - Time Series Forcasting',
          people: '666',
          ddl: '11/11/2023 - 11/11/2024',
          l_student_name:'neale',
          l_total_score:'1234(total 20 matches)',
          c_name:'cnn',
          c_people:'678',
          c_anverage_score:'56',
          c_level:'middle'
        },
        {
          name: 'Store Sale - Time Series Forcasting',
          people: '666',
          ddl: '11/11/2023 - 11/11/2024',
          l_student_name:'neale',
          l_total_score:'1234(total 20 matches)',
          c_name:'cnn',
          c_people:'678',
          c_anverage_score:'56',
          c_level:'middle'
        },
        {
          name: 'Store Sale - Time Series Forcasting',
          people: '666',
          ddl: '11/11/2023 - 11/11/2024',
          l_student_name:'neale',
          l_total_score:'1234(total 20 matches)',
          c_name:'cnn',
          c_people:'678',
          c_anverage_score:'56',
          c_level:'middle'
        },
        {
          l_student_name:'sonny',
          l_total_score:'783(total 16 matches)',
          c_name:'rnn',
          c_people:'782',
          c_anverage_score:'73',
          c_level:'easy'
        },
        {
          l_student_name:'sonny',
          l_total_score:'783(total 16 matches)',
          c_name:'rnn',
          c_people:'782',
          c_anverage_score:'73',
          c_level:'easy'
        },
        {
          l_student_name:'sonny',
          l_total_score:'783(total 16 matches)',
          c_name:'rnn',
          c_people:'782',
          c_anverage_score:'73',
          c_level:'easy'
        },
        {
          l_student_name:'sonny',
          l_total_score:'783(total 16 matches)',
          c_name:'rnn',
          c_people:'782',
          c_anverage_score:'73',
          c_level:'easy'
        },
        {
          l_student_name:'sonny',
          l_total_score:'783(total 16 matches)',
          c_name:'rnn',
          c_people:'782',
          c_anverage_score:'73',
          c_level:'easy'
        },
        {
          c_name:'rabc',
          c_people:'352',
          c_anverage_score:'42',
          c_level:'hard'
        },
        {
          c_name:'rabc',
          c_people:'352',
          c_anverage_score:'42',
          c_level:'hard'
        },
        {
          c_name:'rabc',
          c_people:'352',
          c_anverage_score:'42',
          c_level:'hard'
        },
        {
          c_name:'rabc',
          c_people:'352',
          c_anverage_score:'42',
          c_level:'hard'
        }
      ],
      }
  },
    computed: {
      hotData() {
      return this.tableData.slice(0, 5);    // hot部分只显示5行数据
    },
      newData() {
      return this.tableData.slice(0, 5);    // new部分也只显示5行数据
    },
      leaderboardData() {
      return this.tableData.slice(0, 10);   // leaderboard部分只显示10行数据
    },
  }
  
}
  
  </script>
  
  <style scoped>
  .main-container {
    height: 100%;
    width: 100%;
    border: 1px solid #eee;
  }
  
  .sidebar {
    background-color: rgb(238, 241, 246);
    width: 20%!important;
  }
  .main{
    overflow-y: overlay;
    overflow-x: overlay;
  }
  .flex_box{
    display:flex;
    justify-content: center;
  }
  .section {
    margin: 0px auto;
    padding: 0px;
    width: 100%; /* Adjust width based on margin and padding */
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)

  }
  .descriptions{                  /*边框 */
    height: 40%;
    border-style:hidden;
  }
  .hot {                        /*边框 */
    height: 50%; 
    width: 98%;
    font-size: 50px;
    color: #141314;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border: 2px solid #2e2e2ef6;
    border-radius: 10px;
    margin-top: 2%;
  }
  
  .new {                        /*边框 */
    height: 50%; /* Different height for demonstration */
    width: 98%;
    font-size: 50px;
    color: #141314;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border: 2px solid #2e2e2ef6;
    border-radius: 10px;
    margin-top: 2%;
  }
  .race{                        /*表格 */
    color: rgba(0, 0, 0, 0.5);
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
    margin-left: 0px auto;
    
  }
  .leaderboard {                /*边框 */
    height: 82%; 
    width: 98%;
    font-size: 50px;
    color: #141314;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border: 2px solid #2e2e2ef6;
    border-radius: 10px;
    margin-top: 2%;
  }
  .leader{                      /*表格 */
    
  }
  .competitions {               /*边框*/
    height: 62%; 
    width: 98%;
    font-size: 50px;
    color: #141314;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border: 2px solid #2e2e2ef6;
    border-radius: 10px;
    margin-top: 2%;
  }
  .all-race{                    /*表格 */
    color: rgba(0, 0, 0, 0.5);
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
    margin-left: 0px auto;
  }

  </style>
  