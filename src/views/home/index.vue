<template>
  <div class="home text-center">
    <div>
      <div><moselikk class="hompage-logo"></moselikk></div>
    </div>
    <div>
      <h1 class="title">{{ t('hello') }} , {{ t('welcome to use') }}{{ t('initial template') }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import moselikk from '@/assets/svg/moselikk.svg?component';
import iconHitokotoMessage from '@/assets/svg/icon-hitokoto-message.svg?component';
import hitokotoApi from '@/api/modules/hitokoto';

const { t } = useI18n();

const hitokoto = ref<string>('welcome');
const getHitokoto = () => {
  hitokotoApi({ c: 'f' })
    .then((res) => {
      hitokoto.value = res.hitokoto;
    })
    .finally(() => {
      ElMessage({
        dangerouslyUseHTMLString: true,
        icon: iconHitokotoMessage,
        message: `<p>${hitokoto.value}</p>`,
        showClose: true,
        duration: 8000,
      });
    });
};

const initPage = () => {
  getHitokoto();
};

onMounted(() => {
  console.log('Running');
  initPage();
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
