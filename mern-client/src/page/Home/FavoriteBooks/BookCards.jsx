import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'

const BookCards = ({headline, books}) => {
    return (
        <div className="my-16 px-4 lg:px-24">
            <h1 className="text-5xl text-center font-bold text-black my-5">{headline}</h1>


           <div className='mt-14'>

           <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
       {
        books.map(book => <SwiperSlide key={book._id}>
            <Link to={`/book/${book._id}`}>
                <div className='relative'>
                    <img src={book.image} alt="" />
                    <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                        <FaShoppingCart className='w-4 h-4 text-white'></FaShoppingCart>
                    </div>
                </div>
                <div>
                    <div>
                    <h1>{book.bookTitle}</h1>
                    <h1>{book.authorName}</h1>
                    </div>
                    <div>
                        <p>$30.00</p>
                    </div>
                </div>
            </Link>
        </SwiperSlide> )
       }
      </Swiper>

           </div>


        </div>
    );
};

export default BookCards;