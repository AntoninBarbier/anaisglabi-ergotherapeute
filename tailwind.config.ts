import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				primary: '#B42A64',
				secondary: '#D84D4D',
				green: '#6AAE9E',
				yellow: '#FFF5E5',
			},
			screens: {
				'3xl': '1600px',
			},
			fontFamily: {
				serif: ['var(--font-source-serif-4)'],
				sans: ['var(--font-source-sans-3)'],
			},
		},
	},
	plugins: [],
}
export default config
