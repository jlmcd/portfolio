import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:4000',
    },
    middlewareMode: false,
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        console.log('🛑 Vite saw request:', req.url);
        try {
          decodeURI(req.url); // manually trip if it's broken
        } catch (e) {
          console.error('🚨 Malformed URI:', req.url);
        }
        next();
      });
    },
  },
});