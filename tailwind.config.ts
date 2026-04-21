import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        gold: '#C9A84C',
        'gold-light': '#E8C96A',
        'gold-dim': '#8B6914',
        'black-card': '#141414',
        'black-border': '#1E1E1E',
        'grey-dark': '#2A2A2A',
        'grey-mid': '#555555',
        'grey-light': '#888888',
        'grey-muted': '#AAAAAA',
      },
    },
  },
  plugins: [],
}

export default config
