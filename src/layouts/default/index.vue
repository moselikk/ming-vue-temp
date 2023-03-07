<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" style="height: 100vh; background-color: var(--side-bar-color)">
        <h5 class="tittle">MING-VUE-TEMP</h5>
        <SiderBarMenu />
      </el-aside>
      <el-main>
        <el-header height="60px">Header</el-header>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import SiderBarMenu from './menu/index.vue';
</script>
<style scoped>
.el-aside {
  --side-bar-color: rgb(255, 255, 255);
  --active-item: rgb(242, 243, 245);
  --font-color: rgb(29, 33, 41);
  --font-color-active: rgb(22, 93, 255);
}

.tittle {
  padding: 20px 0;
  margin: 0;
  text-align: center;
  font-size: 15px;
  background-color: var(--side-bar-color);
  color: var(--font-color);
}
</style>
