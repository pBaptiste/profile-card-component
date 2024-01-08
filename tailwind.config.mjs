/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'top': "url('/src/images/bg-pattern-top.svg')",
				'bottom': "url('/src/images/bg-pattern-bottom.svg')",
				'card': "url('/src/images/bg-pattern-card.svg')",
				'body' : "url('/src/images/bg-pattern-top.svg') top left no-repeat, url('/src/images/bg-pattern-bottom.svg') bottom right no-repeat"
			},
			boxShadow: {
				'card': '0px 50px 100px -20px rgba(8, 70, 94, 0.50)',
			},
			colors: {
				'primary' : '#2E3349',
				'secondary': '#6B7082',
			},
		},
	},
	plugins: [],
}
