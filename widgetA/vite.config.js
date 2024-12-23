import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'process';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  optimizeDeps: {
    include: ['process']
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: './src/main.jsx', // Archivo de entrada
      name: 'ReactWidget', // Nombre de la librería
      fileName: 'react-widget', // Nombre del archivo de salida
      formats: ['umd', 'cjs'], // Generar tanto en formato "umd" como "cjs"
    },
    rollupOptions: {
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
