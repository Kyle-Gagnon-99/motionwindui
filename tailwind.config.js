/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
        extend: {
            colors: {
                'primary': {
                    DEFAULT: 'hsl(var(--primary))',
                    100: 'hsl(var(--primary-100))',
                    200: 'hsl(var(--primary-200))',
                    300: 'hsl(var(--primary-300))',
                    400: 'hsl(var(--primary-400))',
                    500: 'hsl(var(--primary-500))',
                    600: 'hsl(var(--primary-600))',
                    700: 'hsl(var(--primary-700))',
                    800: 'hsl(var(--primary-800))',
                    900: 'hsl(var(--primary-900))',
                },
                'background': {
                    DEFAULT: 'hsl(var(--background))',
                    100: 'hsl(var(--background-100))',
                    200: 'hsl(var(--background-200))',
                    300: 'hsl(var(--background-300))',
                    400: 'hsl(var(--background-400))',
                    500: 'hsl(var(--background-500))',
                    600: 'hsl(var(--background-600))',
                    700: 'hsl(var(--background-700))',
                    800: 'hsl(var(--background-800))',
                    900: 'hsl(var(--background-900))',
                },
                'secondary': {
                    DEFAULT: 'hsl(var(--secondary))',
                    100: 'hsl(var(--secondary-100))',
                    200: 'hsl(var(--secondary-200))',
                    300: 'hsl(var(--secondary-300))',
                    400: 'hsl(var(--secondary-400))',
                    500: 'hsl(var(--secondary-500))',
                    600: 'hsl(var(--secondary-600))',
                    700: 'hsl(var(--secondary-700))',
                    800: 'hsl(var(--secondary-800))',
                    900: 'hsl(var(--secondary-900))',
                },
                'warning': {
                    DEFAULT: 'hsl(var(--warning))',
                    100: 'hsl(var(--warning-100))',
                    200: 'hsl(var(--warning-200))',
                    300: 'hsl(var(--warning-300))',
                    400: 'hsl(var(--warning-400))',
                    500: 'hsl(var(--warning-500))',
                    600: 'hsl(var(--warning-600))',
                    700: 'hsl(var(--warning-700))',
                    800: 'hsl(var(--warning-800))',
                    900: 'hsl(var(--warning-900))',
                },
                'success': {
                    DEFAULT: 'hsl(var(--success))',
                    100: 'hsl(var(--success-100))',
                    200: 'hsl(var(--success-200))',
                    300: 'hsl(var(--success-300))',
                    400: 'hsl(var(--success-400))',
                    500: 'hsl(var(--success-500))',
                    600: 'hsl(var(--success-600))',
                    700: 'hsl(var(--success-700))',
                    800: 'hsl(var(--success-800))',
                    900: 'hsl(var(--success-900))',
                },
                'danger': {
                    DEFAULT: 'hsl(var(--danger))',
                    100: 'hsl(var(--danger-100))',
                    200: 'hsl(var(--danger-200))',
                    300: 'hsl(var(--danger-300))',
                    400: 'hsl(var(--danger-400))',
                    500: 'hsl(var(--danger-500))',
                    600: 'hsl(var(--danger-600))',
                    700: 'hsl(var(--danger-700))',
                    800: 'hsl(var(--danger-800))',
                    900: 'hsl(var(--danger-900))',
                },
                dark: {
                    'primary': {
                        DEFAULT: 'hsl(var(--primary))',
                        100: 'hsl(var(--primary-100))',
                        200: 'hsl(var(--primary-200))',
                        300: 'hsl(var(--primary-300))',
                        400: 'hsl(var(--primary-400))',
                        500: 'hsl(var(--primary-500))',
                        600: 'hsl(var(--primary-600))',
                        700: 'hsl(var(--primary-700))',
                        800: 'hsl(var(--primary-800))',
                        900: 'hsl(var(--primary-900))',
                    },
                    'background': {
                        DEFAULT: 'hsl(var(--background))',
                        100: 'hsl(var(--background-100))',
                        200: 'hsl(var(--background-200))',
                        300: 'hsl(var(--background-300))',
                        400: 'hsl(var(--background-400))',
                        500: 'hsl(var(--background-500))',
                        600: 'hsl(var(--background-600))',
                        700: 'hsl(var(--background-700))',
                        800: 'hsl(var(--background-800))',
                        900: 'hsl(var(--background-900))',
                    },
                    'secondary': {
                        DEFAULT: 'hsl(var(--secondary))',
                        100: 'hsl(var(--secondary-100))',
                        200: 'hsl(var(--secondary-200))',
                        300: 'hsl(var(--secondary-300))',
                        400: 'hsl(var(--secondary-400))',
                        500: 'hsl(var(--secondary-500))',
                        600: 'hsl(var(--secondary-600))',
                        700: 'hsl(var(--secondary-700))',
                        800: 'hsl(var(--secondary-800))',
                        900: 'hsl(var(--secondary-900))',
                    },
                    'warning': {
                        DEFAULT: 'hsl(var(--warning))',
                        100: 'hsl(var(--warning-100))',
                        200: 'hsl(var(--warning-200))',
                        300: 'hsl(var(--warning-300))',
                        400: 'hsl(var(--warning-400))',
                        500: 'hsl(var(--warning-500))',
                        600: 'hsl(var(--warning-600))',
                        700: 'hsl(var(--warning-700))',
                        800: 'hsl(var(--warning-800))',
                        900: 'hsl(var(--warning-900))',
                    },
                    'success': {
                        DEFAULT: 'hsl(var(--success))',
                        100: 'hsl(var(--success-100))',
                        200: 'hsl(var(--success-200))',
                        300: 'hsl(var(--success-300))',
                        400: 'hsl(var(--success-400))',
                        500: 'hsl(var(--success-500))',
                        600: 'hsl(var(--success-600))',
                        700: 'hsl(var(--success-700))',
                        800: 'hsl(var(--success-800))',
                        900: 'hsl(var(--success-900))',
                    },
                    'danger': {
                        DEFAULT: 'hsl(var(--danger))',
                        100: 'hsl(var(--danger-100))',
                        200: 'hsl(var(--danger-200))',
                        300: 'hsl(var(--danger-300))',
                        400: 'hsl(var(--danger-400))',
                        500: 'hsl(var(--danger-500))',
                        600: 'hsl(var(--danger-600))',
                        700: 'hsl(var(--danger-700))',
                        800: 'hsl(var(--danger-800))',
                        900: 'hsl(var(--danger-900))',
                    },
                }
            }
        },
    },
    plugins: [],
};