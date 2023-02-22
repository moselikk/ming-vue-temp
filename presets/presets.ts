import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
import VueI18n from '@intlify/vite-plugin-vue-i18n';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers';
import { ConfigEnv } from 'vite';
import { resolve } from 'path';
import path from 'path';

const defaultClasses = 'prose prose-sm m-auto text-left';

export default (env: ConfigEnv) => {
  return [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
    svgLoader(),
    AutoImport({
      dts: './src/auto-imports.d.ts',
      imports: ['vue', 'pinia', 'vue-router', 'vue-i18n', '@vueuse/core'],
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
    }),
    Components({
      dts: './src/components.d.ts',
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/],
      dirs: ['src/components/'],
      resolvers: [ElementPlusResolver(), IconsResolver(), VueUseComponentsResolver()],
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
    VueI18n({
      include: [resolve(__dirname, '../locales/**')],
    }),
  ];
};
