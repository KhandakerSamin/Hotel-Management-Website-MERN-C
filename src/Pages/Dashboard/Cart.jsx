import useCart from "../../hooks/useCart";
import SectionTitle from '../../Components/SectionTitle';
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { RiDeleteBin5Line } from "react-icons/ri";

const Cart = () => {
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure()

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure to Delete it?",
            text: "You wont be able to revert this",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted !",
                                text: "Your ordered item deleted successfully.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="bg-[#F6F6F6] w-full h-full mb-20">
            <SectionTitle heading={'wanna add more?'}
                subHeading={'My Cart'}></SectionTitle>
            <div className="w-[990px] min-h-[calc(100vh-300px)] bg-white mx-auto p-12">

                <div className="flex justify-between items-center ">
                    <h1 className="uppercase font-bold text-4xl">Total orders: {cart.length}</h1>
                    <h1 className="uppercase font-bold text-4xl">
                        Total price:$ {totalPrice} </h1>
                    <button className="btn hover:bg-yellow-700 text-white  bg-[#D1A054]">Pay</button>
                </div>

                <div className="overflow-x-auto mt-16">
                    <table className="table ">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white">
                            <tr>
                                <th>
                                    <label>

                                    </label>
                                </th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id} >
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>$ {item.price}</td>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn hover:bg-red-500 bg-[#B91C1C] rounded-lg p-2 ">
                                            <RiDeleteBin5Line className="text-white text-3xl" /></button>
                                    </th>
                                </tr>)
                            }
                            {/* row 1 */}


                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
};

export default Cart;