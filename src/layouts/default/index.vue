<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" style="height: 100vh; background-color: var(--side-bar-color)">
        <h5
          style="
            padding: 20px 0;
            margin: 0;
            text-align: center;
            font-size: 15px;
            background-color: var(--side-bar-color);
            color: var(--font-color);
          "
        >
          MING-VUE-TEMP
        </h5>
        <el-menu
          :default-active="router.currentRoute.value.fullPath"
          router
          background-color="none"
          text-color="rgb(29, 33, 41)"
          style="font-weight: normal"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu v-for="(item, index) in routes[1].children" :key="index" :index="item.path">
            <template #title>
              <el-icon> <location /> </el-icon>
              <span>{{ item.meta?.title }}</span>
            </template>
            <el-menu-item v-for="item2 in item.children" :key="item2.path" :index="item2.path">
              {{ item2.meta?.title }}
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>选项二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon><setting /></el-icon>
            <span>选项三</span>
          </el-menu-item>
        </el-menu></el-aside
      >
      <el-main>
        <el-header height="60px">Header</el-header>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue';
import router, { routes } from '@/router';

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
console.log(routes);
</script>

<style scoped>
.el-aside {
  --side-bar-color: rgb(255, 255, 255);
  --active-item: rgb(242, 243, 245);
  --font-color: rgb(29, 33, 41);
  --font-color-active: rgb(22, 93, 255);
}
.el-menu-item.is-active {
  background-color: var(--active-item);
  color: var(--font-color-active);
}
.el-menu-item:hover {
  background-color: var(--active-item);
}
:deep(.el-sub-menu__title:hover) {
  background-color: var(--active-item);
}
:deep(.is-active .el-sub-menu__title) {
  color: var(--font-color-active) !important;
}
</style>
