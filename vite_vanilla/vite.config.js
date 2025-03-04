import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import pretty from 'pretty';
// import { readFileSync, writeFileSync } from 'fs';


export default defineConfig({
    plugins: [
        ViteEjsPlugin({
            data: {
                title: 'VITE VANILLA'
            }
        })
    ],
  })