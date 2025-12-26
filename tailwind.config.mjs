/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
	  extend: {
		colors: {
		  rose: {
			50: '#fff1f2',
			100: '#ffe4e6',
			200: '#fecdd3',
			300: '#fda4af',
			400: '#fb7185',
			500: '#f43f5e',
			600: '#e11d48',
			700: '#be123c',
			800: '#9f1239',
			900: '#881337',
		  },
		},
		animation: {
		  'float': 'float 6s ease-in-out infinite',
		  'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
		  'slide-in-right': 'slideInRight 0.6s ease-out',
		},
		keyframes: {
		  float: {
			'0%, 100%': { transform: 'translateY(0px)' },
			'50%': { transform: 'translateY(-20px)' },
		  },
		  fadeInUp: {
			'from': {
			  opacity: '0',
			  transform: 'translateY(30px)',
			},
			'to': {
			  opacity: '1',
			  transform: 'translateY(0)',
			},
		  },
		  slideInRight: {
			'from': {
			  opacity: '0',
			  transform: 'translateX(50px)',
			},
			'to': {
			  opacity: '1',
			  transform: 'translateX(0)',
			},
		  },
		},
		backdropBlur: {
		  xs: '2px',
		},
	  },
	},
	plugins: [],
  }