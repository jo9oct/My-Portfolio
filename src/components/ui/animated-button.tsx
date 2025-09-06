import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./button";

interface AnimatedButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: "hero" | "ghost-glow" | "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const getVariantClasses = () => {
      switch (variant) {
        case "hero":
          return "btn-hero";
        case "ghost-glow":
          return "btn-ghost-glow";
        default:
          return "";
      }
    };

    return (
      <Button
        className={cn(getVariantClasses(), className)}
        variant={variant === "hero" || variant === "ghost-glow" ? "default" : variant}
        ref={ref}
        {...props}
      />
    );
  }
);
AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };