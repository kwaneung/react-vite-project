import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@constants' : '/src/constants',
      '@context' : '/src/context',
      '@hooks' : '/src/hooks',
      '@pages': '/src/pages',
      '@routes' : '/src/routes',
      '@services' : '/src/services',
      '@styles': '/src/styles',
      '@utils' : '/src/utils',
    },
  },
})
