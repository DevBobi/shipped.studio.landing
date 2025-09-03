'use client'

import { useEffect, useRef, useCallback, useMemo } from 'react'

export default function OptimizedInfiniteCarousel() {
  const firstRowRef = useRef<HTMLDivElement>(null)
  const secondRowRef = useRef<HTMLDivElement>(null)
  const thirdRowRef = useRef<HTMLDivElement>(null)
  const lastScrollYRef = useRef(0)
  const tickingRef = useRef(false)

  const carouselImages = useMemo(() => [
    { src: '/carousel/image 24.png', title: 'Creative Design', subtitle: 'Innovative Solutions' },
    { src: '/carousel/image 24-1.png', title: 'Modern Interface', subtitle: 'User Experience' },
    { src: '/carousel/image 26.png', title: 'Digital Art', subtitle: 'Visual Excellence' },
    { src: '/carousel/image 26-1.png', title: 'Web Development', subtitle: 'Code & Design' },
    { src: '/carousel/image 27.png', title: 'Mobile Apps', subtitle: 'Cross Platform' },
    { src: '/carousel/image 28.png', title: 'UI/UX Design', subtitle: 'User Centered' },
    { src: '/carousel/image 29.png', title: 'Brand Identity', subtitle: 'Visual Branding' },
    { src: '/carousel/image 41.png', title: 'Illustration', subtitle: 'Art & Creativity' },
    { src: '/carousel/image 43.png', title: 'Digital Marketing', subtitle: 'Growth Strategy' },
  ], [])

  // Optimized infinite array creation
  const infiniteImages = useMemo(() => {
    const result = []
    for (let i = 0; i < 3; i++) {
      result.push(...carouselImages)
    }
    return result
  }, [carouselImages])

  // Memoize constants
  const IMAGE_WIDTH = 220
  const totalSetWidth = useMemo(() => carouselImages.length * IMAGE_WIDTH, [carouselImages.length])

  // Optimized scroll handler using useCallback
  const handleScroll = useCallback(() => {
    if (tickingRef.current) return
    
    tickingRef.current = true
    requestAnimationFrame(() => {
      const scrollY = window.scrollY
      
      // Skip minimal scroll changes
      if (Math.abs(scrollY - lastScrollYRef.current) < 3) {
        tickingRef.current = false
        return
      }
      
      lastScrollYRef.current = scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Calculate scroll progress
      const maxScroll = documentHeight - windowHeight
      if (maxScroll <= 0) {
        tickingRef.current = false
        return
      }
      
      const scrollProgress = scrollY / maxScroll
      const loopedProgress = scrollProgress % 1
      
      // Batch DOM updates
      const translateX1 = loopedProgress * totalSetWidth
      const translateX2 = loopedProgress * totalSetWidth
      const translateX3 = loopedProgress * totalSetWidth * 1.5
      
      if (firstRowRef.current) {
        (firstRowRef.current as HTMLDivElement).style.transform = `translate3d(-${translateX1}px, 0, 0)`
      }
      
      if (secondRowRef.current) {
        (secondRowRef.current as HTMLDivElement).style.transform = `translate3d(${translateX2}px, 0, 0)`
      }
      
      if (thirdRowRef.current) {
        (thirdRowRef.current as HTMLDivElement).style.transform = `translate3d(-${translateX3}px, 0, 0)`
      }
      
      tickingRef.current = false
    })
  }, [totalSetWidth])

  useEffect(() => {
    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  // Memoized image component to prevent unnecessary re-renders
  const ImageCard = useCallback(({ image, index }: { image: { src: string; title: string; subtitle: string }; index: number }) => (
    <div key={`${image.src}-${index}`} className="flex-shrink-0 relative group">
      <img 
        src={image.src} 
        alt={`${image.title} - ${image.subtitle}`}
        loading="lazy"
        decoding="async"
        className="h-64 w-auto sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg"
        style={{
          filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.06))',
          willChange: 'transform, opacity'
        }}
      />
      <div 
        className="absolute inset-0 transition-opacity duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg cursor-pointer backdrop-blur-sm"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      >
        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center mb-2 px-3 drop-shadow-lg">
          {image.title}
        </h3>
        <p className="text-white text-base sm:text-lg font-medium text-center px-3 drop-shadow-lg">
          {image.subtitle}
        </p>
      </div>
    </div>
  ), [])

  return (
          <div className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* First Row - Moves Right */}
      <div className="mb-8 sm:mb-10 md:mb-12">
        <div 
          ref={firstRowRef}
          className="flex gap-5 will-change-transform"
          style={{ 
            width: 'max-content',
            transform: 'translate3d(0, 0, 0)' // Initialize hardware acceleration
          }}
        >
          {infiniteImages.map((image, index) => (
            <ImageCard key={`row1-${index}`} image={image} index={index} />
          ))}
        </div>
      </div>

      {/* Second Row - Moves Left */}
      <div className="mb-8 sm:mb-10 md:mb-12">
        <div 
          ref={secondRowRef}
          className="flex gap-5 will-change-transform"
          style={{ 
            width: 'max-content',
            transform: 'translate3d(0, 0, 0)'
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
          className="flex gap-5 will-change-transform"
          style={{ 
            width: 'max-content',
            transform: 'translate3d(0, 0, 0)'
          }}
        >
          {infiniteImages.map((image, index) => (
            <ImageCard key={`row3-${index}`} image={image} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}