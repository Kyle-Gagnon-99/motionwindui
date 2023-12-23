import React, { ComponentPropsWithoutRef } from "react";
import { buttonStyles } from "./buttonStyles";
import { VariantProps } from "class-variance-authority";
import { clsxMerge } from "../../common/utils/classNameUtils";
import { HTMLMotionProps, motion } from "framer-motion";

type ButtonElementProps = ComponentPropsWithoutRef<"button">;

type MotionProps = Omit<HTMLMotionProps<"button">, keyof ButtonElementProps>;

export interface ButtonProps
    extends VariantProps<typeof buttonStyles>,
        MotionProps,
        ButtonElementProps {
    /** The intended use of the button */
    intent?: "primary" | "secondary" | "success" | "warning" | "danger";
    /** The style of the button */
    variant?: "solid" | "outline";
    /** Any react children */
    children?: React.ReactNode;
    /** Whether or not this button should be animated */
    animate?: boolean;
    /** Whether or not the animate should occur on the element when disbaled, even if animate is enabled */
    animateOnDisable?: boolean;
}

/**
 * A button used for user interaction. It supports the intention to be primary, secondary, success, warning, or danger. It supports animation.
 */
function Button({
    className,
    intent = "primary",
    variant = "solid",
    size = "default",
    animate = true,
    animateOnDisable = false,
    rounded,
    spacing,
    children,
    disabled,
    ...props
}: ButtonProps) {
    const motionProps =
        animate && (!disabled || animateOnDisable)
            ? (props as MotionProps)
            : {};

    return animate && (!disabled || animateOnDisable) ? (
        <motion.button
            className={clsxMerge(
                buttonStyles({
                    buttonType: `${intent}-${variant}`,
                    size,
                    rounded,
                    spacing,
                    className,
                }),
            )}
            whileTap={{
                scale: 0.9,
            }}
            disabled={disabled}
            {...motionProps}
        >
            {children}
        </motion.button>
    ) : (
        <button
            className={clsxMerge(
                buttonStyles({
                    buttonType: `${intent}-${variant}`,
                    size,
                    rounded,
                    spacing,
                    className,
                }),
            )}
            type="button"
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
