/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ["app/**/*.test.{js,ts,jsx,tsx}"],
    coverage: {
        reporter: ['text', 'json', 'html'],
      },
  },
  resolve: {
    alias: {
      '@': __dirname + '/app',
      '~': path.resolve(__dirname, './src')
    },
  },
})