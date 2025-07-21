import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),[visualizer()]],
  optimizeDeps: {
    include: ['@material-tailwind/react']
  },
  server: {
    hmr: {
      timeout: 10000, // Increase timeout to 30 seconds
    },
    port: 3000,
  },
})
