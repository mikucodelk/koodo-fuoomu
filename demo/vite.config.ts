import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { join } from 'node:path'

export default defineConfig({
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: [
      {
        find: /^@koodo-fuoomu\/(.+)$/,
        replacement: join(__dirname, '..', 'packages', '$1', 'src', 'main.ts')
      }
    ]
  }
})
