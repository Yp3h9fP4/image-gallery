import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  asChild?: boolean;
}

function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        styles.button,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        fullWidth && styles.fullWidth,
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

Button.displayName = "Button";

export { Button };
