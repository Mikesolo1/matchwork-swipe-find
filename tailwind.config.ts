
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Современная корпоративная палитра
				brand: {
					primary: '#E91E63',
					'primary-light': '#F8BBD9',
					'primary-dark': '#AD1457',
					secondary: '#673AB7',
					'secondary-light': '#D1C4E9',
					accent: '#FF6B6B',
					neutral: {
						50: '#FAFAFA',
						100: '#F5F5F5',
						200: '#EEEEEE',
						300: '#E0E0E0',
						400: '#BDBDBD',
						500: '#9E9E9E',
						600: '#757575',
						700: '#616161',
						800: '#424242',
						900: '#212121'
					},
					glass: 'rgba(255, 255, 255, 0.1)',
					glassDark: 'rgba(0, 0, 0, 0.1)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'4xl': '2rem'
			},
			backdropBlur: {
				xs: '2px',
			},
			boxShadow: {
				'neumorphism': '20px 20px 40px #d1d9e6, -20px -20px 40px #ffffff',
				'neumorphism-inset': 'inset 20px 20px 40px #d1d9e6, inset -20px -20px 40px #ffffff',
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
				'elegant': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
				'hover-lift': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(40px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-40px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(40px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'gradient-shift': {
					'0%, 100%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(233, 30, 99, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(233, 30, 99, 0.6)'
					}
				},
				'morphing': {
					'0%': {
						borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
					},
					'25%': {
						borderRadius: '58% 42% 75% 25% / 76% 46% 54% 24%'
					},
					'50%': {
						borderRadius: '50% 50% 33% 67% / 55% 27% 73% 45%'
					},
					'75%': {
						borderRadius: '33% 67% 58% 42% / 63% 68% 32% 37%'
					},
					'100%': {
						borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'fade-in-down': 'fade-in-down 0.8s ease-out',
				'scale-in': 'scale-in 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.8s ease-out',
				'gradient-shift': 'gradient-shift 6s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
				'morphing': 'morphing 8s ease-in-out infinite',
				'shimmer': 'shimmer 2.5s linear infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
				'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
			},
			fontFamily: {
				'display': ['Inter', 'system-ui', 'sans-serif'],
				'body': ['Inter', 'system-ui', 'sans-serif'],
				'mono': ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace']
			},
			fontSize: {
				'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'display-xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
				'display-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
