import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@material-tailwind/react']
  },
  server: {
    hmr: {
      timeout: 30000, // Increase timeout to 30 seconds
    },
  },
})
