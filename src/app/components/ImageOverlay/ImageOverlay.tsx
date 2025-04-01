import styles from "./ImageOverlay.module.css";
import { cn } from "@/lib/utils";

interface ChildrenProps {
  children: React.ReactNode;
  className?: string;
}

function ImageOverlay({ children, className }: ChildrenProps) {
  return <div className={cn(styles.overlay, className)}>{children}</div>;
}

export { ImageOverlay };
