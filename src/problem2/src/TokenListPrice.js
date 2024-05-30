import {useEffect, useState} from "react";
import arrow_image from "./arrow.png";
import useFetch from "./useFetch";

const TokenPriceList = (props) => {

    const {tokenPrice} = useFetch();
    const [sell, setSell] = useState('--Selling--');
    const [buy, setBuy] = useState('--Buying--');
    const [sellPrice, setSellPrice] = useState('- USD 0');
    const [buyPrice, setBuyPrice] = useState('+ USD 0');
    const [sellAmount, setSellAmount] = useState("0");
    const [buyAmount, setBuyAmount] = useState("0");
    const tokens = tokenPrice.map((tokens)=>
    
        <>
        <option>        
        {tokens.currency}
        </option>
        </>    )
        
    return (         
        <>
        <div id="curr-exchange-form">
            <div id="sell-all">
                <label id="sell-label">Sell</label>
                <select id="sell-select" value={sell} onChange={(e) => setSell(e.target.value)}>
                    {tokens}
                </select>
                <input id="typesellamount"
                    type = 'text'
                    required
                    value={sellAmount}
                    onChange={(e)=> setSellAmount(e.target.value)}
                />
            </div>  

            <div id="transaction">
                <label id="exchange-confirmation">Confirmation</label>
                <p id="sell-output">{sell}</p>
                {/* <p id="sellPrice">{sellPrice}</p> */}
                <p id="sellPrice">{sellAmount}</p>
                <img src={arrow_image} alt="Arrow Image"></img>
                <p id="buy-output">{buy}</p>
                {/* <p id="buyPrice">{buyPrice}</p> */}
                <p id="buyPrice">{buyAmount}</p>
            </div>

            <div id="buy-all">
                <label id="buy-label">Buy</label>
                <select id="buy-select" value={buy} onChange={(e) => setBuy(e.target.value)}>
                    {tokens}
                </select>
                <input id="typebuyamount"
                    type = 'text'
                    required
                    value={buyAmount}
                    onChange={(e)=> setBuyAmount(e.target.value)}
                />
            </div>
        </div>
        </>
    );
}

export default TokenPriceList;