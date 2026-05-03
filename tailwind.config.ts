import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy:          '#0D2335',
        'navy-dark':   '#091a27',
        teal:          '#4A857A',
        'teal-dark':   '#3a6b61',
        carbon:        '#2D3748',
        ice:           '#F4F7F6',
        gold:          '#B89B72',
        'gold-light':  '#d4b98a',
      },
      fontFamily: {
        sans:    ['DM Sans', 'sans-serif'],
        display: ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
