// uno.config.ts
import { defineConfig, presetWind3 } from 'unocss'
import presetIcons from '@unocss/preset-icons'
export default defineConfig({
  presets: [
    presetIcons(),
    presetWind3()
    // ...自定义 presets
  ],
  shortcuts: {
    ghost: 'box-border w-full h-2px bg-#000 overflow-hidden !border-none !py-0 my-1px'
  }
})
