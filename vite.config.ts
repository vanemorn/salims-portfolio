import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/MyPortfolio/',  // Adjust base URL if necessary
  build: {
    outDir: 'public',  // Output to public folder
  },
})


