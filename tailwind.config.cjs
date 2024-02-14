/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			"dark": "#0f1114",
			"light": "#ebedf0",
		},
		fontSize: {
			xlarge: '2rem',
			large: '1.7rem',
			medium: '1.2rem',
			small: '1rem'
		},
		margin: {
			msection: '6rem',
			mxlarge: '5rem',
			mlarge: '2.5rem',
			msmall: '1.25rem'
		},
		fontFamily: {
			oswald: ['Oswald', 'sans-serif'],
			belleza: ['Belleza', 'sans-serif']
		},
		extend: {}
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					"primary": "#39414c",
					"secondary": "#a2a3b9",
					"accent": "#615e7d",
					"neutral": "#21252c",
					"base-100": "#ebedf0",
				},
				dark: {
					"primary": "#b3bbc6",
					"secondary": "#46475d",
					"accent": "#8582a1",
					"neutral": "#21252c",
					"base-100": "#0f1114",
				},
			},
			// 'light',
			// "dark"
		],
	},


}
