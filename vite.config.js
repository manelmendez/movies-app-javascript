//solo lo he creado para cambiar el puerto

import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5555,
  },
  preview: {
    port: 5556
  }
})