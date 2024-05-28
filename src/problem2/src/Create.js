import { useState } from "react";
import arrow_image from "./arrow.png";

const Create = () => {

    const [sell, setSell] = useState('ETH');
    const [buy, setBuy] = useState('USD');

    return ( 
        <div className="create">
            <form>
            <label>Sell</label>
            <select value={sell} onChange={(e) => setSell(e.target.value)}>
                <option value="ETH">ETH</option>
                <option value="WBTC">WBTC</option>
                <option value="USDT">USDT</option>
                <option value="USD">USD</option>
            </select>

            <div>
                <p id="sell-output">{sell}</p>
                <img src={arrow_image} alt="Arrow Image"></img>
                <p id="buy-outpu">{buy}</p>
            </div>

            <label>Buy</label>
            <select value={buy} onChange={(e) => setBuy(e.target.value)}>
                <option value="USD">USD</option>
                <option value="ETH">ETH</option>
                <option value="WBTC">WBTC</option>
                <option value="USDT">USDT</option>
            </select>
            </form>
        </div>
     );
}
 
export default Create;