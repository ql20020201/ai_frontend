<template>
    <el-container class="main-container">
      <el-aside class="sidebar">
        <el-menu>
          <el-menu-item index="1" @click="scrollToSection('hot')">hot race</el-menu-item>
          <el-menu-item index="2" @click="scrollToSection('new')">new race</el-menu-item>
          <el-menu-item index="3" @click="scrollToSection('leaderboard')">leaderboard</el-menu-item>
          <el-menu-item index="4" @click="scrollToSection('competitions')">competitions</el-menu-item>
        </el-menu>
      </el-aside>
  
      <el-container class="content-container">
        <el-header class="header"></el-header>
        <el-main class="main">
          <div id="hot" class="section hot">热门比赛排行榜</div>
          <div id="new" class="section new">最新比赛排行榜</div>
          <div id="leaderboard" class="section leaderboard">学员总分排行榜</div>
          <div id="competitions" class="section competitions">所有比赛</div>
        </el-main>
      </el-container>
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
      }
    }
  };
  </script>
  
  <style scoped>
  .main-container {
    height: 100%;
    width: 100%;
    border: 1px solid #eee;
  }
  
  .sidebar {
    background-color: rgb(238, 241, 246);
    width: 200px!important;
  }

  .header {
    height: 35%;
    background-color: #B3C0D1;
    color: #333;
  }
  
  .section {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    width: calc(100% - 40px); /* Adjust width based on margin and padding */
  }
  
  /* Specific height for each section */
  .hot {
    height: 300px; /* Example height */
  }
  
  .new {
    height: 200px; /* Different height for demonstration */
  }
  
  .leaderboard {
    height: 250px; /* Different height for demonstration */
  }
  
  .competitions {
    height: 300px; /* Different height for demonstration */
  }
  </style>
  