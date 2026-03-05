import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']], // your Babel plugin
      },
    }),
    tailwindcss(),
  ],
  base: '/My-Link-Tree/', // ✅ Put base here, at the root of defineConfig
})