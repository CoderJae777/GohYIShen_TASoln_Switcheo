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
    const clearHandler = () => {
      alert("Cleared all fields!")
      window.location.reload();
    }
    
    return ( 
        <div className="home">
            <div className="Token">
                <TokenPriceList/>
                <button id="clearbutton" onClick={clearHandler}>Clear</button>
                <button id="exchangebutton" onClick={exchangeHandler}>Exchange!</button>
            </div>
        </div>
     );

}
 
export default Home;