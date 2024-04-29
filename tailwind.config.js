/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            'black': '#000000',
            'white': '#FFFFFF',
            'banner-text-color': '#333333',
            'primary-bg-color': '#FFF3E3',
            'footer-dark-bg-color': '#FAF3EA',
            'footer-dark-title-text': '#242424',
            'footer-dark-ph-text': '#898989',
            'footer-border-color': '#D9D9D9',
            'footer-ph-text': '#9F9F9F',
            'product-card-color': '#F4F5F7',
            'product-color-name': '#3A3A3A',
            'product-color-description': '#898989',
            'product-rebate-price': '#B0B0B0',
            'product-btn-color': '#B88E2F',
            'filter-bar-color': '#F9F1E7'
        },
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
        }
    },
    plugins: [],
}

