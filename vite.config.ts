import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/cv-huy/', // Set base path for GitHub Pages deployment
  plugins: [react(), tailwindcss()],
})
