import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    mimeTypes: {
      'text/jsx': 'application/javascript'
    }
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
})
