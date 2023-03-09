<template>
  <div ref="headerRef" class="header">
    <div class="logo">MING-VUE-TEMP</div>
    <Hitokoto></Hitokoto>
    <div class="topMenu">
      <TheFooter></TheFooter>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  --side-bar-color: rgb(255, 255, 255);
  --font-color: rgb(29, 33, 41);
}
.header {
  border-bottom: 1px solid black;
  height: 50px;
  position: relative;
  box-sizing: border-box;
}
.logo {
  width: 200px;
  color: var(--font-color);
  position: absolute;
  left: 0;
  height: 100%;
  text-align: center;
  padding-top: 15px;
}
.topMenu {
  position: absolute;
  right: 0;
  height: 100%;
  display: flex;
  /* flex-direction: row-reverse; */
  align-items: center;
}
</style>
