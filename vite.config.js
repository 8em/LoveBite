// vite.config.js
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/LoveBite/',
  plugins: [Vue()],
  resolve: {
    alias: {
      base: '',
    },
  },
})
