<template>
  <DynamicSvgIcon />
</template>

<script setup lang="ts">
// import { computed } from 'vue';

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  iconName: {
    type: String,
    required: false,
  },
  color: {
    type: String,
  },
  size: {
    type: String,
    default: '1em',
  },
});

const DynamicSvgIcon = defineAsyncComponent(() => import(`@/assets/svg/${props.iconName}.svg?component`));
</script>

<style scoped>
.svg-icon {
  vertical-align: -0.15em;
  overflow: hidden;
  fill: currentColor;
}
</style>
