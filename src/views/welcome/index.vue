<template>
  <div class="home text-center">
    <div>
      <div><moselikk class="hompage-logo"></moselikk></div>
    </div>
    <div>
      <h1 class="title">{{ t('hello') }} , {{ t('welcome to use') }}{{ t('initial template') }}</h1>
    </div>
  </div>
  <TheFooter></TheFooter>
</template>

<script setup lang="ts">
import moselikk from '@/assets/svg/moselikk.svg?component';

const { t } = useI18n();

onMounted(() => {
  console.log('Running');
});
</script>

<style lang="scss" scoped>
.home {
  margin-top: 230px;
  .hompage-logo {
    width: 140px;
  }
  .title {
    margin: 70px 0;
    height: 32px;
    font-size: 32px;
  }
}
</style>
