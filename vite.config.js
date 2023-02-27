//solo lo he creado para cambiar el puerto

import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5000,
  },
  preview: {
    port: 5001
  }
})