import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Home',
  outputPath: 'docs-dist',
  mode: 'doc',
  base: `/`,
  publicPath: `/`,
  navs: [null],
  // more config: https://d.umijs.org/config
});
