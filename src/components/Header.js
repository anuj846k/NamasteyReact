import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Use selectors
  const cart = useSelector((store) => store.cart.cartItems);
  console.log(cart);

  return (
    <header className="bg-white text-black shadow-md m-2 rounded-md ">  
      <div className="container mx-auto py-2 md:py-3 flex justify-between items-center">
        <div className="flex items-center ml-1">
          <Link to="/">
            <img
              className="transition  duration-300 transform hover:scale-110 md:w-20 md:h-20 h-12 w-12 rounded-full border-4 p-1  border-orange-500"
              src={LOGO_URL}
              alt="Logo"
            />
          </Link>
          <Link
            to="/"
            className="md:text-4xl text-2xl ml-2 font-bold transition duration-300 ease-in-out hover:text-orange-500"
          >
            FoodWing
          </Link>
        </div>
        <nav className="flex items-center space-x-4 ">
          <ul className="space-x-4 md:flex hidden ">
            <li>
              <Link to="/" className="text-lg hover:text-orange-500 ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-lg hover:text-orange-500 ">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-lg hover:text-orange-500 ">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/grocery" className="text-lg hover:text-orange-500 ">
                Grocery
              </Link>
            </li>
          </ul>
          <div className="flex items-center md:mr-4 text-3xl">
            <Link
              to="/cart"
              className="text-lg hover:text-orange-500 flex items-center"
            >
              <FiShoppingCart size={24} className="" />
              <span className="-mt-6 font-bold">{cart.length}</span>
            </Link>
          </div>

          <div className="md:flex hidden md:ml-1.5 items-center">
            <Link to="/login">
              <button
                className="text-lg bg-transparent border border-black px-6 py-1 rounded-full transition-colors hover:bg-black hover:text-white"
                onClick={() => setIsLoggedIn((prevState) => !prevState)}
              >
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </Link>

            {/* <li className="p-2 font-bold list-none">{loggedInUser}</li> */}
          </div>
          <li className="flex md:hidden p-2">
            <FiMenu className="text-3xl" />
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
