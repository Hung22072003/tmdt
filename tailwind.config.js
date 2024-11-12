/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                background: 'url(./src/assets/background.webp)',
                'custom-gradient':
                    'linear-gradient(to bottom, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), url(./src/assets/background.webp)',
            },
            colors: {
                primaryColor: '#498536',
            },
        },
    },
    plugins: [],
};
