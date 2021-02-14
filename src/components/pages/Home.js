import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../img/slider1.JPG'
import objective from "../../img/objectivehome.JPG";
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
                <SwiperSlide><img className="w-100" src={slide2} alt="slide2"/></SwiperSlide>            
            </Swiper>
            	<div className="objective mt-4">
                    <div className="container">
                        <h3 className="text-center">Objective</h3>
                        <div className="row mt-5">
                            <div className="col-md-6 mb-3">
                                <img className="w-100" src={objective} alt="objective"/>
                            </div>
                            <div className="col-md-6">
                                <h4>Department of CT-PG</h4>
                                <p className="text-justify">The Department of Computer Technology (PG) is committed to generate Competent Professionals to become part of the Industry and Research Organizations at the National and International levels. Apart from specialized technical knowledge and skills, the programme conducted by the Department aims to develop all round personality by inculcating human values, honesty, sincerity, team spirit and work culture.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="stats mt-4">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-3">
                            <div className="col-md-4 mb-3">
                                <div className="card card-img">
                                    <div className="text-white text-center d-flex align-items-center single text-dark py-5 px-4">
                                        <div className="w-100">
                                            <i className="fas fa-users mb-1"></i>
                                            <h4>Total Seats Per Year</h4>
                                            <h2>60</h2>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card card-img">
                                    <div className="text-white text-center d-flex align-items-center single text-dark py-5 px-4">
                                        <div className="w-100">
                                            <i className="fas fa-chalkboard-teacher mb-1"></i>
                                            <h4>Total Faculty</h4>
                                            <h2>15</h2>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card card-img">
                                    <div className="text-white text-center d-flex align-items-center single text-dark py-5 px-4">
                                        <div className="w-100">
                                            <i className="fas fa-user-graduate mb-1"></i>
                                            <h4>Total Students</h4>
                                            <h2>300+</h2>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Home
