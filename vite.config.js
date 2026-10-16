import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Relativa tillgångar gör publicering under projektnamn lättare.
export default defineConfig({
  plugins: [react()],
  base: './',
});
