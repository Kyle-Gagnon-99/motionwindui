/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
        extend: {
            colors: {
                'primary': {
                    DEFAULT: 'rgb(var(--primary-500) / <alpha-value>)',
                    100: 'rgb(var(--primary-100) / <alpha-value>)',
                    200: 'rgb(var(--primary-200) / <alpha-value>)',
                    300: 'rgb(var(--primary-300) / <alpha-value>)',
                    400: 'rgb(var(--primary-400) / <alpha-value>)',
                    500: 'rgb(var(--primary-500) / <alpha-value>)',
                    600: 'rgb(var(--primary-600) / <alpha-value>)',
                    700: 'rgb(var(--primary-700) / <alpha-value>)',
                    800: 'rgb(var(--primary-800) / <alpha-value>)',
                    900: 'rgb(var(--primary-900) / <alpha-value>)',
                },
                'primary-foreground': {
                    DEFAULT: 'hsl(var(--primary-foreground))'
                },
                'background': {
                    DEFAULT: 'rgb(var(--background-50) / <alpha-value>)',
                    100: 'rgb(var(--background-100) / <alpha-value>)',
                    200: 'rgb(var(--background-200) / <alpha-value>)',
                    300: 'rgb(var(--background-300) / <alpha-value>)',
                    400: 'rgb(var(--background-400) / <alpha-value>)',
                    500: 'rgb(var(--background-500) / <alpha-value>)',
                    600: 'rgb(var(--background-600) / <alpha-value>)',
                    700: 'rgb(var(--background-700) / <alpha-value>)',
                    800: 'rgb(var(--background-800) / <alpha-value>)',
                    900: 'rgb(var(--background-900) / <alpha-value>)',
                },
                'secondary': {
                    DEFAULT: 'rgb(var(--secondary-500) / <alpha-value>)',
                    100: 'rgb(var(--secondary-100) / <alpha-value>)',
                    200: 'rgb(var(--secondary-200) / <alpha-value>)',
                    300: 'rgb(var(--secondary-300) / <alpha-value>)',
                    400: 'rgb(var(--secondary-400) / <alpha-value>)',
                    500: 'rgb(var(--secondary-500) / <alpha-value>)',
                    600: 'rgb(var(--secondary-600) / <alpha-value>)',
                    700: 'rgb(var(--secondary-700) / <alpha-value>)',
                    800: 'rgb(var(--secondary-800) / <alpha-value>)',
                    900: 'rgb(var(--secondary-900) / <alpha-value>)',
                },
                'warning': {
                    DEFAULT: 'rgb(var(--warning-500) / <alpha-value>)',
                    100: 'rgb(var(--warning-100) / <alpha-value>)',
                    200: 'rgb(var(--warning-200) / <alpha-value>)',
                    300: 'rgb(var(--warning-300) / <alpha-value>)',
                    400: 'rgb(var(--warning-400) / <alpha-value>)',
                    500: 'rgb(var(--warning-500) / <alpha-value>)',
                    600: 'rgb(var(--warning-600) / <alpha-value>)',
                    700: 'rgb(var(--warning-700) / <alpha-value>)',
                    800: 'rgb(var(--warning-800) / <alpha-value>)',
                    900: 'rgb(var(--warning-900) / <alpha-value>)',
                },
                'success': {
                    DEFAULT: 'rgb(var(--success-600) / <alpha-value>)',
                    100: 'rgb(var(--success-100) / <alpha-value>)',
                    200: 'rgb(var(--success-200) / <alpha-value>)',
                    300: 'rgb(var(--success-300) / <alpha-value>)',
                    400: 'rgb(var(--success-400) / <alpha-value>)',
                    500: 'rgb(var(--success-500) / <alpha-value>)',
                    600: 'rgb(var(--success-600) / <alpha-value>)',
                    700: 'rgb(var(--success-700) / <alpha-value>)',
                    800: 'rgb(var(--success-800) / <alpha-value>)',
                    900: 'rgb(var(--success-900) / <alpha-value>)',
                },
                'danger': {
                    DEFAULT: 'rgb(var(--danger-600) / <alpha-value>)',
                    100: 'rgb(var(--danger-100) / <alpha-value>)',
                    200: 'rgb(var(--danger-200) / <alpha-value>)',
                    300: 'rgb(var(--danger-300) / <alpha-value>)',
                    400: 'rgb(var(--danger-400) / <alpha-value>)',
                    500: 'rgb(var(--danger-500) / <alpha-value>)',
                    600: 'rgb(var(--danger-600) / <alpha-value>)',
                    700: 'rgb(var(--danger-700) / <alpha-value>)',
                    800: 'rgb(var(--danger-800) / <alpha-value>)',
                    900: 'rgb(var(--danger-900) / <alpha-value>)',
                },
                dark: {
                    'primary': {
                        DEFAULT: 'rgb(var(--primary-700) / <alpha-value>)',
                        100: 'rgb(var(--primary-100) / <alpha-value>)',
                        200: 'rgb(var(--primary-200) / <alpha-value>)',
                        300: 'rgb(var(--primary-300) / <alpha-value>)',
                        400: 'rgb(var(--primary-400) / <alpha-value>)',
                        500: 'rgb(var(--primary-500) / <alpha-value>)',
                        600: 'rgb(var(--primary-600) / <alpha-value>)',
                        700: 'rgb(var(--primary-700) / <alpha-value>)',
                        800: 'rgb(var(--primary-800) / <alpha-value>)',
                        900: 'rgb(var(--primary-900) / <alpha-value>)',
                    },
                    'primary-foreground': {
                        DEFAULT: 'hsl(var(--primary-foreground))'
                    },
                    'background': {
                        DEFAULT: 'rgb(var(--background-50) / <alpha-value>)',
                        100: 'rgb(var(--background-100) / <alpha-value>)',
                        200: 'rgb(var(--background-200) / <alpha-value>)',
                        300: 'rgb(var(--background-300) / <alpha-value>)',
                        400: 'rgb(var(--background-400) / <alpha-value>)',
                        500: 'rgb(var(--background-500) / <alpha-value>)',
                        600: 'rgb(var(--background-600) / <alpha-value>)',
                        700: 'rgb(var(--background-700) / <alpha-value>)',
                        800: 'rgb(var(--background-800) / <alpha-value>)',
                        900: 'rgb(var(--background-900) / <alpha-value>)',
                    },
                    'secondary': {
                        DEFAULT: 'rgb(var(--secondary-300) / <alpha-value>)',
                        100: 'rgb(var(--secondary-100) / <alpha-value>)',
                        200: 'rgb(var(--secondary-200) / <alpha-value>)',
                        300: 'rgb(var(--secondary-300) / <alpha-value>)',
                        400: 'rgb(var(--secondary-400) / <alpha-value>)',
                        500: 'rgb(var(--secondary-500) / <alpha-value>)',
                        600: 'rgb(var(--secondary-600) / <alpha-value>)',
                        700: 'rgb(var(--secondary-700) / <alpha-value>)',
                        800: 'rgb(var(--secondary-800) / <alpha-value>)',
                        900: 'rgb(var(--secondary-900) / <alpha-value>)',
                    },
                    'warning': {
                        DEFAULT: 'rgb(var(--warning-500) / <alpha-value>)',
                        100: 'rgb(var(--warning-100) / <alpha-value>)',
                        200: 'rgb(var(--warning-200) / <alpha-value>)',
                        300: 'rgb(var(--warning-300) / <alpha-value>)',
                        400: 'rgb(var(--warning-400) / <alpha-value>)',
                        500: 'rgb(var(--warning-500) / <alpha-value>)',
                        600: 'rgb(var(--warning-600) / <alpha-value>)',
                        700: 'rgb(var(--warning-700) / <alpha-value>)',
                        800: 'rgb(var(--warning-800) / <alpha-value>)',
                        900: 'rgb(var(--warning-900) / <alpha-value>)',
                    },
                    'success': {
                        DEFAULT: 'rgb(var(--success-300) / <alpha-value>)',
                        100: 'rgb(var(--success-100) / <alpha-value>)',
                        200: 'rgb(var(--success-200) / <alpha-value>)',
                        300: 'rgb(var(--success-300) / <alpha-value>)',
                        400: 'rgb(var(--success-400) / <alpha-value>)',
                        500: 'rgb(var(--success-500) / <alpha-value>)',
                        600: 'rgb(var(--success-600) / <alpha-value>)',
                        700: 'rgb(var(--success-700) / <alpha-value>)',
                        800: 'rgb(var(--success-800) / <alpha-value>)',
                        900: 'rgb(var(--success-900) / <alpha-value>)',
                    },
                    'danger': {
                        DEFAULT: 'rgb(var(--danger-600) / <alpha-value>)',
                        100: 'rgb(var(--danger-100) / <alpha-value>)',
                        200: 'rgb(var(--danger-200) / <alpha-value>)',
                        300: 'rgb(var(--danger-300) / <alpha-value>)',
                        400: 'rgb(var(--danger-400) / <alpha-value>)',
                        500: 'rgb(var(--danger-500) / <alpha-value>)',
                        600: 'rgb(var(--danger-600) / <alpha-value>)',
                        700: 'rgb(var(--danger-700) / <alpha-value>)',
                        800: 'rgb(var(--danger-800) / <alpha-value>)',
                        900: 'rgb(var(--danger-900) / <alpha-value>)',
                    },
                }
            }
        },
    },
    plugins: [],
};
