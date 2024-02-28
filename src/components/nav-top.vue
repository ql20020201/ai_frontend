<template>
  <div class="container">
  <div class="flex-row logo"></div>
  <div class="flex-row name">
    <h3>{{ this.$route.name }}</h3>
  </div>
  <div class="flex-row history">
    <i calss="el-icon-time"></i>
  </div>
  <div class="flex-row account">
    <i class="el-icon-s-custom"></i>
  </div>
</div>

</template>

<script>
export default {
  name: "nav-top"
}
</script>

<style scoped>
.container {
  width: 1280px; /* 总长 */
  height: 100%; /* 根据内容自动调整高度 */
  display: flex; /* 使用 Flexbox 布局 */
  position: relative; /* 为了绝对定位子元素 */
  flex-wrap: wrap; /* 允许元素换行 */
}

.flex-row {
  position: absolute; /* 使用绝对定位来控制位置 */
  bottom: 5%; /* 距离底部 5% */
}

.logo {
  width: 15%; /* 宽度占总长的 15% */
  height: 90%; /* 高度 */
  background-color: lightblue; /* 背景颜色 */
  left: 0; /* 顶头 */
}

.name {
  width: 5%; /* 宽度占总长的 5% */
  height: 20%; /* 高度 */
  background-color: lightgreen; /* 背景颜色 */
  left: 17%; /* 第一个宽度加上间隙 2% */
}

.history {
  width: 10%; /* 宽度占总长的 10% */
  height: 85%; /* 高度 */
  background-color: lightcoral; /* 背景颜色 */
  right: 14%; /* 第一个和第二个的宽度加上间隙 */
}

.account {
  width: 10%; /* 宽度占总长的 10% */
  height: 85%; /* 高度 */
  background-color: lightgoldenrodyellow; /* 背景颜色 */
  right: 0; /* 贴着最右边 */
}


</style>
