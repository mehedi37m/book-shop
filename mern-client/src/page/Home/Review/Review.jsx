import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar } from "react-icons/fa";
import { Avatar } from 'flowbite-react';
import proPic from '../../../assets/book-image/WhatsApp.jpg'

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
    return (
        <div className="my-12 px-4 lg:px-24">
            <h1 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h1>

            <div>
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-red-500 font-bold flex gap-2'>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
                <div className='mt-2'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum excepturi nisi accusamus neque. Voluptates inventore modi, architecto quia officia eius saepe accusamus vel velit, maiores animi neque in officiis reprehenderit!</p>
                    <Avatar className='w-10 mb-4' img={proPic} alt="avatar of Jese" rounded />
                    <h1 className='text-lg font-medium'>Mark Ping</h1>
                    <p className='text-base'>CEO ABC Company</p>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-red-500 font-bold flex gap-2'>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
                <div className='mt-2'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum excepturi nisi accusamus neque. Voluptates inventore modi, architecto quia officia eius saepe accusamus vel velit, maiores animi neque in officiis reprehenderit!</p>
                    <Avatar className='w-10 mb-4' img={proPic} alt="avatar of Jese" rounded />
                    <h1 className='text-lg font-medium'>Mark Ping</h1>
                    <p className='text-base'>CEO ABC Company</p>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-red-500 font-bold flex gap-2'>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
                <div className='mt-2'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum excepturi nisi accusamus neque. Voluptates inventore modi, architecto quia officia eius saepe accusamus vel velit, maiores animi neque in officiis reprehenderit!</p>
                    <Avatar className='w-10 mb-4' img={proPic} alt="avatar of Jese" rounded />
                    <h1 className='text-lg font-medium'>Mark Ping</h1>
                    <p className='text-base'>CEO ABC Company</p>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-red-500 font-bold flex gap-2'>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
                <div className='mt-2'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum excepturi nisi accusamus neque. Voluptates inventore modi, architecto quia officia eius saepe accusamus vel velit, maiores animi neque in officiis reprehenderit!</p>
                    <Avatar className='w-10 mb-4' img={proPic} alt="avatar of Jese" rounded />
                    <h1 className='text-lg font-medium'>Mark Ping</h1>
                    <p className='text-base'>CEO ABC Company</p>

                </div>
            </div>
        </SwiperSlide>
       
        
      </Swiper>
            </div>
        </div>
    );
};

export default Review;