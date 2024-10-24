import * as path from 'path';
import { defineConfig } from 'rspress/config';
import { pluginPlayground } from '@rspress/plugin-playground';


export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Rspress',
  description: 'Rspack-based Static Site Generator',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  // plugins: [pluginPlayground()],
  builderConfig:{
    output: {
      externals: [/\/image\/font/g],
    },
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  },
});
