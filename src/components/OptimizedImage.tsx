import { useState, useRef, useEffect, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<HTMLMotionProps<"div">, "src"> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export const OptimizedImage = forwardRef<HTMLDivElement, OptimizedImageProps>(
  ({ src, alt, className, priority = false, ...motionProps }, ref) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(priority);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (priority) {
        setIsInView(true);
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        {
          rootMargin: "200px",
          threshold: 0,
        }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }, [priority]);

    return (
      <motion.div
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        className={cn("relative overflow-hidden", className)}
        {...motionProps}
      >
        {!isLoaded && (
          <div className="absolute inset-0 bg-muted/50 animate-pulse" />
        )}

        {isInView && (
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-500",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
          />
        )}
      </motion.div>
    );
  }
);

OptimizedImage.displayName = "OptimizedImage";
