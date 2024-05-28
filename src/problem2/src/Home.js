import {useEffect, useState} from "react";
import TokenPriceList from "./TokenListPrice";

const Home = () => {
    const [tokenPrice, setTokenPrice] = useState([]);

  
    useEffect(()=>{
        fetch('http://localhost:8000/tokenPrice')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setTokenPrice(data);
          })
      }); 
    
    return ( 
        <div className="home">
            <div className="Token">
              <h1>Token Calculator</h1>
                {/* <TokenPriceList tokenPrice = {tokenPrice} title = "Token Prices"/> */}
            </div>
        </div>
     );
}
 
export default Home;