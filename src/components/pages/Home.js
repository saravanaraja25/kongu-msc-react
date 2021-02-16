import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../img/slider1.JPG'
import objective from "../../img/objectivehome.JPG";
import slide2 from '../../img/slider2.JPG'
import testi1 from '../../img/testi1.jpeg'
import testi2 from '../../img/testi-2.jpeg'
import tcs from '../../img/tcs-logo.png'
import coda from '../../img/coda-logo.png'
import firstqa from '../../img/firstqa-logo.svg'
import cts from '../../img/cts-logo.svg'

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function Home() {
    return (
        <div className="home-page">
            <Swiper
                data-aos="fade-left"
                spaceBetween={30}
                slidesPerView={1}
                autoplay               
                pagination={{ clickable: true }}
                height={40}                
            >
                <SwiperSlide><img className="w-100" src={slide1} alt="slide1"/></SwiperSlide>
                <SwiperSlide><img className="w-100" src={slide2} alt="slide2"/></SwiperSlide>            
            </Swiper>
            	<div data-aos="fade-up" className="objective mt-4">
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
                <div data-aos="fade-right" className="callforadmission ">
                    <div className="container mt-4 mb-4 ">
                        <div className="text-center">
                            <h2>Call For Admission-60 Seats Only</h2>
                            <h4>Call - 9443942365 (HOD) </h4>
                        </div>
                    </div>
                </div>
                <div className="stats mb-4">
                    <div className="container mt-4">
                        <div className="row row-cols-1 row-cols-md-3">
                            <div className="col-md-4 mb-3">
                                <div data-aos="flip-left" className="card card-img">
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
                                <div data-aos="flip-right" className="card card-img">
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
                                <div data-aos="flip-up" className="card card-img">
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
                <div className="testimonials mt-4 mb-5">
                    <div className="container">
                        <h3 className="text-center mb-5">Testimonials</h3>
                        <Swiper
                            data-aos="zoom-in"
                            slidesPerView={1}
                            autoplay
                            spaceBetween={50}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                // when window width is >= 640px
                                500: {
                                slidesPerView: 2,
                                },
                            }}           
                        >
                            <SwiperSlide>
                                <div className="card testimonial-card">                                
                                    <div className="avatar d-flex justify-content-center white">
                                        <img src={testi1} className="w-25 mt-3 rounded"
                                        alt="testi1"/>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title text-center">Kalpana</h4>
                                        <h5 className="text-center">Application Security Specialist</h5>
                                        <h6 className="text-center">Cognizant</h6>
                                        <hr />
                                        <p className="text-justify"><i className="fas fa-quote-left"></i> I had the privilege of studying the best course in one of the esteemed institutions. My course laid a strong foundation to the software engineering expertise that I possess today. Experienced staffs, well-designed curriculum and excellent placement training has made many successful IT professionals and entrepreneurs. I would proudly say that I am an alumni of KEC CT - PG.
                                        </p>
                                    </div>
                                </div>    
                            </SwiperSlide>  
                            <SwiperSlide>
                                <div className="card testimonial-card">                               
                                    <div className="avatar d-flex justify-content-center white">
                                        <img src={testi2} className="w-25 mt-3 rounded"
                                        alt="testi2"/>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title text-center">Arunrajkumar Mohanasamy </h4>
                                        <h5 className="text-center">Consulting Technical Manager</h5>
                                        <h6 className="text-center">Oracle Financial Services Software Limited</h6>
                                        <hr />
                                        <p className="text-justify"><i className="fas fa-quote-left"></i> The Master's program in Software engineering prepares a student optimally for a career in one of the most important domains of the corporate world.  This course provides solid theoretical foundation on analytical and programming skills, also gives way to learn how to select the appropriate tools, processes, and algorithms for a variety of practical tasks.
                                        </p>
                                    </div>
                                </div>    
                            </SwiperSlide>         
                        </Swiper>
                    </div>
                </div>
                <div data-aos="fade-in-up" className="our-recruiters mt-2">
                    <div className="container mb-3">
                        <h3 className="text-center mb-5">Our Recruiters</h3>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={4}
                            autoplay                                           
                            height={40}                
                        >
                            <SwiperSlide><img className="w-100" src={tcs} alt="tcs"/></SwiperSlide>
                            <SwiperSlide><img className="w-100" src={firstqa} alt="cts"/></SwiperSlide>    
                            <SwiperSlide><img className="w-100" src={coda} alt="coda"/></SwiperSlide>
                            <SwiperSlide><img className="w-100 mt-md-3" src={cts} alt="cts"/></SwiperSlide> 
                        </Swiper>
                    </div>
                </div>
            </div>

    )
}

export default Home
