import {useEffect, useState} from "react";
import arrow_image from "./arrow.png";
import hide_password_image from "./hidden.png";
import useFetch from "./useFetch";

const TokenPriceList = (props) => {

    const {tokensdata} = useFetch();
    const [sell, setSell] = useState('--Select Token--');
    const [buy, setBuy] = useState('--Select Token--');
    const [sellAmount, setSellAmount] = useState("0");
    const [buyAmount, setBuyAmount] = useState("0");
    const [walletValue, setWalletValue] = useState("*****");
 
    const tokens = tokensdata.map((tokens)=>
        <>
        <option>        
            {tokens.currency}
        </option>
        </>  
    )

    return (
        <>
        {/* <select>
            {tokensprices}
        </select> */}
        <div id="wallet">
            <label id="wallet-label">Wallet :</label>
            <p>USD {walletValue}</p>
            <button>
                <img src={hide_password_image} alt="Hidden Password Image" value = {walletValue} onClick={(e) => setWalletValue('0')}></img>
            </button>
        </div>

        <div id="curr-exchange-form">
            <div id="buy-all">
                <label id="buy-label">Buy</label>
                <select id="buy-select" value={buy} onChange={(e) => setBuy(e.target.value)}>
                    {tokens}
                </select>
                <input id="inputbuyamount"
                    type = 'text'
                    required
                    value={buyAmount}
                    onChange={(e)=> setBuyAmount(e.target.value)}
                />
            </div>

            <div id="transaction">
                <p id="sell-output">{sell}</p>
                <p id="sellPrice">{sellAmount}</p>
                <img src={arrow_image} alt="Arrow Image"></img>
                <p id="buy-output">{buy}</p>
                <p id="buyPrice">{buyAmount}</p>
            </div>

            <div id="sell-all">
                <label id="sell-label">Sell</label>
                <select id="sell-select" value={sell} onChange={(e) => setSell(e.target.value)}>
                    {tokens}
                </select>
                <input id="inputsellamount"  
                    type = 'text'
                    required
                    value={sellAmount}
                    onChange={(e)=> setSellAmount(e.target.value)}
                />
            </div>  
        </div>
        </>
    );
}

export default TokenPriceList;