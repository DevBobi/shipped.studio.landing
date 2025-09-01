'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export default function InfiniteCarousel() {
  const carouselImages = [
    '/carousel/image 24.png',
    '/carousel/image 24-1.png',
    '/carousel/image 26.png',
    '/carousel/image 26-1.png',
    '/carousel/image 27.png',
    '/carousel/image 28.png',
    '/carousel/image 29.png',
    '/carousel/image 41.png',
    '/carousel/image 43.png',
  ]

  // Duplicate images for seamless infinite loop
  const duplicatedImages = [...carouselImages, ...carouselImages, ...carouselImages]

  return (
    <div className="w-full bg-white py-16 overflow-hidden">
      {/* First Row - Slides to Right */}
      <div className="mb-12">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={60}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          speed={20000}
          className="first-row-swiper"
        >
          {duplicatedImages.map((image, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <img 
                src={image} 
                alt={`Carousel item ${index + 1}`}
                className="h-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Second Row - Slides to Left */}
      <div className="mb-12">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={60}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={20000}
          className="second-row-swiper"
        >
          {duplicatedImages.map((image, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <img 
                src={image} 
                alt={`Carousel item ${index + 1}`}
                className="h-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Third Row - Slides to Right */}
      <div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={60}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          speed={20000}
          className="third-row-swiper"
        >
          {duplicatedImages.map((image, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <img 
                src={image} 
                alt={`Carousel item ${index + 1}`}
                className="h-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
