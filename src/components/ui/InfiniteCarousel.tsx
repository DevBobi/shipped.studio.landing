"use client";

import { useEffect, useRef, useCallback, useMemo } from "react";

export default function OptimizedInfiniteCarousel() {
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);
  const thirdRowRef = useRef<HTMLDivElement>(null);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  const carouselImages = useMemo(
    () => [
      {
        src: "/carousel/image-1.jpg",
        title: "Test Whiz",
        subtitle: "All-in-one AI platform for students.",
      },
      {
        src: "/carousel/image-2.jpg",
        title: "Krillion AI",
        subtitle: "AI ad maker for quick, quality ads.",
      },
      {
        src: "/carousel/image-3.jpg",
        title: "Find me leads",
        subtitle: "AI bot for finding leads on Reddit.",
      },
      {
        src: "/carousel/image-4.png",
        title: "Aura Maxxing",
        subtitle: "iOS app for face analysis and dating.",
      },
      {
        src: "/carousel/image-5.png",
        title: "Content Wizard",
        subtitle: "Curated open-source boilerplates.",
      },
      {
        src: "/carousel/image-6.jpg",
        title: "Opensource boilerplates",
        subtitle: "Starter kits for modern apps.",
      },
      {
        src: "/carousel/image-7.jpg",
        title: "Re-engage",
        subtitle: "AI tool to repurpose content for social.",
      },
      {
        src: "/carousel/image-8.png",
        title: "Crunkspot",
        subtitle: "Web3 music marketplace for artists.",
      },
    ],
    []
  );

  // Optimized infinite array creation
  const infiniteImages = useMemo(() => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(...carouselImages);
    }
    return result;
  }, [carouselImages]);

  // Memoize constants - reduced image width for compactness
  const IMAGE_WIDTH = 220;
  const totalSetWidth = useMemo(
    () => carouselImages.length * IMAGE_WIDTH,
    [carouselImages.length]
  );

  // Optimized scroll handler using useCallback
  const handleScroll = useCallback(() => {
    if (tickingRef.current) return;

    tickingRef.current = true;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;

      // Skip minimal scroll changes
      if (Math.abs(scrollY - lastScrollYRef.current) < 3) {
        tickingRef.current = false;
        return;
      }

      lastScrollYRef.current = scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate scroll progress
      const maxScroll = documentHeight - windowHeight;
      if (maxScroll <= 0) {
        tickingRef.current = false;
        return;
      }

      const scrollProgress = scrollY / maxScroll;
      const loopedProgress = scrollProgress % 1;

      // Batch DOM updates
      const translateX1 = loopedProgress * totalSetWidth;
      const translateX2 = loopedProgress * totalSetWidth;
      const translateX3 = loopedProgress * totalSetWidth * 1.5;

      if (firstRowRef.current) {
        (
          firstRowRef.current as HTMLDivElement
        ).style.transform = `translate3d(-${translateX1}px, 0, 0)`;
      }

      if (secondRowRef.current) {
        (
          secondRowRef.current as HTMLDivElement
        ).style.transform = `translate3d(${translateX2}px, 0, 0)`;
      }

      if (thirdRowRef.current) {
        (
          thirdRowRef.current as HTMLDivElement
        ).style.transform = `translate3d(-${translateX3}px, 0, 0)`;
      }

      tickingRef.current = false;
    });
  }, [totalSetWidth]);

  useEffect(() => {
    // Use passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Simplified image component without hover effects
  const ImageCard = useCallback(
    ({
      image,
      index,
    }: {
      image: { src: string; title: string; subtitle: string };
      index: number;
    }) => (
      <div key={`${image.src}-${index}`} className="flex-shrink-0">
        <img
          src={image.src}
          alt={`${image.title} - ${image.subtitle}`}
          loading="lazy"
          decoding="async"
          className="h-48 w-auto sm:h-56 md:h-64 lg:h-72 object-contain border border-gray-200"
          style={{
            borderRadius: "15px",
          }}
        />
      </div>
    ),
    []
  );

  return (
    <div className="w-full py-8 sm:py-12 md:py-16 space-y-3 overflow-hidden">
      {/* First Row - Moves Right */}
      <div>
        <div
          ref={firstRowRef}
          className="flex gap-3 will-change-transform"
          style={{
            width: "max-content",
            transform: "translate3d(0, 0, 0)", // Initialize hardware acceleration
          }}
        >
          {infiniteImages.map((image, index) => (
            <ImageCard key={`row1-${index}`} image={image} index={index} />
          ))}
        </div>
      </div>

      {/* Second Row - Moves Left */}
      <div className="">
        <div
          ref={secondRowRef}
          className="flex gap-3 will-change-transform"
          style={{
            width: "max-content",
            transform: "translate3d(0, 0, 0)",
          }}
        >
          {infiniteImages.map((image, index) => (
            <ImageCard key={`row2-${index}`} image={image} index={index} />
          ))}
        </div>
      </div>

      {/* Third Row - Moves Right (Faster) */}
      <div>
        <div
          ref={thirdRowRef}
          className="flex gap-3 will-change-transform"
          style={{
            width: "max-content",
            transform: "translate3d(0, 0, 0)",
          }}
        >
          {infiniteImages.map((image, index) => (
            <ImageCard key={`row3-${index}`} image={image} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
