import {useEffect, useState} from "react";
import TokenPriceList from "./TokenListPrice";
import useFetch from "./useFetch"; 

const Home = () => {
    const {tokenPrice} = useFetch();
    const [sell, setSell] = useState('ETH');
    const [buy, setBuy] = useState('USD');

    const exchangeHandler = () => {
      alert("Exchanged Succesful!");
      window.location.reload();
    }
    
    return ( 
        <div className="home">
            <div className="Token">
              <h1>Exchange</h1>
                <TokenPriceList/>
                <button id="exchangebutton" onClick={exchangeHandler}>Exchange!</button>

            </div>
        </div>
     );

}
 
export default Home;