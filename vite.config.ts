import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // No `base` needed here: this is a <username>.github.io repo, which
  // GitHub Pages serves from the domain root, not a subpath.
});
