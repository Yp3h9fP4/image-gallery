"use client";

import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import styles from "./Space.module.css";

type SpaceSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

type SpaceProps = {
  asChild?: boolean;
  p?: SpaceSize;
  px?: SpaceSize;
  py?: SpaceSize;
  m?: SpaceSize;
  mx?: SpaceSize;
  my?: SpaceSize;
  mt?: SpaceSize;
  mb?: SpaceSize;
  ml?: SpaceSize;
  mr?: SpaceSize;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

function Space({
  className,
  asChild,
  p,
  px,
  py,
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  children,
  ...props
}: SpaceProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn(
        p && styles[`p${p}`],
        px && styles[`px${px}`],
        py && styles[`py${py}`],
        m && styles[`m${m}`],
        mx && styles[`mx${mx}`],
        my && styles[`my${my}`],
        mt && styles[`mt${mt}`],
        mb && styles[`mb${mb}`],
        ml && styles[`ml${ml}`],
        mr && styles[`mr${mr}`],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

Space.displayName = "Space";

export { Space };
