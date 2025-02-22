import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/e-plantShopping",  // Keep your base path if needed
  plugins: [react()],
  server: {
    mimeTypes: {
      'text/jsx': 'application/javascript',
    },
  },
  esbuild: {
    loader: 'jsx',
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    },
    extensions: ['.js', '.jsx'],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});
