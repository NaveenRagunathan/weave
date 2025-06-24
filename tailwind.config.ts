import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
      fontFamily: {
        serif: ['"Harnet Serif"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // --- New Blue/White Brand Colors ---
        'ink-black': '#1C1C1C',
        'off-white': '#f7faff',
        'brand-blue': {
          DEFAULT: "#002DFF",
          "50": "#e5e9ff",
          "100": "#b8c3ff",
          "200": "#8a9eff",
          "300": "#5c78ff",
          "400": "#2e52ff",
          "500": "#002dff",
          "600": "#0027d6",
          "700": "#0021ad",
          "800": "#001b85",
          "900": "#00155c",
          "950": "#000e33"
        },
        'cool-gray': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          DEFAULT: '#6b7280'
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
        // New blue gradients
        'blue-glow-panel': 'linear-gradient(120deg, #111827 0%, #0021ad 80%, #5c78ff 100%)',
        'deep-blue-panel': 'linear-gradient(135deg, #1f2937 70%, #001b85 100%)'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        // Premium shadow definitions
        'premium-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'premium-xl': '0 35px 60px -12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.4), 0 8px 32px rgba(59, 130, 246, 0.2)',
        'glass': 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 32px rgba(0, 0, 0, 0.1)',
        'depth-3d': '0 4px 8px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
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
        'wave': {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(100%)'
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
            boxShadow: '0 8px 15px rgba(59, 130, 246, 0.2), 0 0 5px rgba(147, 197, 253, 0.3)',
          },
          '50%': {
            transform: 'scale(1.02)',
            boxShadow: '0 12px 25px rgba(59, 130, 246, 0.3), 0 0 15px rgba(147, 197, 253, 0.5)',
          },
        },
        'premium-scroll': {
          '0%': { 
            transform: 'translateX(0)' 
          },
          '100%': { 
            transform: 'translateX(-33.333%)' 
          }
        },
        // New premium animations
        'magnetic-hover': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))' }
        },
        'ripple': {
          '0%': { 
            transform: 'scale(0)',
            opacity: '0.6'
          },
          '100%': { 
            transform: 'scale(4)',
            opacity: '0'
          }
        },
        'number-morph': {
          '0%': { 
            transform: 'translateY(100%) scale(0.8)',
            opacity: '0'
          },
          '50%': { 
            transform: 'translateY(-10%) scale(1.1)'
          },
          '100%': { 
            transform: 'translateY(0%) scale(1)',
            opacity: '1'
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
        'wave': 'wave 2s linear infinite',
        'tension-pulse': 'tension-pulse 3s ease-in-out infinite',
        'gentle-float': 'gentle-float 4s ease-in-out infinite',
        'pulse-erratic': 'pulse-erratic 2s ease-in-out infinite',
        'burst-out': 'burst-out 3s ease-out infinite',
        'converge-in': 'converge-in 2s ease-in-out infinite',
        'cta-glow': 'cta-glow 3s ease-in-out infinite',
        'premium-scroll': 'premium-scroll 45s linear infinite',
        // New premium animations
        'magnetic-hover': 'magnetic-hover 0.3s ease-out',
        'ripple': 'ripple 0.6s ease-out',
        'number-morph': 'number-morph 0.3s ease-out'
      },
      scale: {
        '101': '1.01',
        '102': '1.02'
      }
    }
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
