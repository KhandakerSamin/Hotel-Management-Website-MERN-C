import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle";
import { FaUsers } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";



const AllUsers = () => {
    const axiosecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosecure.get('/users');
            return res.data;
        }
    })

    const handleDelete = (item) => {
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
                axiosecure.delete(`/users/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted User!",
                                text: "Your seltected user deleted successfully.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handleMakeAdmin = item => {

        Swal.fire({
            title: "Want to make him/her admin?",
            text: "You wont be able to revert this",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Promote "
        }).then((result) => {
            if (result.isConfirmed) {
                axiosecure.patch(`/users/admin/${item._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Maked Admin!",
                                text: `${item.name} is an admin now !`,
                                icon: "success"
                            });
                        } else {
                            Swal.fire({
                                title: "Already Admin",
                                text: "You can make admin twice",
                                icon: "error"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div className="bg-[#F6F6F6] w-full h-full mb-20">
            <SectionTitle heading={'MANAGE ALL USERS'}
                subHeading={'How many??'}></SectionTitle>
            <div className="w-[990px] min-h-[calc(100vh-300px)] bg-white mx-auto p-12">

                <div className="flex justify-between items-center ">
                    <h1 className="uppercase font-bold text-4xl">Total Users: {users.length}</h1>


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
                                {/* <th>ITEM IMAGE</th> */}
                                <th>NAME</th>
                                <th>Email</th>
                                <th>ROLE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((item, index) => <tr key={item._id} >
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.email}</td>
                                    <td>
                                        {
                                            item.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(item)} className="btn hover:bg-yellow-500 bg-[#D1A054] rounded-lg p-2 ">

                                                <FaUsers className="text-white text-3xl"></FaUsers>
                                            </button>
                                        }
                                    </td>
                                    <th>
                                        <button
                                            onClick={() => handleDelete(item)}
                                            className="btn hover:bg-red-500 bg-[#B91C1C] rounded-lg p-2 ">

                                            <RiDeleteBin5Line className="text-white text-3xl" /></button>

                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
};

export default AllUsers;