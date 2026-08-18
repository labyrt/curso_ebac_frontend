import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base:
    process.env.GITHUB_PAGES === 'true'
      ? process.env.GITHUB_PAGES_BASE || '/curso_ebac_frontend/'
      : '/'
})
