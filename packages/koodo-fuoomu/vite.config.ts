import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // 增加插件的使用
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'KoodoFuoomu',
      fileName: 'koodo-fuoomu'
    },
    minify: false,
    rollupOptions: {
      external: ['vue']
    }
  }
})
