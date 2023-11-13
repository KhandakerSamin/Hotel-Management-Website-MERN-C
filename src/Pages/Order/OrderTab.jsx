/* eslint-disable react/jsx-key */

import FoodCard from "./FoodCard";

/* eslint-disable react/prop-types */
const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10'>
            {
               items.map( item => <FoodCard key={item._id} item={item}></FoodCard>) 
            }
        </div>
    );
};

export default OrderTab;