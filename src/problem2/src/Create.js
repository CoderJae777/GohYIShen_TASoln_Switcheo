import { useState } from "react";
import arrow_image from "./arrow.png";
import TokenPriceList from "./TokenListPrice";
import useFetch from "./useFetch";

const Create = () => {

    const {tokenPrice} = useFetch();


    return ( 
        <div className="create">
            <form>
            <TokenPriceList tokenPrice = {tokenPrice}/>
            </form>
        </div>
     );
}
 
export default Create;