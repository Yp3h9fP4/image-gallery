import { ElementType } from "react";
import styles from "./Text.module.css";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

type TextSize = "xs" | "sm" | "base" | "md" | "lg" | "xl";
type TextWeight = "normal" | "medium" | "semibold" | "bold";
type TextAlign = "left" | "center" | "right";
type TextStyle = "normal" | "italic" | "oblique";
type TextColor = "default" | "primary";
type TextFontStyle = "normal" | "italic" | "oblique";

type TextProps = {
  as?: ElementType;
  size?: TextSize;
  weight?: TextWeight;
  align?: TextAlign;
  textStyle?: TextStyle;
  fontStyle?: TextFontStyle;
  color?: TextColor;
  className?: string;
  children?: React.ReactNode;
  truncated?: boolean;
  asChild?: boolean;
};

function Text({
  children,
  className,
  size = "base",
  weight,
  align,
  as: Element = "div",
  truncated,
  fontStyle,
  asChild = false,
  ...props
}: TextProps) {
  const Comp = asChild ? Slot : Element;
  return (
    <Comp
      className={cn(
        styles[`size-${size}`],
        weight && styles[`weight-${weight}`],
        align && styles[`align-${align}`],
        fontStyle && styles[`fontStyle-${fontStyle}`],
        truncated && styles.truncated,
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

Text.displayName = "Text";

export { Text };
