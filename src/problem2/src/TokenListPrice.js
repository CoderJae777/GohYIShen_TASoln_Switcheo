import {useEffect, useState} from "react";

const TokenPriceList = (props) => {

    const tokenPrice = props.tokenPrice;
    const title = props.title;

    return ( 
        <div>
            <h1>{title}</h1>
            {tokenPrice.map((tokens)=>(
            <div className="token-price-preview">
                <p id="currency">Currency : {tokens.currency}</p>
                <p id="price">Price : {tokens.price}</p>
                <p id="date"> Date : {tokens.date}</p>
            </div>
        ))}
        </div>
    );
}

export default TokenPriceList;