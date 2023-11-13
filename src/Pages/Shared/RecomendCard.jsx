/* eslint-disable react/prop-types */


const RecomendCard = ({ item }) => {
    return (
        <div className="w-[390px] bg-[#F3F3F3]  h-[480px]">
            <img className="w-[400px] h-[250px]" src={item.image} alt="" />
            <h1 className="text-center my-4 text-2xl font-semibold">{item.name}</h1>
            <p className="text-center mx-10">{item.recipe}</p>
            <div className="flex items-center justify-center">
                <button className="text-yellow-500 uppercase px-4 py-2 btn hover:bg-slate-900 border-b border-b-yellow-600 my-4">Add to cart</button>
            </div>
        </div>
    );
};

export default RecomendCard;