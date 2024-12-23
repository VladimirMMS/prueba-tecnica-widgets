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
      entry: './src/main.jsx', // Archivo de entrada principal del widget
      name: 'ReactWidgetB', // Nombre global para UMD
      fileName: 'widgetB', // Nombre del archivo generado
      formats: ['umd', 'cjs'], // Asegúrate de incluir el formato UMD
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
