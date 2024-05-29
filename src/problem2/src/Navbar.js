import TokenPriceList from "./TokenListPrice";
import {useEffect, useState} from "react";
import {Link} from 'react-router-dom';


const Navbar = () => {
    const [tokenPrice, setTokenPrice] = useState([]);

    // const handleClickTokenPrice = () => {
    //   alert("Opening Json Server")
    //   window.open('http://localhost:8000/tokenPrice');
    // }

    const handleClickAboutMe = () => {
      alert("Redirecting to LinkedIn")
      window.open('https://www.linkedin.com/in/yi-shen-goh-4b95221a5/')
    }   

    return (
      <nav className="navbar">
        <h1>Jae's Token Exchange</h1>
        <div className="links">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/ViewTokenDetails">
            <button>Token Details</button>
          </Link>
          <button onClick={handleClickAboutMe}>About me</button>
        </div>
      </nav>
    );
  }
   
  export default Navbar;