import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        white: 'rgba(var(--white))',
        black: 'rgba(var(--black))',
        light_gray_1: 'rgba(var(--light_gray_1))',
        light_gray_2: 'rgba(var(--light_gray_2))',
        gray: 'rgba(var(--gray))',
        dark_gray: 'rgba(var(--dark_gray))',
        yellow: 'rgba(var(--yellow))',
        yellow_hover: 'rgba(var(--yellow_hover))',
        disabled_border: 'rgba(var(--disabled_border))',
        disabled_background: 'rgba(var(--disabled_background))',
        disabled_text: 'rgba(var(--disabled_text))'
      }
    }
  },
  plugins: []
}
export default config
