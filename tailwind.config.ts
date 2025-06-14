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
				'ink-black': '#0a0a0a',
				'jade-flow': {
					50: '#ecfdf5',
					100: '#d1fae5',
					200: '#a7f3d0',
					300: '#6ee7b7',
					400: '#34d399',
					500: '#10b981',
					600: '#059669',
					700: '#047857',
					800: '#065f46',
					900: '#064e3b',
					DEFAULT: '#10b981'
				},
				'imperial-gold': {
					50: '#fffbeb',
					100: '#fef3c7',
					200: '#fde68a',
					300: '#fcd34d',
					400: '#fbbf24',
					500: '#f59e0b',
					600: '#d97706',
					700: '#b45309',
					800: '#92400e',
					900: '#78350f',
					DEFAULT: '#f59e0b'
				},
				'silk-crimson': {
					50: '#fef2f2',
					100: '#fee2e2',
					200: '#fecaca',
					300: '#fca5a5',
					400: '#f87171',
					500: '#ef4444',
					600: '#dc2626',
					700: '#b91c1c',
					800: '#991b1b',
					900: '#7f1d1d',
					DEFAULT: '#ef4444'
				},
				'pearl-white': '#fefefe'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'count-up': {
					'0%': {
						transform: 'scale(0.9)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.05)'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(16, 185, 129, 0.8)'
					}
				},
				'underline-reveal': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
				'narrative-glow': {
					'0%, 100%': {
						textShadow: '0 0 10px rgba(16, 185, 129, 0.3)',
						transform: 'scale(1)'
					},
					'50%': {
						textShadow: '0 0 30px rgba(16, 185, 129, 0.6)',
						transform: 'scale(1.02)'
					}
				},
				'transition-reveal': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px) scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'gentle-bounce': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-4px)' }
				},
				'reveal-text': {
					'0%': { 
						opacity: '0', 
						transform: 'translateY(20px) scale(0.9)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateY(0) scale(1)' 
					}
				},
				'tension-pulse': {
					'0%, 100%': { 
						transform: 'scale(1)',
						filter: 'brightness(1)'
					},
					'50%': { 
						transform: 'scale(1.01)',
						filter: 'brightness(1.1)'
					}
				},
				'gentle-float': {
					'0%, 100%': { 
						transform: 'translateY(0px) translateX(0px)',
						opacity: '0.3'
					},
					'33%': { 
						transform: 'translateY(-8px) translateX(4px)',
						opacity: '0.6'
					},
					'66%': { 
						transform: 'translateY(-4px) translateX(-4px)',
						opacity: '0.4'
					}
				},
				'pulse-erratic': {
					'0%, 100%': { 
						opacity: '0.2',
						transform: 'scale(1)'
					},
					'25%': { 
						opacity: '0.6',
						transform: 'scale(1.1)'
					},
					'50%': { 
						opacity: '0.1',
						transform: 'scale(0.9)'
					},
					'75%': { 
						opacity: '0.8',
						transform: 'scale(1.2)'
					}
				},
				'burst-out': {
					'0%': { 
						transform: 'scale(0) translate(0, 0)',
						opacity: '0'
					},
					'50%': { 
						transform: 'scale(1.5) translate(20px, -20px)',
						opacity: '0.8'
					},
					'100%': { 
						transform: 'scale(1) translate(40px, -40px)',
						opacity: '0.2'
					}
				},
				'converge-in': {
					'0%': { 
						transform: 'translate(100px, 100px)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translate(0, 0)',
						opacity: '0.6'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'slide-in-left': 'slide-in-left 0.8s ease-out',
				'slide-in-right': 'slide-in-right 0.8s ease-out',
				'count-up': 'count-up 1.2s ease-out',
				'shimmer': 'shimmer 2s infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'underline-reveal': 'underline-reveal 0.8s cubic-bezier(0.65, 0, 0.35, 1) forwards',
				'narrative-glow': 'narrative-glow 3s ease-in-out infinite',
				'transition-reveal': 'transition-reveal 1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'gentle-bounce': 'gentle-bounce 2s ease-in-out infinite',
				'reveal-text': 'reveal-text 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'tension-pulse': 'tension-pulse 3s ease-in-out infinite',
				'gentle-float': 'gentle-float 4s ease-in-out infinite',
				'pulse-erratic': 'pulse-erratic 2s ease-in-out infinite',
				'burst-out': 'burst-out 3s ease-out infinite',
				'converge-in': 'converge-in 2s ease-in-out infinite'
			},
			scale: {
				'101': '1.01',
				'102': '1.02'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-flow': 'linear-gradient(135deg, var(--tw-gradient-stops))',
				'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
