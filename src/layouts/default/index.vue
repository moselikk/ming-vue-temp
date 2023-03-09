<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <topHeader></topHeader>
      </el-header>
      <el-container>
        <el-aside width="200px" style="background-color: var(--side-bar-color)">
          <SideBarMenu />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import SideBarMenu from './menu/index.vue';
import topHeader from './header/index.vue';
</script>
<style scoped>
.el-header {
  padding: 0;
  height: 50px;
}
</style>
