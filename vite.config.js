import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/cyborg-themed-landing-page/',
  plugins: [react()],
})