// Brand colors extracted from Care on Call Home Healthcare website
export const brandColors = {
  // Primary brand color - deep blue used in logo and headers
  brand: {
    DEFAULT: '#004080',
    50: '#e6f0ff',
    100: '#b3d9ff', 
    200: '#80c2ff',
    300: '#4dabff',
    400: '#1a94ff',
    500: '#004080',
    600: '#003366',
    700: '#00264d',
    800: '#001a33',
    900: '#000d1a',
  },
  
  // Accent blue - lighter blue used for accents and highlights
  accent: {
    DEFAULT: '#0066cc',
    light: '#3385d6',
    dark: '#004d99',
  },
  
  // Medical/healthcare themed colors
  medical: {
    teal: '#008080',
    mint: '#f0fdf4',
    sage: '#84cc16',
  },
  
  // Trust and professional colors
  trust: {
    navy: '#1e3a8a',
    silver: '#e5e7eb',
    gold: '#fbbf24',
  }
}

// CSS Custom Properties mapping for Tailwind
export const cssVariables = {
  '--brand': brandColors.brand.DEFAULT,
  '--brand-foreground': '#ffffff',
  '--brand-light': brandColors.brand[100],
  '--brand-dark': brandColors.brand[600],
  '--accent': brandColors.accent.DEFAULT,
  '--accent-foreground': '#ffffff',
  '--muted': '#f8fafc',
  '--muted-foreground': '#64748b',
  '--border': '#e2e8f0',
  '--ring': brandColors.brand.DEFAULT,
}