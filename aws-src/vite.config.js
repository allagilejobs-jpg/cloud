import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Matches: https://allagilejobs-jpg.github.io/cloud/aws/
  base: '/cloud/aws/',
})
