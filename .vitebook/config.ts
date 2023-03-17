import { clientPlugin, defineConfig } from '@vitebook/client/node';
import { vueMarkdownPlugin } from '@vitebook/markdown-vue/node';
import { vuePlugin } from '@vitebook/vue/node';
import { defaultThemePlugin, DefaultThemeConfig } from '@vitebook/theme-default/node';

export default defineConfig<DefaultThemeConfig>({
  outDir: '../docs',
  include: ['src/**/*.md', 'src/**/*.story.vue'],
  plugins: [
    vueMarkdownPlugin(),
    vuePlugin({ appFile: 'App.vue' }),
    clientPlugin(),
    defaultThemePlugin(),
  ],
  site: {
    title: 'Db Ui Test',
    description: '',
    baseUrl: '/db-ui-test/',
    theme: {
      darkMode: {
        enabled: false,
      }
    },
  },
});
