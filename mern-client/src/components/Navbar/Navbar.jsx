import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaBlog } from "react-icons/fa";
import { ImCross } from "react-icons/im";


const Navbar = () => {

 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [isSticky, setIsSticky] = useState(false);



//  toggle menu
const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
}
useEffect(()=>{
    const handleScroll = () => {
        if(window.scrollY > 100){
            setIsSticky(true);
        }
        else{
            setIsSticky(false);
        }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.addEventListener("scroll", handleScroll);
    }
},[])

// navItems 
const navItems = [
    {link: "Home", path:"/"},
    {link: "About", path:"/about"},
    {link: "Shop", path:"/shop"},
    {link: "Sell Your Book", path:"/admin/dashboard"},
    {link: "Blog", path:"/blog"},
]


    return (
        <div className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
           
          <nav className={`py-4 lg:px-24 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
            <div className="flex justify-between items-center text-base gap-8">
                {/* logo */}
                <Link to="/" className="text-2xl font-bold text-blue-700 flex items-center gap-2"><FaBlog className="inline-block"></FaBlog>Book</Link>

                {/* nav item */}
                <ul className="md:flex space-x-12 hidden">
                    {
                        navItems.map(({link, path})=><Link key={path} to={path} className="block text-base text-black uppercase hover:text-blue-700">{link}</Link>)
                    }
                </ul>

                {/* btn  */}
                  <div className="space-x-12 hidden lg:flex items-center">
                    <button><FaBars className="w-5 hover:text-blue-700"></FaBars></button>
                  </div>

                  {/* menu btn mobile */}
                  <div className="md:hidden"> 
                    <button onClick={toggleMenu}>
                        {
                            isMenuOpen ? <ImCross className="h-5 w5 text-black"></ImCross> : <FaBars className="h-5 w5 text-black"></FaBars>
                        }

                    </button>
                </div>
            </div>

            {/* navItems for devices */}

            <div className={`space-y-4 mt-16 bg-blue-950 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                     navItems.map(({link, path})=><Link key={path} to={path} className="block text-base text-white uppercase hover:text-blue-700">{link}</Link>)
                }
            </div>





          </nav>






        </div>
    );
};

export default Navbar;