import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("Header render");
  //If no dependencies array => useEffect is called on every render
  //If dependency array is empty=[]=>useEffect is called only once after the first render() or just once it is called ;
  //If dependency array has some values=>useEffect is called only when the values in the dependency array is updated;

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL}></img>
        <Link to="/">Foody</Link>
      </div>
      <div className="navitems">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/About">About</Link>
          </li>

          <li>
            <Link to="/Contact">Contact</Link>
          </li>

          <li>
            <Link to="/Cart">Cart</Link>
          </li>

          <button
            id="login"
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
