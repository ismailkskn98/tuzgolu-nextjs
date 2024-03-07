import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'landing-light-bg': 'url(/images/landing/landingBackground.svg)',
        'landing-dark-bg': 'url(/images/landing/landingBackgroundDark.svg)',
        'contact-bg': 'url(/images/contact/contact.svg)',
        'footer-light-bg': 'url(/images/footer/footer.svg)',
        'footer-dark-bg': 'url(/images/footer/footerDark.svg)',
      },
      colors: {
        dark: {
          black: '#1b1e25',
          // gray: '#393E46',
          gray: '#222831',
          orange: '#FD7014',
          white: '#EEEEEE',
        },
        light: {
          white: '#EFF5F5',
          light: '#D6E4E5',
          teal: '#497174',
          orange: '#FD7014',
        },
        'contact-hover': '#273F41',
        'light-border-color': 'rgb(150 150 150 / 47%)',
      },
    },
  },
  plugins: [],
};
export default config;
