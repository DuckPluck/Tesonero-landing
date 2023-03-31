import react from '@vitejs/plugin-react'
import legacy from "@vitejs/plugin-legacy";
import "@babel/polyfill";
import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  base: '/Tesonero-landing/',
  plugins: [
      react(),
      legacy({
          // for ie11
          targets: ["ie >= 11"],
          additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
          polyfills: ["es.array.iterator"],
      }),
  ],
})
