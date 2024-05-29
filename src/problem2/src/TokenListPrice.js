import {useEffect, useState} from "react";
import arrow_image from "./arrow.png";


const TokenPriceList = (props) => {

    const [sell, setSell] = useState('--Selling--');
    const [buy, setBuy] = useState('--Buying--');
    const [sellPrice, setSellPrice] = useState('- USD 0');
    const [buyPrice, setBuyPrice] = useState('+ USD 0');
    const tokenPrice = props.tokenPrice;
    const tokens = tokenPrice.map((tokens)=>
        <>
        <option>        
        {tokens.currency}
        </option>
        </>    )
        
    return (         
        <>
        
        <div id="sell-all">
        <label id="sell-label">Sell</label>
        <select id="sell-select" value={sell} onChange={(e) => setSell(e.target.value)}>
            {tokens}
        </select>
        </div>
        
        <div id="buy-all">
        <label id="buy-label">Buy</label>
        <select id="buy-select" value={buy} onChange={(e) => setBuy(e.target.value)}>
            {tokens}
        </select>
        </div>
        
        <div id="transaction">
        <label id="exchange-confirmation">Confirmation</label>
        <p id="sell-output">{sell}</p>
        <p id="sellPrice">{sellPrice}</p>
        <img src={arrow_image} alt="Arrow Image"></img>
        <p id="buy-output">{buy}</p>
        <p id="buyPrice">{buyPrice}</p>
        </div>

        </>

    );
}

export default TokenPriceList;