/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const {_id , name , image, price, recipe} = item
    const {user} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if(user && user?.email ){
                // console.log(user.email , food)
                const cartItem = {
                    menuId : _id ,
                    email : user.email,
                    name, 
                    image,
                    price,
                    recipe
                }
                axiosSecure.post('/carts', cartItem)
                .then( res => {
                    console.log(res.data);
                    if(res.data.insertedId){
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                          });
                          // refetch cart ot update the cart item count
                          refetch();
                    }
                })
        }else{
            Swal.fire({
                title: "You are not logged in..",
                text: "Please login to add this in your cart !!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                //
                navigate('/login' ,{state:{from:location}})
                }
              });
        }
    }
    return (
        <div className="w-[390px]  overflow-hidden aspect-square relative cursor-pointer group bg-[#F3F3F3] h-[510px]">
            <img className=" object-cover w-full group-hover:scale-110 transition " src={image} alt="" />
            <div className="absolute right-3 top-3">
                <p className="text-white bg-slate-900 font-bold text-lg px-4 py-2 ">$ {price}</p>
            </div>
            <h1 className="text-center my-4 text-2xl font-semibold">{name}</h1>
            <p className="text-center h-24 mx-10">{recipe}</p>
            <div className="flex  justify-center">
                <button onClick={handleAddToCart} className="text-yellow-600 uppercase px-4 py-2 btn hover:bg-slate-900 border-b-4 border-b-yellow-600 my-4">Add to cart</button>
            </div>
        </div>
    )
};

export default FoodCard;