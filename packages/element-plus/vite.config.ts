import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  // 增加插件的使用
  plugins: [vue(), UnoCSS()],
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'KfcElementPlus',
      fileName: 'kfc-element-plus'
    },
    minify: false,
    rollupOptions: {
      external: ['vue']
    }
  }
})
