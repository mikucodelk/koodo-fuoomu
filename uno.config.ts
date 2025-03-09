// uno.config.ts
import { defineConfig, presetWind3 } from 'unocss'
import presetIcons from '@unocss/preset-icons'
export default defineConfig({
  presets: [
    presetIcons(),
    presetWind3()
    // ...自定义 presets
  ]
})
