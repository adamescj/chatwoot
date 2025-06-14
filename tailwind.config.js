const { slateDark } = require('@radix-ui/colors');
import { colors } from './theme/colors';
import { icons } from './theme/icons';
const defaultTheme = require('tailwindcss/defaultTheme');
const {
  iconsPlugin,
  getIconCollections,
} = require('@egoist/tailwindcss-icons');

const defaultSansFonts = [
  '-apple-system',
  'system-ui',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Tahoma',
  'Arial',
  'sans-serif !important',
];

const tailwindConfig = {
  darkMode: 'class',
  content: [
    './enterprise/app/views/**/*.html.erb',
    './app/javascript/widget/**/*.vue',
    './app/javascript/v3/**/*.vue',
    './app/javascript/dashboard/**/*.vue',
    './app/javascript/portal/**/*.vue',
    './app/javascript/shared/**/*.vue',
    './app/javascript/survey/**/*.vue',
    './app/javascript/dashboard/components-next/**/*.vue',
    './app/javascript/dashboard/helper/**/*.js',
    './app/javascript/dashboard/components-next/**/*.js',
    './app/javascript/dashboard/routes/dashboard/**/**/*.js',
    './app/views/**/*.html.erb',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: defaultSansFonts,
        inter: ['Inter', ...defaultSansFonts],
        interDisplay: ['Inter Display', ...defaultSansFonts],
      },

      // Brand-focused border radius system
      borderRadius: {
        ...defaultTheme.borderRadius,
        'brand-sm': '0.5rem',    // 8px
        'brand-md': '0.75rem',   // 12px
        'brand-lg': '1rem',      // 16px
        'brand-xl': '1.5rem',    // 24px
        'brand-2xl': '2rem',     // 32px
        'brand-3xl': '3rem',     // 48px
      },

      // Brand shadow system
      boxShadow: {
        ...defaultTheme.boxShadow,
        'brand-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'brand-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'brand-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'brand-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'brand-purple': '0 0 20px rgba(151, 71, 255, 0.3)',
        'brand-purple-lg': '0 0 40px rgba(151, 71, 255, 0.2)',
        'brand-inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },

      // Brand spacing system
      spacing: {
        ...defaultTheme.spacing,
        'brand-1': '0.25rem',   // 4px
        'brand-2': '0.5rem',    // 8px
        'brand-3': '0.75rem',   // 12px
        'brand-4': '1rem',      // 16px
        'brand-5': '1.25rem',   // 20px
        'brand-6': '1.5rem',    // 24px
        'brand-8': '2rem',      // 32px
        'brand-10': '2.5rem',   // 40px
        'brand-12': '3rem',     // 48px
        'brand-16': '4rem',     // 64px
        'brand-20': '5rem',     // 80px
        'brand-24': '6rem',     // 96px
        'brand-32': '8rem',     // 128px
      },

      // Brand max width system
      maxWidth: {
        ...defaultTheme.maxWidth,
        'brand-xs': '20rem',      // 320px
        'brand-sm': '24rem',      // 384px
        'brand-md': '28rem',      // 448px
        'brand-lg': '32rem',      // 512px
        'brand-xl': '36rem',      // 576px
        'brand-2xl': '42rem',     // 672px
        'brand-3xl': '48rem',     // 768px
        'brand-4xl': '56rem',     // 896px
        'brand-5xl': '64rem',     // 1024px
        'brand-6xl': '72rem',     // 1152px
        'brand-7xl': '80rem',     // 1280px
        'brand-content': '65rem', // Main content width
        'brand-container': '90rem', // Full container width
      },

      typography: {
        bubble: {
          css: {
            color: 'rgb(var(--slate-12))',
            lineHeight: '1.6',
            fontSize: '14px',
            '*': {
              '&:first-child': {
                marginTop: '0',
              },
            },
            overflowWrap: 'anywhere',

            strong: {
              color: 'rgb(var(--slate-12))',
              fontWeight: '700',
            },

            b: {
              color: 'rgb(var(--slate-12))',
              fontWeight: '700',
            },

            h1: {
              color: 'rgb(var(--slate-12))',
              fontWeight: '700',
              fontSize: '1.25rem',
              '&:first-child': {
                marginTop: '0',
              },
            },
            h2: {
              color: 'rgb(var(--slate-12))',
              fontWeight: '700',
              fontSize: '1rem',
              '&:first-child': {
                marginTop: '0',
              },
            },
            h3: {
              color: 'rgb(var(--slate-12))',
              fontWeight: '700',
              fontSize: '1rem',
              '&:first-child': {
                marginTop: '0',
              },
            },
            hr: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            a: {
              color: 'rgb(var(--slate-12))',
              textDecoration: 'underline',
            },
            ul: {
              paddingInlineStart: '0.625em',
            },
            ol: {
              paddingInlineStart: '0.625em',
            },
            'ul li': {
              margin: '0 0 0.5em 1em',
              listStyleType: 'disc',
              '[dir="rtl"] &': {
                margin: '0 1em 0.5em 0',
              },
            },
            'ol li': {
              margin: '0 0 0.5em 1em',
              listStyleType: 'decimal',
              '[dir="rtl"] &': {
                margin: '0 1em 0.5em 0',
              },
            },
            blockquote: {
              color: 'rgb(var(--slate-11))',
              borderLeft: `4px solid rgb(var(--black-alpha-1))`,
              paddingLeft: '1em',
              '[dir="rtl"] &': {
                borderLeft: 'none',
                paddingLeft: '0',
                borderRight: `4px solid rgb(var(--black-alpha-1))`,
                paddingRight: '1em',
              },
              '[dir="ltr"] &': {
                borderRight: 'none',
                paddingRight: '0',
              },
            },
            code: {
              backgroundColor: 'rgb(var(--alpha-3))',
              color: 'rgb(var(--slate-11))',
              padding: '0.2em 0.4em',
              borderRadius: '4px',
              fontSize: '0.95em',
              '&::before': {
                content: `none`,
              },
              '&::after': {
                content: `none`,
              },
            },
            pre: {
              backgroundColor: 'rgb(var(--alpha-3))',
              padding: '1em',
              borderRadius: '6px',
              overflowX: 'auto',
            },
            table: {
              width: '100%',
              borderCollapse: 'collapse',
            },
            th: {
              padding: '0.75em',
              color: 'rgb(var(--slate-12))',
              border: `none`,
              textAlign: 'start',
              fontWeight: '600',
            },
            tr: {
              border: `none`,
            },
            td: {
              padding: '0.75em',
              border: `none`,
            },
            img: {
              maxWidth: '100%',
              height: 'auto',
              marginTop: 'unset',
              marginBottom: 'unset',
            },
          },
        },
      },

      // Brand backdrop blur
      backdropBlur: {
        ...defaultTheme.backdropBlur,
        'brand-sm': '4px',
        'brand-md': '12px',
        'brand-lg': '16px',
        'brand-xl': '24px',
      },
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      ...defaultTheme.fontSize,
      xxs: '0.625rem',
      // Brand typography scale
      'brand-xs': ['0.75rem', { lineHeight: '1rem' }],        // 12px
      'brand-sm': ['0.875rem', { lineHeight: '1.25rem' }],    // 14px
      'brand-base': ['1rem', { lineHeight: '1.5rem' }],       // 16px
      'brand-lg': ['1.125rem', { lineHeight: '1.75rem' }],    // 18px
      'brand-xl': ['1.25rem', { lineHeight: '1.75rem' }],     // 20px
      'brand-2xl': ['1.5rem', { lineHeight: '2rem' }],        // 24px
      'brand-3xl': ['1.875rem', { lineHeight: '2.25rem' }],   // 30px
      'brand-4xl': ['2.25rem', { lineHeight: '2.5rem' }],     // 36px
      'brand-5xl': ['3rem', { lineHeight: '1' }],             // 48px
      'brand-6xl': ['3.75rem', { lineHeight: '1' }],          // 60px
      'brand-7xl': ['4.5rem', { lineHeight: '1' }],           // 72px
      'brand-8xl': ['6rem', { lineHeight: '1' }],             // 96px
      'brand-9xl': ['8rem', { lineHeight: '1' }],             // 128px
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      'modal-backdrop-light': 'rgba(0, 0, 0, 0.4)',
      'modal-backdrop-dark': 'rgba(0, 0, 0, 0.6)',
      current: 'currentColor',
      ...colors,
      body: slateDark.slate7,
    },
    keyframes: {
      ...defaultTheme.keyframes,
      wiggle: {
        '0%': { transform: 'translateX(0)' },
        '15%': { transform: 'translateX(0.375rem)' },
        '30%': { transform: 'translateX(-0.375rem)' },
        '45%': { transform: 'translateX(0.375rem)' },
        '60%': { transform: 'translateX(-0.375rem)' },
        '75%': { transform: 'translateX(0.375rem)' },
        '90%': { transform: 'translateX(-0.375rem)' },
        '100%': { transform: 'translateX(0)' },
      },
      'fade-in-up': {
        '0%': { opacity: 0, transform: 'translateY(0.5rem)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
      'loader-pulse': {
        '0%': { opacity: 0.4 },
        '50%': { opacity: 1 },
        '100%': { opacity: 0.4 },
      },
      'card-select': {
        '0%, 100%': {
          transform: 'translateX(0)',
        },
        '50%': {
          transform: 'translateX(1px)',
        },
      },
      shake: {
        '0%, 100%': { transform: 'translateX(0)' },
        '25%': { transform: 'translateX(0.234375rem)' },
        '50%': { transform: 'translateX(-0.234375rem)' },
        '75%': { transform: 'translateX(0.234375rem)' },
      },
      // Brand animations
      'brand-fade-in': {
        '0%': { opacity: '0', transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      'brand-slide-up': {
        '0%': { transform: 'translateY(100%)' },
        '100%': { transform: 'translateY(0)' },
      },
      'brand-pulse': {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0.5' },
      },
      'brand-bounce': {
        '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
        '50%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
      },
      'brand-float': {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-10px)' },
      },
    },
    animation: {
      ...defaultTheme.animation,
      wiggle: 'wiggle 0.5s ease-in-out',
      'fade-in-up': 'fade-in-up 0.3s ease-out',
      'loader-pulse': 'loader-pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      'card-select': 'card-select 0.25s ease-in-out',
      shake: 'shake 0.3s ease-in-out 0s 2',
      // Brand animations
      'brand-fade-in': 'brand-fade-in 0.5s ease-out',
      'brand-slide-up': 'brand-slide-up 0.3s ease-out',
      'brand-pulse': 'brand-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      'brand-bounce': 'brand-bounce 1s infinite',
      'brand-float': 'brand-float 3s ease-in-out infinite',
    },
  },
  plugins: [
    // eslint-disable-next-line
    require('@tailwindcss/typography'),
    iconsPlugin({
      collections: {
        woot: { icons },
        ...getIconCollections([
          'lucide',
          'logos',
          'ri',
          'ph',
          'material-symbols',
          'teenyicons',
        ]),
      },
    }),
    // Brand custom component classes
    function({ addComponents, theme }) {
      addComponents({
        // Brand Button Variants
        '.brand-btn-primary': {
          background: 'linear-gradient(to right, #9747FF, #7928ca)',
          color: '#ffffff',
          fontWeight: '600',
          padding: '0.75rem 2rem',
          borderRadius: '1rem',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            background: 'linear-gradient(to right, #8b3dff, #6a1fa6)',
            transform: 'translateY(-1px)',
            boxShadow: '0 10px 25px -5px rgba(151, 71, 255, 0.3)',
          },
        },
        '.brand-btn-secondary': {
          background: 'rgba(255, 255, 255, 0.05)',
          color: '#ffffff',
          fontWeight: '600',
          padding: '0.5rem 1.5rem',
          borderRadius: '1rem',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          cursor: 'pointer',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'rgba(151, 71, 255, 0.3)',
            transform: 'translateY(-1px)',
          },
        },
        // Brand Card Variants
        '.brand-card': {
          background: 'rgba(15, 15, 15, 0.8)',
          borderRadius: '1.5rem',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(12px)',
          transition: 'all 0.3s ease-in-out',
        },
        '.brand-card-hover': {
          '&:hover': {
            background: 'rgba(26, 26, 26, 0.9)',
            borderColor: 'rgba(151, 71, 255, 0.3)',
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.3)',
          },
        },
        // Brand Section Layouts
        '.brand-section': {
          paddingTop: '5rem',
          paddingBottom: '5rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          '@media (min-width: 768px)': {
            paddingTop: '8rem',
            paddingBottom: '8rem',
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
        },
        '.brand-container': {
          maxWidth: '72rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
        },
        // Brand Typography
        '.brand-heading-1': {
          fontSize: '3rem',
          fontWeight: '700',
          lineHeight: '1',
          color: '#ffffff',
          '@media (min-width: 768px)': {
            fontSize: '4.5rem',
          },
          '@media (min-width: 1024px)': {
            fontSize: '6rem',
          },
        },
        '.brand-heading-2': {
          fontSize: '2.25rem',
          fontWeight: '600',
          lineHeight: '1.1',
          color: '#ffffff',
          '@media (min-width: 768px)': {
            fontSize: '3rem',
          },
          '@media (min-width: 1024px)': {
            fontSize: '3.75rem',
          },
        },
        '.brand-heading-3': {
          fontSize: '1.875rem',
          fontWeight: '600',
          lineHeight: '1.2',
          color: '#ffffff',
          '@media (min-width: 768px)': {
            fontSize: '2.25rem',
          },
        },
        '.brand-text-body': {
          fontSize: '1rem',
          lineHeight: '1.5',
          color: 'rgba(255, 255, 255, 0.8)',
          '@media (min-width: 768px)': {
            fontSize: '1.125rem',
          },
        },
        '.brand-text-muted': {
          fontSize: '0.875rem',
          lineHeight: '1.4',
          color: 'rgba(255, 255, 255, 0.6)',
          '@media (min-width: 768px)': {
            fontSize: '1rem',
          },
        },
      })
    }
  ],
};

module.exports = tailwindConfig;
