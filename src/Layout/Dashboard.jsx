import { NavLink, Outlet } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart()
    const isAdmin = true
    return (
        <div className="flex ">
            <div className="w-[280px]  min-h-full  p-[35px] bg-[#D1A054] ">
                
                <ul className="menu fixed gap-y-3">
                <div className="flex  flex-col">
                    <h1 className="font-bold text-xl">BISTRO BOSS</h1>
                    <h1 className="text-md font-semibold">Restaurant</h1>
                </div>

                    {
                        isAdmin? <>
                        <li className="">
                        <NavLink to='/dashboard/adminHome'>
                            <FaCartArrowDown />
                            Admin Home
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/addItems'>
                            <FaCartArrowDown />                            
                            Add Itmes
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/manageItems'>
                            <FaCartArrowDown />
                            Manage Itmes 
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/manageBooking'>
                            <FaCartArrowDown />
                            Manage bookings
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/allUsers'>
                            <FaCartArrowDown />
                            all users
                        </NavLink>
                    </li>
                
                        </>
                         :
                        <>
                        <li className="">
                        <NavLink to='/dashboard/home'>
                            <FaCartArrowDown />
                            User Home
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/reservation'>
                            <FaCartArrowDown />                            
                            Reservation
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/paymentHistory'>
                            <FaCartArrowDown />
                            Payment History
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/cart'>
                            <FaCartArrowDown />
                            My Cart ( {cart.length} )
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/addReview'>
                            <FaCartArrowDown />
                            Add Review
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/dashboard/bookings'>
                            <FaCartArrowDown />
                            My Booking
                        </NavLink>
                    </li></>
                    }

                    {/* Shared links */}

                    <div className="divider"></div> 
                    <li className="">
                        <NavLink to='/'>
                            <FaCartArrowDown />
                            Home
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/menu'>
                            <FaCartArrowDown />
                            Menu
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/order/Salads'>
                            <FaCartArrowDown />
                            Shop
                        </NavLink>
                    </li>
                    <li className="">
                        <NavLink to='/contactUs'>
                            <FaCartArrowDown />
                            Contact Us
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;