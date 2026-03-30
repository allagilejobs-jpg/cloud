import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: Change this to match your GitHub Pages path
// Your site: https://allagilejobs-jpg.github.io/cloud/azure/
export default defineConfig({
  plugins: [react()],
  base: '/cloud/azure/',
})
