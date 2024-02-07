/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				geist: ['Geist', 'sans-serif'],
			},
			colors: {
				'content-bg': '#F8FAFD',
				'search-bg': '#E9EEF6',
				'icons-color-light': '#444746',
				'file-bg': '#F0F4F9',
				'content-bg-dark': '#071A2B',
				'dashboard-dark': '#031525',
				'search-bg-dark': '#0D2136',
				'icons-color-dark': '#95a5bd',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate'), require('tailwindcss-animated')],
}
