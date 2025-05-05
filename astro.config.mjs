import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: vercel(),
  vite: {
    build: {
      chunkSizeWarningLimit: 1000, // en kilobytes (por ejemplo, 1000 KB = 1 MB)
    },
  },
});