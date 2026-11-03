import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['b14ffd8d-93b4-419a-ad91-7ea05d765d6f-00-oeu6qf82ytjq.reed.replit.dev']
  }
})
