/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Cover from "./Cover";
import MenuItem from "./MenuItem";

const MenuCategory = ({items, title, coverImg  }) => {

    return (
        <div>
            <Cover img={coverImg} title={title}></Cover>
            <div className='grid max-w-screen-xl mx-auto gap-10 grid-cols-1 md:grid-cols-2'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='flex mb-24 items-center justify-center mt-10 '>
                <Link to={`/order/${title}`}><button className='btn btn-outline border-0 border-b-4'>ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>

        </div>
    );
};

export default MenuCategory;