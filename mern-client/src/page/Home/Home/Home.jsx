import Banner from "../Banner/Banner";
import FavoriteBooks from "../FavoriteBooks/FavoriteBooks";
import NewBooks from "../NewBooks/NewBooks";
import PromoBanner from "../PromoBanner/PromoBanner";


const Home = () => {
    return (
        <div className="h-screen">
         <Banner></Banner>
         <FavoriteBooks></FavoriteBooks>
         <NewBooks></NewBooks>
         <PromoBanner></PromoBanner>
        </div>
    );
};

export default Home;