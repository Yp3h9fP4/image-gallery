import { HTMLAttributes } from "react";
import styles from "./Grid.module.css";
import { cn } from "@/lib/utils";

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  sm?: 1 | 2 | 3 | 4 | 6 | 12;
  md?: 1 | 2 | 3 | 4 | 6 | 12;
  lg?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: "none" | "sm" | "md" | "lg";
  smGap?: "none" | "sm" | "md" | "lg";
  mdGap?: "none" | "sm" | "md" | "lg";
  lgGap?: "none" | "sm" | "md" | "lg";
  flow?: "row" | "col";
}

function Grid({
  children,
  className,
  cols = 1,
  sm,
  md,
  lg,
  gap = "md",
  smGap,
  mdGap,
  lgGap,
  flow = "row",
  ...props
}: GridProps) {
  return (
    <div
      className={cn(
        styles.grid,
        cols && styles[`cols${cols}`],
        sm && styles[`sm:cols${sm}`],
        md && styles[`md:cols${md}`],
        lg && styles[`lg:cols${lg}`],
        gap && styles[`gap${gap}`],
        smGap && styles[`sm:gap${smGap}`],
        mdGap && styles[`md:gap${mdGap}`],
        lgGap && styles[`lg:gap${lgGap}`],
        flow && styles[flow],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

Grid.displayName = "Button";

export { Grid };
