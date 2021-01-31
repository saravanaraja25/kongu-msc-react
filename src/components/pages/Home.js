import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../img/slider1.JPG'
import slide2 from '../../img/slider2.JPG'

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function Home() {
    return (
        <div className="home-page">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                autoplay               
                pagination={{ clickable: true }}
                height={40}
            >
                <SwiperSlide><img className="w-100" src={slide1} alt="slide1"/></SwiperSlide>
                <SwiperSlide><img className="w-100" src={slide1} alt="slide1"/></SwiperSlide>            
            </Swiper>
            <div className="container">
            	Home
            </div>
        </div>
    )
}

export default Home
