<template>
  <el-container>
    <el-header>
      <router-link to="/">首页</router-link>
      <router-link to="/setting">设置</router-link>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {};
</script>

<style></style>
