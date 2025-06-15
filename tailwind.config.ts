
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
        // --- Updated Five Elements Brand Colors ---
        'ink-black': '#1C1C1C', // Modern deep neutral for panels
        'silk-crimson': {
          50: '#fef2f4',
          100: '#fddee2',
          200: '#fbbbc7',
          300: '#f48798',
          400: '#dc143c',        // Brand Deep Red (primary)
          500: '#c0112e',
          600: '#900a22',
          700: '#750717',
          800: '#47040d',
          900: '#220103',
          DEFAULT: '#dc143c',    // fallback to primary brand red
        },
        'pearl-white': '#F8F8FF',   // Near-white/cream for contrast headline text
        'imperial-gold': {
          50: '#faf6e6',
          100: '#f3e8c2',
          200: '#f5df9f',
          300: '#f5d973',
          400: '#f7d54f',
          500: '#d4af37',        // Brand Gold
          600: '#b4952b',
          700: '#86691f',
          800: '#504218',
          900: '#1f1608',
          DEFAULT: '#d4af37'
        },
        'jade-flow': {
          50: '#e6fcf2',
          100: '#b5f4db',
          200: '#7ce8c0',
          300: '#4adea1',
          400: '#1ccd7d',
          500: '#00a86b',       // Jade for subtle success/CTA
          600: '#008352',
          700: '#00663f',
          800: '#003b22',
          900: '#002416',
          DEFAULT: '#00a86b'
        },
        // --- Rest of palette (keep the same) ---
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
      },
      // --- Custom backgrounds & gradients reflecting the new palette ---
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-flow': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
        // Deep red background with subtle gold shimmer for panels
        'red-glow-panel': 'linear-gradient(120deg, #1C1C1C 0%, #dc143c 80%, #d4af37 100%)',
        'deep-crimson-brown': 'linear-gradient(135deg, #1C1C1C 70%, #dc143c 100%)'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        serif: ['Harnet Serif', 'serif'],
        sans: ['Inter', 'sans-serif'],
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
          '100%': { transform: 'scaleX(1)' }
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
        },
        'cta-glow': {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow: '0 8px 15px rgba(220, 20, 60, 0.2), 0 0 5px rgba(212, 175, 55, 0.3)',
          },
          '50%': {
            transform: 'scale(1.02)',
            boxShadow: '0 12px 25px rgba(220, 20, 60, 0.3), 0 0 15px rgba(212, 175, 55, 0.5)',
          },
        },
        'premium-scroll': {
          '0%': { 
            transform: 'translateX(0)' 
          },
          '100%': { 
            transform: 'translateX(-33.333%)' 
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
        'converge-in': 'converge-in 2s ease-in-out infinite',
        'cta-glow': 'cta-glow 3s ease-in-out infinite',
        'premium-scroll': 'premium-scroll 45s linear infinite'
      },
      scale: {
        '101': '1.01',
        '102': '1.02'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

