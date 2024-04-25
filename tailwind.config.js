/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            'black': '#00000',
        },
        fontFamily: {
            sans: ['Montserrat', 'Poppins', 'sans-serif'],
        }
    },
    plugins: [],
}

