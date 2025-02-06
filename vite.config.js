
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from "vite-plugin-sitemap"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), 
    sitemap({
      hostname: "https://tolcelearninghub.netlify.app/",
      urls: [
        {url: "/", changefreq: "daily", priority: 1.0},
        {url: "/about", changefreq: "weekly", priority: 0.8},
        {url: "/services", changefreq: "weekly", priority: 0.8},
        {url: "/outreaches", changefreq: "weekly", priority: 0.8},
        {url: "/skillacquisition", changefreq: "weekly", priority: 0.8},
        {url: "/contact", changefreq: "monthly", priority: 0.6},
      ]
    })
  ],
})
