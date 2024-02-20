/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			"dark": "#0f1114",
			"light": "#ebedf0",
		},
		fontSize: {
			h1: '2.986rem',
			xxxl: '2.488rem',
			xxl: '2.07rem',
			xl: '1.728rem',
			l: '1.44rem',
			m: '1.2rem',
			n: '1rem',
			s: '0.833rem'
		},
		margin: {
			xxl: '6rem',
			xxl: '5rem',
			xl: '4rem',
			l: '3rem',
			m: '2rem',
			s: '1rem',
			xs: '0.5rem'
		},
		padding: {
			xxl: '15rem',
			xl: '1.25rem',
			l: '1rem',
			m: '0.75rem',
			n: '0.5rem',
			s: '0.25rem'
		},
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif'],
		},
		extend: {}
	},
	plugins: [require("daisyui"), animations],
	daisyui: {
		themes: [
			{
				light: {
					"primary": "#e7b623",
					"secondary": "#bfbec1",
					"accent": "#6c7354",
					"neutral": "#242429",
					"base-100": "#dcdce0",
				},
				dark: {
					"primary": "#dcab18",
					"secondary": "#3f3e41",
					"accent": "#a4ab8c",
					"neutral": "#242429",
					"base-100": "#1f1f23",
				},
			},
		],
	},


}
