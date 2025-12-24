/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'fall': 'fall 10s linear infinite',
                'shine': 'shine 2s infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fall: {
                    '0%': { transform: 'translateY(-10vh) rotate(0deg)' },
                    '100%': { transform: 'translateY(110vh) rotate(360deg)' },
                },
                shine: {
                    '100%': { transform: 'translateX(100%)' },
                },
            },
        },
    },
    plugins: [],
}
