import { Link } from "react-router-dom";


const PromoBanner = () => {
    return (
        <div className="mt-16 py-12 bg-teal-100 px-4 lg:px-24">
            <div>
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6 leading-snug">2024 National Book Awards for Fiction Shortlist</h1>

                    <Link to='/shop' className=' block' ><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default PromoBanner;