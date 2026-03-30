import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Change 'aws-mastery-plan' to your actual GitHub repo name
  base: '/aws-mastery-plan/',
})
