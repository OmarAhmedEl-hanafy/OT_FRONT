// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// import { visualizer } from 'rollup-plugin-visualizer';


// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), [visualizer()]],
//   base: '/OT_FRONT',
//   optimizeDeps: {
//     include: ['@material-tailwind/react']
//   },
//   server: {
//     hmr: {
//       timeout: 10000, // Increase timeout to 30 seconds
//     },
//     port: 3000,
//   },
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/OT_FRONT/',  // Must match your repository name exactly
  build: {
    outDir: 'dist',
    emptyOutDir: true  // Ensure the dist folder is cleaned before build
  }
})