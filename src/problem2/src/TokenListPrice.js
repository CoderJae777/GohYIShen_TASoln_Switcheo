import {useEffect, useState} from "react";
import arrow_image from "./arrow.png";


const TokenPriceList = (props) => {

    const [sell, setSell] = useState('--Sell--');
    const [buy, setBuy] = useState('--Buy--');
    const tokenPrice = props.tokenPrice;
    const title = props.title;
    const tokens = tokenPrice.map((tokens)=>
        <>
        <option>        
        {tokens.currency} (USD {tokens.price}) 
        </option>
        </>
        
    )

    return (         
        <>
        
        <label id="sell-label">Sell</label>
        <select id="sell-select" value={sell} onChange={(e) => setSell(e.target.value)}>
            {tokens}
        </select>

        <img src={arrow_image} alt="Arrow Image"></img>
        
        <label id="buy-label">Buy</label>
        <select id="buy-select" value={buy} onChange={(e) => setBuy(e.target.value)}>
            {tokens}
        </select>
        
        <div>
        <p id="sell-output">{sell}</p>
        <p id="buy-output">{buy}</p>
        </div>
        
        </>

    );
}

export default TokenPriceList;