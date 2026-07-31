import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFile, mkdir } from 'node:fs/promises';

const sitesOutput = () => ({
  name: 'sites-output',
  async closeBundle() {
    await mkdir(new URL('./dist/server/', import.meta.url), { recursive: true });
    await copyFile(
      new URL('./worker/index.js', import.meta.url),
      new URL('./dist/server/index.js', import.meta.url),
    );
  },
});

export default defineConfig({
  plugins: [react(), sitesOutput()],
  build: {
    outDir: 'dist/client',
    emptyOutDir: true,
  },
});
