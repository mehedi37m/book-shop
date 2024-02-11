import MyFooter from "../../../components/MyFooter/MyFooter";
import Banner from "../Banner/Banner";
import FavoriteBooks from "../FavoriteBooks/FavoriteBooks";
import NewBooks from "../NewBooks/NewBooks";
import OtherBooks from "../OtherBooks/OtherBooks";
import PromoBanner from "../PromoBanner/PromoBanner";
import Review from "../Review/Review";


const Home = () => {
    return (
        <div className="h-screen">
         <Banner></Banner>
         <FavoriteBooks></FavoriteBooks>
         <NewBooks></NewBooks>
         <PromoBanner></PromoBanner>
         <OtherBooks></OtherBooks>
         <Review></Review>
         <MyFooter></MyFooter>
        </div>
    );
};

export default Home;