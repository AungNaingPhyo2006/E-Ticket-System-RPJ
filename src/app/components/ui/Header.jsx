import { Menu, ShoppingCart, X } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (route) => {
    navigate(route);
    setMenuOpen(false); // Close the drawer
  };

  return (
    <div className="fixed top-0 right-0 left-0 z-10 shadow bg-base-200 drawer">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={menuOpen}
        onChange={toggleMenu}
      />
      <div className="flex flex-col drawer-content ">
        <div className="w-full navbar bg-neutral text-neutral-content border-b-2 border-base-300 px-5">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
              <Menu color="white" />
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <Link to={"/"} className="font-bold text-lg sm:text-xl lg:text-2xl">
              E-Ticket Systems
            </Link>
          </div>
          <div className="flex-none hidden px-2 mx-2 lg:block">
            <div className="flex items-stretch gap-2">
              <Link
                className="btn btn-ghost btn-sm rounded-btn text-lg hover:bg-base-200 transition duration-300"
                to="/"
              >
                Home
              </Link>
              <Link
                className="btn btn-ghost btn-sm rounded-btn text-lg hover:bg-base-200 transition duration-300"
                to="/events"
              >
                Events
              </Link>
              <Link
                className="btn btn-ghost btn-sm rounded-btn text-lg hover:bg-base-200 transition duration-300"
                to="/sponsor"
              >
                Sponsor
              </Link>
              <Link
                className="btn btn-ghost btn-sm rounded-btn text-lg hover:bg-base-200 transition duration-300"
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex gap-5 items-center">
            {/* <Link to={"/my-cart"}>
              <button className="relative border border-gray-300 rounded-md px-3 py-2">
                <ShoppingCart size={"20"} color="white" />
                <span className="absolute rounded-2xl top-0 right-0 font-semibold translate-x-1/2 -translate-y-1/2 inline-block text-xs bg-red-500 text-gray-300 px-1 ">
                  0
                </span>
              </button>
            </Link> */}
            <div>
            <Link to={"/login"}>
              <button className=" border border-gray-300 b rounded-md px-4 py-2">
                <a className="text-gray-200 font-bold text-md">Sign In</a>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="h-screen w-80 bg-base-100 shadow-md p-4 ">
          {/* Close Button */}

          <div className="flex justify-between items-center mb-6 border-b border-gray-500 pb-4">
            <div>
              <a className="px-2 font-bold text-lg">E-Ticket Systems</a>
            </div>
            <div>
              <button
                className="p-2 rounded-md hover:bg-gray-600 active:bg-gray-700 transition duration-300"
                onClick={() => setMenuOpen(false)}
                aria-label="Close Drawer"
              >
                <X size={25} color="white" />
              </button>
            </div>
          </div>

          <ul className="space-y-6">
            <li>
              <button
                className="w-full text-left py-4 px-3 rounded-lg hover:bg-base-200 active:bg-base-300 transition duration-300 font-medium relative group"
                onClick={() => handleMenuClick("/")}
              >
                Home
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
            <li>
              <button
                className="w-full text-left py-4 px-3 rounded-lg hover:bg-base-200 active:bg-base-300 transition duration-300 font-medium relative group"
                onClick={() => handleMenuClick("/events")}
              >
                Events
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
            <li>
              <button
                className="w-full text-left py-4 px-3 rounded-lg hover:bg-base-200 active:bg-base-300 transition duration-300 font-medium relative group"
                onClick={() => handleMenuClick("/sponsor")}
              >
                Sponsor
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
            <li>
              <button
                className="w-full text-left py-4 px-3 rounded-lg hover:bg-base-200 active:bg-base-300 transition duration-300 font-medium relative group"
                onClick={() => handleMenuClick("/contact")}
              >
                Contact
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
