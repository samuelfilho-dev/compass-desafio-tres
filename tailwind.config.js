/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            'black': '#00000',
            'banner-text-color': '#333333',
            'primary-bg-color': '#FFF3E3',
            'footer-dark-bg-color': '#FAF3EA',
            'footer-dark-title-text': '#242424',
            'footer-dark-ph-text': '#898989'
        },
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
        }
    },
    plugins: [],
}

