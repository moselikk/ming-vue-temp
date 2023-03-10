<template>
  <div class="text-center">
    <!-- <el-tooltip :content="t('home')" placement="bottom">
      <router-link to="/" class="icon-btn">
        <i-mdi-home-search-outline class="icon-footer" />
      </router-link>
    </el-tooltip> -->

    <!-- <el-tooltip :content="isDark ? t('change light') : t('change dark')" placement="bottom">
      <button class="icon-btn btn" @click="toggleDark()">
        <i-ph-cloud-moon-bold v-if="isDark" class="icon-footer" />
        <i-ph-sun-horizon-bold v-else class="icon-footer" />
      </button>
    </el-tooltip> -->

    <el-tooltip :content="t('change lang')" placement="bottom">
      <button class="icon-btn btn" @click="toggleLocales()">
        <i-la-language class="icon-footer" />
      </button>
    </el-tooltip>

    <el-tooltip :content="t('management')" placement="bottom">
      <router-link to="/management" class="icon-btn">
        <i-ri-article-line class="icon-footer" />
      </router-link>
    </el-tooltip>

    <el-tooltip :content="t('template process')" placement="bottom">
      <a href="https://moselikk.com" target="_blank" class="icon-btn">
        <i-mdi-content-duplicate class="icon-footer" />
      </a>
    </el-tooltip>

    <el-tooltip content="GitHub" placement="bottom">
      <a href="https://github.com/moselikk" target="_blank" class="icon-btn">
        <i-akar-icons-github-fill class="icon-footer" />
      </a>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { isDark, toggleDark } from '@/utils/dark';

const { t, availableLocales, locale } = useI18n();
const toggleLocales = () => {
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
};
</script>

<style lang="scss">
.icon-footer {
  font-size: 1.3em;
}
.btn {
  outline: 2px solid transparent !important;
  outline-offset: 2px !important;
  font-size: 1em;
  padding: 0;
}
.icon-btn {
  display: inline-block;
  // height: 30px;
  color: black;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  background-color: rgba($color: #000000, $alpha: 0);
  border: 0;
  cursor: pointer;
}
.dark {
  .icon-btn {
    color: rgba(229, 231, 235, 1);
  }
}
a {
}
</style>
