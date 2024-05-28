import {useEffect, useState} from "react";
import TokenPriceList from "./TokenListPrice";
import useFetch from "./useFetch"; 
import Create from "./Create";

const Home = () => {
    const {tokenPrice} = useFetch();

    const exchangeHandler = () => {
      alert("Exchanged Succesful!")
    }
    
    return ( 
        <div className="home">
            <div className="Token">
              <h1>Token Exchange</h1>
                {/* Dropdown here(?) */}
                <Create/>
                <button id="exchangebutton" onClick={exchangeHandler}>Exchange!</button>
                <TokenPriceList tokenPrice = {tokenPrice} title = "Token Prices"/>

            </div>
        </div>
     );

}
 
export default Home;