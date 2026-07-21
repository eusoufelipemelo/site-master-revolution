import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // o site é pequeno: um bundle só evita cascata de requisições
    chunkSizeWarningLimit: 700
  }
})
