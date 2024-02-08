import React from 'react';
import bookImg from '../../../assets/book-image/science.jpg';
import { Link } from "react-router-dom";

const NewBooks = () => {
    return (
        <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <img src={bookImg} alt="" className='rounded md:w-10/12' />
            </div>
            <div className='md:w-1/2 space-y-6'>
                <h1 className='text-5xl my-5 md:w-3/4 leading-snug'>Find Your Favorite <span className='text-blue-700'>Book Here!</span></h1>
                <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quae illum aspernatur vitae nihil dolorum quo quibusdam mollitia explicabo! Accusamus, omnis iusto voluptatibus deleniti illo aperiam quod eum expedita animi!</p>

                {/* stats */}
                <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                    <div>
                        <h1 className='text-3xl font-bold'>800+</h1>
                        <p className='text-base'>Book Listing</p>
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold'>500+</h1>
                        <p className='text-base'>Register Users</p>
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold'>1000+</h1>
                        <p className='text-base'>PDF Download</p>
                    </div>
                </div>

                <Link to='/shop' className='mt-12 block' ><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>



            </div>
            
        </div>
    );
};

export default NewBooks;