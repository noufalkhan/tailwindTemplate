/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Colors
      colors: {
        light: {
          background: '#FFFFFF',       // Light background
          text: '#1A1A1A',             // Dark text
          primary: '#1D4ED8',          // Primary color (blue)
          secondary: '#FBBF24',        // Secondary color (yellow)
          card: '#F9FAFB',             // Light card color (gray)
          accent: '#34D399',           // Light accent color (green)
          muted: '#E5E7EB',            // Light muted color (light gray)
          error: '#F44336',            // Error color (red)
          success: '#4CAF50',          // Success color (green)
          info: '#2196F3',             // Info color (blue)
          warning: '#FF9800',          // Warning color (orange)
          border: '#E5E7EB',           // Light border color
          shadow: 'rgba(0, 0, 0, 0.1)', // Light shadow
        },
        dark: {
          background: '#1A1A1A',       // Dark background
          text: '#F0F0F0',             // Light text
          primary: '#4F46E5',          // Dark primary color (indigo)
          secondary: '#FBBF24',        // Secondary color (yellow)
          card: '#2A2A2A',             // Dark card color (gray)
          accent: '#10B981',           // Dark accent color (green)
          muted: '#4B5563',            // Dark muted color (gray)
          error: '#F44336',            // Error color (red)
          success: '#4CAF50',          // Success color (green)
          info: '#2196F3',             // Info color (blue)
          warning: '#FF9800',          // Warning color (orange)
          border: '#4B5563',           // Dark border color
          shadow: 'rgba(255, 255, 255, 0.1)', // Dark shadow
        },
      },
      // Spacing
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem', // Additional spacing
        '144': '36rem', // Additional spacing
      },
      // Font Sizes
      fontSize: {
        'xxs': '0.65rem',
        'tiny': '0.875rem', // Tiny font size
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },
      // Font Families
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'], // Adding Inter font
        serif: ['Merriweather', 'ui-serif', 'Georgia'],
        mono: ['Menlo', 'Monaco', 'ui-monospace', 'monospace'],
      },
      // Border Radius
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
      // Shadows
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'outline': '0 0 0 3px rgba(66, 153, 225, 0.5)',
        'none': 'none',
      },
    },
  },
  darkMode: 'class', // Enable dark mode
  plugins: [],
};

export default config;
