/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
import animations from '@midudev/tailwind-animations'
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'sm': '460px',
			// => @media (min-width: 640px) { ... }

			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
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
		extend: {
			colors: {
				'text': '#F0F0F0',
				'background': '#1F1F23',
				'primary': '#DCAB18',
				'secondary': '#3F3E41',
				'accent': '#A4AB8C'
			},
			boxShadow: {
				"bubble": '2px 2px 4px #151518',
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
			fontFamily: {
				inter: ['Inter Variable'],
			}
		}
	},
	plugins: [animations],
}
