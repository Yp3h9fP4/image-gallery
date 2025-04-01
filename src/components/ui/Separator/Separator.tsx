import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import styles from "./Separator.module.css";

interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {}

function Separator({ className, ...props }: SeparatorProps) {
  return <div className={cn(styles.separator, className)} {...props} />;
}

Separator.displayName = "Separator";

export { Separator };
