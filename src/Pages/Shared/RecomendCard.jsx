/* eslint-disable react/prop-types */


const RecomendCard = ({ item }) => {
    return (
        <div className="w-[390px]  overflow-hidden aspect-square relative cursor-pointer group bg-[#F3F3F3] h-[510px]">
            <img className=" object-cover w-full group-hover:scale-110 transition " src={item.image} alt="" />
            <div className="absolute right-3 top-3">
                <p className="text-white bg-slate-900 font-bold text-lg px-4 py-2 ">$ {item.price}</p>
            </div>
            <h1 className="text-center my-4 text-2xl font-semibold">{item.name}</h1>
            <p className="text-center h-24 mx-10">{item.recipe}</p>
            <div className="flex  justify-center">
                <button className="text-yellow-600 uppercase px-4 py-2 btn hover:bg-slate-900 border-b-4 border-b-yellow-600 my-4">Add to cart</button>
            </div>
        </div>
    );
};

export default RecomendCard;