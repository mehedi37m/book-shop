import BannerCard from "./BannerCard";


const Banner = () => {
    return (
        <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 py-40 w-full">
            {/* left side */}
                <div className="md:w-1/2 space-y-8 h-full">
                     <h1 className="text-5xl font-bold leading-snug text-black">Buy and Sell Your Books <span className="text-blue-700">for the Best Prices</span></h1>
                     <p className="md:w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorum quisquam natus corporis harum tempora maxime dignissimos cumque est? Ipsam fuga aspernatur temporibus labore eos distinctio ad molestias excepturi amet quidem. Itaque dolorum architecto nisi totam veniam aliquam consequuntur blanditiis quo quas neque ut excepturi non velit, libero pariatur quidem.</p>

                     <div>
                        <input type="search" name="search" id="search" placeholder="Search a Book" className="py-2 px-2 rounded-sm outline-none" />
                        <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-sm">Search</button>
                     </div>
                </div>


            {/* right side */}
                <div>
                    
                     <BannerCard></BannerCard>
                </div>
            </div>
        </div>
    );
};

export default Banner;