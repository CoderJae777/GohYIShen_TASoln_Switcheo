import TokenPriceList from "./TokenListPrice";
import {useEffect, useState} from "react";


const Navbar = () => {
    const handleClickTokenPrice = () => {
        // alert("No token price yet");
        <TokenPriceList/>
    }
        
    const [tokenPrice, setTokenPrice] = useState([]);

    return (
      <nav className="navbar">
        <h1>Jae's Token Exchange</h1>
        <div className="links">
          <button>About me</button>
          <button onClick={handleClickTokenPrice}>View Token Price</button>
        </div>
      </nav>
    );
  }
   
  export default Navbar;