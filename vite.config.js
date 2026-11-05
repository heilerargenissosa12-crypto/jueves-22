import { defineConfig, transformWithOxc } from 'vite';
import react from '@vitejs/plugin-react';

// Configuración de Vite para procesar JSX directamente dentro de archivos .js (JavaScript puro)
export default defineConfig({
  plugins: [
    {
      name: 'treat-js-files-as-jsx',
      enforce: 'pre',
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null;
        return transformWithOxc(code, id, {
          lang: 'jsx',
          jsx: { runtime: 'automatic' },
        });
      },
    },
    react(),
  ],
  server: {
    port: 3000,
    open: true,
  },
});
