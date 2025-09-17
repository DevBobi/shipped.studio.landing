"use client";

import { useRef, useCallback, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function OptimizedInfiniteCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Use Framer Motion's scroll progress hook
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // All images combined
  const allImages = useMemo(
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
        src: "/carousel/image-8.jpg",
        title: "Crunkspot",
        subtitle: "Web3 music marketplace for artists.",
      },
      {
        src: "/carousel/image-9.png",
        title: "Ultra Woman",
        subtitle: "Modern women's fashion and lifestyle platform.",
      },
      {
        src: "/carousel/image-10.png",
        title: "Meta Frenchies",
        subtitle: "NFT collection featuring French Bulldog characters.",
      },
      {
        src: "/carousel/image-11.png",
        title: "Goolops",
        subtitle: "Next.js application for modern web development.",
      },
      {
        src: "/carousel/image-12.png",
        title: "Self Loathing",
        subtitle: "Interactive platform exploring mental health themes.",
      },
      {
        src: "/carousel/image-13.png",
        title: "Psycho Cats",
        subtitle: "Unique NFT collection with feline characters.",
      },
      {
        src: "/carousel/image-14.png",
        title: "Tiger NFT",
        subtitle: "Exclusive tiger-themed NFT marketplace.",
      },
      {
        src: "/carousel/image-15.png",
        title: "WL Safehouse",
        subtitle: "Whitelist management for NFT communities.",
      },
      {
        src: "/carousel/image-16.png",
        title: "Fiverr Project",
        subtitle: "Professional freelance services platform.",
      },
      {
        src: "/carousel/image-17.png",
        title: "MMB NFT",
        subtitle: "Multi-media blockchain NFT collection.",
      },
    ],
    []
  );

  // Distribute images across three rows (6, 6, 5)
  const firstRowImages = useMemo(() => allImages.slice(0, 6), [allImages]);
  const secondRowImages = useMemo(() => allImages.slice(6, 12), [allImages]);
  const thirdRowImages = useMemo(() => allImages.slice(12, 17), [allImages]);

  // Create infinite arrays for each row
  const firstRowInfinite = useMemo(() => {
    const result = [];
    for (let i = 0; i < 4; i++) {
      result.push(...firstRowImages);
    }
    return result;
  }, [firstRowImages]);

  const secondRowInfinite = useMemo(() => {
    const result = [];
    for (let i = 0; i < 4; i++) {
      result.push(...secondRowImages);
    }
    return result;
  }, [secondRowImages]);

  const thirdRowInfinite = useMemo(() => {
    const result = [];
    for (let i = 0; i < 4; i++) {
      result.push(...thirdRowImages);
    }
    return result;
  }, [thirdRowImages]);

  // Image width constant
  const IMAGE_WIDTH = 320;

  // Calculate row widths
  const firstRowSetWidth = useMemo(
    () => firstRowImages.length * IMAGE_WIDTH,
    [firstRowImages.length]
  );
  const secondRowSetWidth = useMemo(
    () => secondRowImages.length * IMAGE_WIDTH,
    [secondRowImages.length]
  );
  const thirdRowSetWidth = useMemo(
    () => thirdRowImages.length * IMAGE_WIDTH,
    [thirdRowImages.length]
  );

  // Create smooth transform values with springs for better motion feel
  const firstRowX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -firstRowSetWidth]),
    { stiffness: 100, damping: 30, mass: 0.8 }
  );

  const secondRowX = useSpring(
    useTransform(scrollYProgress, [0, 1], [-secondRowSetWidth, 0]),
    { stiffness: 100, damping: 30, mass: 0.8 }
  );

  const thirdRowX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -thirdRowSetWidth * 1.2]),
    { stiffness: 100, damping: 30, mass: 0.8 }
  );

  // Enhanced image component with motion
  const ImageCard = useCallback(
    ({
      image,
      index,
    }: {
      image: { src: string; title: string; subtitle: string };
      index: number;
    }) => (
      <motion.div
        key={`${image.src}-${index}`}
        className="flex-shrink-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: (index % 6) * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <Image
          src={image.src}
          alt={`${image.title} - ${image.subtitle}`}
          width={400}
          height={400}
          className="h-64 w-auto sm:h-72 md:h-80 lg:h-96 object-contain border border-gray-200 transition-shadow duration-300 hover:shadow-lg"
          style={{
            borderRadius: "15px",
          }}
          loading="lazy"
          onError={(e) => {
            console.error(`Failed to load image: ${image.src}`);
            e.currentTarget.style.display = "none";
          }}
        />
      </motion.div>
    ),
    []
  );

  return (
    <div
      ref={containerRef}
      className="w-full py-8 sm:py-12 md:py-16 space-y-3 overflow-hidden"
    >
      {/* First Row - Moves Left */}
      <motion.div
        className="flex gap-3"
        style={{
          x: firstRowX,
          width: "max-content",
        }}
      >
        {firstRowInfinite.map((image, index) => (
          <ImageCard key={`row1-${index}`} image={image} index={index} />
        ))}
      </motion.div>

      {/* Second Row - Moves Right */}
      <motion.div
        className="flex gap-3"
        style={{
          x: secondRowX,
          width: "max-content",
        }}
      >
        {secondRowInfinite.map((image, index) => (
          <ImageCard key={`row2-${index}`} image={image} index={index} />
        ))}
      </motion.div>

      {/* Third Row - Moves Left (Faster) */}
      {/* <motion.div
        className="flex gap-3"
        style={{
          x: thirdRowX,
          width: "max-content",
        }}
      >
        {thirdRowInfinite.map((image, index) => (
          <ImageCard key={`row3-${index}`} image={image} index={index} />
        ))}
      </motion.div> */}
    </div>
  );
}
