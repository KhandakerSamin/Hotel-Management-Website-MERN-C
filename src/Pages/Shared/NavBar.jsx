import { Link } from "react-router-dom";

const NavBar = () => {
    const navLinks = <>
        <Link to='/' ><li><a>HOME</a></li></Link>
        <Link to='/contactUs'><li><a>CONTACT US</a></li>
        </Link>
        <li><a>DASHBOARD</a></li>
        <Link to='/menu'><li><a>OUR MENU</a></li></Link>
        <Link to='/order/Salads'><li><a>OUR SHOP</a></li></Link>
        <Link to='/login'><li><a>Log in</a></li></Link>
    </>
    return (
        <div className="drawer max-w-screen-2xl mx-auto fixed z-10">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-opacity-40 bg-black text-white">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl">BISTRO BOSS</h1>
                            <h1 className="text-md font-semibold">Restaurant</h1>
                        </div>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            {navLinks}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;