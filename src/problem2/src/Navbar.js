import TokenPriceList from "./TokenListPrice";
import {useEffect, useState} from "react";


const Navbar = () => {
    const [tokenPrice, setTokenPrice] = useState([]);

    const handleClickTokenPrice = () => {
      alert("Opening Json Server")
      window.open('http://localhost:8000/tokenPrice');
    }

    const handleClickAboutMe = () => {
      alert("Redirecting to LinkedIn")
      window.open('https://www.linkedin.com/in/yi-shen-goh-4b95221a5/')
    }
        

    return (
      <nav className="navbar">
        <h1>Jae's Token Exchange</h1>
        <div className="links">
          <button onClick={handleClickAboutMe}>About me</button>
          <button onClick={handleClickTokenPrice}>View Token Price</button>
        </div>
      </nav>
    );
  }
   
  export default Navbar;