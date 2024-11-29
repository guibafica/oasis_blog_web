import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      merriweather: ['"Merriweather"', 'sans-serif'],
      workSans: ['"Work Sans"', 'sans-serif']
    },
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
        disabled_text: 'rgba(var(--disabled_text))',

        date_gray: 'rgba(var(--date_gray))',
        darker_gray: 'rgba(var(--darker_gray))',
        darkest_gray: 'rgba(var(--darkest_gray))',
        quote_bg_gray: 'rgba(var(--quote_bg_gray))',
        quote_border_gray: 'rgba(var(--quote_border_gray))',
        contact_gray: 'rgba(var(--contact_gray))'
      }
    }
  },
  plugins: []
}
export default config
