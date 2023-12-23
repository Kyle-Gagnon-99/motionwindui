import { cva } from "class-variance-authority";

export const buttonStyles = cva(
    "flex flex-row gap-x-4 disabled:cursor-not-allowed items-center justify-center",
    {
        variants: {
            buttonType: {
                "primary-solid":
                    "bg-primary text-primary-foreground hover:bg-primary-600 active:bg-primary-700 disabled:bg-primary-200 disabled:text-primary-600/70",
                "secondary-solid":
                    "bg-secondary text-white hover:bg-secondary-600 active:bg-secondary-700 disabled:bg-secondary-200 disabled:text-secondary-600/70",
                "success-solid":
                    "bg-success text-white hover:bg-success-500 active:bg-success-600 disabled:bg-success-200 disabled:text-success-600/70",
                "warning-solid":
                    "bg-warning text-white hover:bg-warning-400 active:bg-warning-300",
                "danger-solid":
                    "bg-danger text-white hover:bg-danger-400 active:bg-danger-300",
                "primary-outline":
                    "bg-transparant text-primary border border-primary hover:bg-primary/10 hover:border-primary-500 active:bg-primary/20",
                "secondary-outline":
                    "bg-transparaent text-secondary border border-secondary hover:bg-secondary/10 hover:border-secondary-500 active:bg-secondary/20",
                "success-outline":
                    "bg-transparent text-success border border-success hover:bg-success/10 hover:border-success-400",
                "warning-outline":
                    "bg-transparent text-warning border border-warning hover:bg-wanring/10 hover:border-warning-400",
                "danger-outline":
                    "bg-transparent text-danger border border-danger hover:bg-danger/10 hover:border-danger-400",
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
