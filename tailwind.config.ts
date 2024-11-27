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
        white: '#FFFFFF',
        black: '#2B2C34',
        light_gray_1: '#EFF0F3',
        light_gray_2: '#E4E5E9',
        gray: '#C0C0C0',
        dark_gray: '#9A9A9A',
        yellow: '#FFC344',
        yellow_hover: '#FFAE03',
        disabled_border: '#EAEAEC',
        disabled_background: '#F1F2F3',
        disabled_text: '#B0B0B0'
      }
    }
  },
  plugins: []
}
export default config
