import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports: [
        {
          clsx: ['default'],
        },
      ],
      dts: true,
    }),
  ],
})