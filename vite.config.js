//solo lo he creado para cambiar el puerto

import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5000,
  },
  preview: {
    host: true,
    port: 5001,
    hmr: {
      host: 'localhost',
      protocol: 'wss',
      clientPort: 443
    }
  }
})