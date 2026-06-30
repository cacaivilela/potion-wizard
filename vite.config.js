import { defineConfig } from 'vite'

export default defineConfig({
  // caminho base no GitHub Pages: https://<usuario>.github.io/potion-wizard/
  base: '/potion-wizard/',
  server: {
    port: 3006,
    open: true
  }
})
