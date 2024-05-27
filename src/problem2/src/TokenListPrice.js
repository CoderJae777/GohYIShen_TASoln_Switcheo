const TokenPriceList = (props) => {

    const tokenPrice = props.tokenPrice;
    const title = props.title;

    return ( 
        <div className="token-price-list">
            <h1>{title}</h1>
            {tokenPrice.map((tokens)=>(
            <div className="token-price-preview">
                <p>Currency : {tokens.currency}</p>
                <p>Price : {tokens.price}</p>
            </div>
        ))}
        </div>
    );
}

export default TokenPriceList;