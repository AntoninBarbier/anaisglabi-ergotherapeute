import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		colors: {
			primary: '#B42A64',
		},
		extend: {
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
