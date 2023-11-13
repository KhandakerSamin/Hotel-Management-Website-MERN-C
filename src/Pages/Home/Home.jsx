import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import Fetured from "./Fetured";
import PopulerMenu from "./PopulerMenu";
import Recomend from "./Recomend";
import SingleBanner from "./SingleBanner";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Bristo Boss | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <SingleBanner></SingleBanner>
            <PopulerMenu></PopulerMenu>
            <Recomend></Recomend>
            <Fetured></Fetured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;