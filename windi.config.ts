import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: [
      'index.html',
      'src/**/*.{vue,jsx,tsx,ts,js,html}'
    ],
    exclude: ['node_modules', '.git'],
  },
})

