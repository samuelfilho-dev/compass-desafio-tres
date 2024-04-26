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
        },
        fontFamily: {
            sans: ['Montserrat', 'Poppins', 'sans-serif'],
        }
    },
    plugins: [],
}

