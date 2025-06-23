import { defineConfig } from 'vite';
import { mjmlPlugin } from '@edde746/vite-plugin-mjml';

export default defineConfig({
  plugins: [mjmlPlugin()]
});