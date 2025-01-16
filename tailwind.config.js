/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "hero-section": "url('/src/assests/heroimage1.png')",
            },
            animation: {
                scroll: "scroll 50s linear infinite",
            },
            keyframes: {
                scroll: {
                    "0%": { transform: "translateX(0)" },
                    "50%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(-200%)" },
                },
            },
        },
        screens: {
            xs: "420px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
    plugins: [],
};
