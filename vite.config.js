import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";


// https://vite.dev/config/
export default defineConfig({
      base: '/~bagu0001/JRS200/polis-app/',


  plugins: [react(), tailwindcss()],
})
