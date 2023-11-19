/* eslint-disable react/prop-types */

const MenuItem = ({item}) => {
    const {image, name, price, recipe} = item
    return (
        <div className="flex items-start space-x-2">
            <img style={{borderRadius: ' 0 200px 200px 200px'}} className="w-[100px] h-[92px]" src={image} alt="" />
            <div>
                <h3 className="uppercase text-xl">{name}------------------</h3>
                <p>{recipe}</p>
            </div>
            <h1 className="text-yellow-500 mt-1 text-xl">${price}</h1>
        </div>
    );
};

export default MenuItem;