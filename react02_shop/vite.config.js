import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },

      includeAssets: ['vite.svg', 'img/main-bg.JPG', 'img/product01.png', 'assets/main-bg.JPG', 'assets/product0.png', 'assets/product1.png', 'assets/product2.png', 'assets/react.svg'],
      manifest: {
        name: 'KCT전자상가',
        short_name: 'KCT전자상가',
        description: '설명',
        theme_color: '#000000',
        display: 'standalone',
        icons: [
          {
            src: 'logo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
    })
  ],
})
