<template>
  <div class="hitokoto">
    <el-icon style="margin-right: 10px">
      <SvgIcon icon-name="hitokoto"></SvgIcon>
    </el-icon>
    <p>{{ hitokoto }}</p>
  </div>
</template>

<script setup lang="ts">
import hitokotoApi from '@/api/modules/hitokoto';

const hitokoto = ref('');

const getHitokoto = () => {
  hitokotoApi({ c: 'f' }).then((res) => {
    hitokoto.value = res.hitokoto;
  });
};

onMounted(() => {
  getHitokoto();
});
</script>

<style scoped>
.hitokoto {
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  /* width: 200px; */
  height: 50px;
  white-space: nowrap;
}
p {
  margin: 0;
  display: inline-block;
}
</style>
