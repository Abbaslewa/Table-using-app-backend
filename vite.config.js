import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcssVite from '@tailwindcss/vite' // Ensure correct import

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),         // React plugin
    tailwindcssVite() // TailwindCSS plugin
  ],
})