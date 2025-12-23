import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  parallaxSpeed?: number; // 0.1 = subtle, 0.3 = medium, 0.5 = strong
}

export const ParallaxImage = ({
  src,
  alt,
  className,
  parallaxSpeed = 0.2,
}: ParallaxImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to Y movement
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${parallaxSpeed * 50}%`, `${parallaxSpeed * 50}%`]
  );

  // Subtle scale effect
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.15, 1.1, 1.15]
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      {/* Placeholder skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted/50 animate-pulse" />
      )}
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};
