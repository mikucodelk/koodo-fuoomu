import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // 增加插件的使用
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'KfcFormDesigner',
      fileName: 'kfc-form-designer'
    },
    minify: false,
    rollupOptions: {
      external: ['vue']
    }
  }
})
