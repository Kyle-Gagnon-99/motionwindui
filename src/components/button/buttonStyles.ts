import { cva } from "class-variance-authority";

export const buttonStyles = cva(
    "flex flex-row gap-x-4 disabled:cursor-not-allowed items-center justify-center",
    {
        variants: {
            buttonType: {
                "primary-solid":
                    "bg-primary text-primary-foreground hover:bg-primary-600 active:bg-primary-700 disabled:bg-primary-200 disabled:text-primary-600/70",
                "secondary-solid":
                    "bg-secondary text-white hover:bg-secondary-600 active:bg-secondary-700 disabled:bg-secondary-200 disabled:text-secondary-600/70 dark:bg-secondary",
                "success-solid":
                    "bg-success-500 text-white hover:bg-success-600 active:bg-success-700 disabled:bg-success-200 disabled:text-success-600/70",
                "warning-solid":
                    "bg-warning text-white hover:bg-warning-600 active:bg-warning-700 disabled:bg-warning-200 disabled:text-warning-600/70",
                "danger-solid":
                    "bg-danger-500 text-white hover:bg-danger-600 active:bg-danger-700 disabled:bg-danger-200 disabled:text-danger-600/70",
                "primary-outline":
                    "bg-transparent text-primary border border-primary hover:bg-primary/10 hover:border-primary-500 active:bg-primary/20 disabled:text-primary-700 disabled:border-primary-700 disabled:hover:bg-transparent",
                "secondary-outline":
                    "bg-transparent text-secondary border border-secondary hover:bg-secondary/10 hover:border-secondary-500 active:bg-secondary/20 disabled:text-secondary-700 disabled:border-secondary-700 disabled:hover:bg-transparent",
                "success-outline":
                    "bg-transparent text-success border border-success hover:bg-success/10 hover:border-success-400 disabled:text-success-700 disabled:border-success-700 disabled:hover:bg-transparent",
                "warning-outline":
                    "bg-transparent text-warning border border-warning hover:bg-wanring/10 hover:border-warning-400 disabled:text-warning-700 disabled:border-warning-700 disabled:hover:bg-transparent",
                "danger-outline":
                    "bg-transparent text-danger border border-danger hover:bg-danger/10 hover:border-danger-400 disabled:text-danger-700 disabled:border-danger-700 disabled:hover:bg-transparent",
                "primary-solid-loading":
                    "bg-primary-200 text-primary-600/70 cursor-wait",
                "primary-outline-loading":
                    "bg-transparent text-primary-700 border border-primary-700 cursor-wait",
                "secondary-solid-loading":
                    "bg-secondary-200 text-secondary-600/70 cursor-wait",
                "secondary-outline-loading":
                    "bg-transparent text-secondary-700 border border-secondary-700 cursor-wait",
                "warning-solid-loading":
                    "bg-warning-200 text-warning-600/70 cursor-wait",
                "warning-outline-loading":
                    "bg-transparent text-warning-700 border border-warning-700 cursor-wait",
                "success-solid-loading":
                    "bg-success-200 text-success-600/70 cursor-wait",
                "success-outline-loading":
                    "bg-transparent text-success-700 border border-success-700 cursor-wait",
                "danger-solid-loading":
                    "bg-danger-200 text-danger-600/70 cursor-wait",
                "danger-outline-loading":
                    "bg-transparent text-danger-700 border border-danger-700 cursor-wait",
            },
            size: {
                default: ["text-base"],
                small: ["text-sm"],
                large: ["text-lg"],
                xxl: ["text-2xl"],
            },
            spacing: {
                default: ["py-2", "px-4"],
                small: ["py-1", "px-2"],
                large: ["py-3", "px-6"],
                xxl: ["py-4", "px-8"],
            },
            rounded: {
                default: "rounded-md",
                sm: "rounded-sm",
                lg: "rounded-lg",
                xl: "rounded-xl",
                xxl: "rounded-2xl",
                none: "rounded-none",
                full: "rounded-full",
            },
        },
        compoundVariants: [
            {
                buttonType: "primary-solid",
                size: "default",
                spacing: "default",
                rounded: "default",
            },
        ],
        defaultVariants: {
            buttonType: "primary-solid",
            size: "default",
            spacing: "default",
            rounded: "default",
        },
    },
);
