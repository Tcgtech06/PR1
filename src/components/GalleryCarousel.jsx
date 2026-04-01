import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.png';
import p4 from '../assets/img4.webp';

import './GalleryCarousel.css';

const GalleryCarousel = () => {
  const galleryItems = [
    { image: p1, label: 'Number 1', title: 'Intro', duration: '15:20' },
    { image: p2, label: 'Number 2', title: 'Process', duration: '10:45' },
    { image: p3, label: 'Number 3', title: 'Quality', duration: '08:30' },
    { image: p4, label: 'Number 4', title: 'Gallery', duration: '12:00' },
  ];

  return (
    <section className="gallery-carousel-section" style={{ background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, #ffffff 50%, rgba(34, 197, 94, 0.04) 100%)', paddingTop: '50px', paddingBottom: '50px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)', borderRadius: '50%' }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: '1' }}>
        <div style={{ textAlign: 'center', margin: '0 0 60px 0' }}>
          <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Our Gallery</h2>
          <div style={{ height: '3px', width: '50px', background: 'linear-gradient(90deg, var(--primary-color), var(--light-green))', margin: '0 auto' }}></div>
        </div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={1} // Start on the 2nd item since we only have 3 now
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="gallery-swiper"
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide key={index} className="gallery-slide">
              {({ isActive }) => (
                <div className={`gallery-slide-wrap ${isActive ? 'is-active' : ''}`}>
                  <div className="gallery-slide-image-container">
                    <img src={item.image} alt={`Gallery ${index + 1}`} />
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev-custom">
            <ChevronLeft size={24} />
          </div>
          <div className="swiper-button-next-custom">
            <ChevronRight size={24} />
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default GalleryCarousel;
