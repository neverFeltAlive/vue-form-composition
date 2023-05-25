import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import { join, resolve } from 'path';

const rootDir = resolve(__dirname, 'src');

export default defineConfig(() => {
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@components': join(rootDir, 'components'),
        '@utils': join(rootDir, 'utils'),
        '@assets': join(rootDir, 'assets'),
      },
    },
  };
});
