import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import menuBanner from '../../assets/menu/banner3.jpg'
import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "../Shared/MenuItem";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "../Shared/MenuCategory";
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

const Menu = () => {

    const [menu] = useMenu()
    const offers = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')


    return (
        <div className="">
            <Helmet>
                <title>Bristo Boss | Menu</title>
            </Helmet>
            <Cover
                img={menuBanner}
                title={'Our Menu'}
                subtitle={'Would you like to try a dish?'}></Cover>
            <SectionTitle
                heading={"today's offer"}
                subHeading={"Don't miss"}></SectionTitle>
            <div className='grid max-w-screen-xl mx-auto gap-10 grid-cols-1 md:grid-cols-2'>
                {
                    offers.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>

            <div className='flex mb-24 items-center justify-center mt-10 '>
                <button className='btn btn-outline border-0 border-b-4'>ORDER YOUR FAVOURITE FOOD</button>
            </div>

            <MenuCategory items={desserts} title={'Dessert'} coverImg={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title={'Pizza'} coverImg={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={'Salads'} coverImg={saladImg}></MenuCategory>
            <MenuCategory items={soups} title={'Soups'} coverImg={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;