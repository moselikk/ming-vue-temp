<template>
  <div class="side">
    <el-menu
      :default-active="router.currentRoute.value.fullPath"
      router
      background-color="none"
      text-color="rgb(29, 33, 41)"
      style="font-weight: normal; border-right: 1px solid black"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu v-for="(item, index) in routes[0].children" :key="index" :index="item.path">
        <template #title>
          <el-icon>
            <SvgIcon :icon-name="item.meta?.icon as string"></SvgIcon>
          </el-icon>
          <span>{{ item.meta?.title }}</span>
        </template>
        <el-menu-item v-for="item2 in item.children" :key="item2.path" :index="item2.path">
          {{ item2.meta?.title }}
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import router, { routes } from '@/router';

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped>
.side {
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

.side {
  height: calc(100vh - 50px);
  border-right: 1px solid black;
}
</style>
