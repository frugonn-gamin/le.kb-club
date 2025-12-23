import { useState, useRef, useEffect } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<HTMLMotionProps<"img">, "src"> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean; // For above-the-fold images
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  priority = false,
  ...motionProps
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

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
        rootMargin: "200px", // Start loading 200px before entering viewport
        threshold: 0,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div ref={imgRef as React.RefObject<HTMLDivElement>} className={cn("relative overflow-hidden", className)}>
      {/* Placeholder skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted/50 animate-pulse" />
      )}
      
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          {...motionProps}
        />
      )}
    </div>
  );
};
