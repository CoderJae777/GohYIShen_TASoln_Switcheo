import {useEffect, useState} from "react";
import useFetch from "./useFetch";

const ViewTokenDetails = () => {
    const {tokensdata} = useFetch();
    const tokens = tokensdata.map((tokens)=>
        <>
        <div id="viewtokendeetsdiv">
            <p id="viewtokendeetstoken">{tokens.currency}</p>
            <p id="viewtokendeetsprice">{tokens.price}</p>
            <p id="viewtokendeetsdate">{tokens.date}</p>
        </div>
        </>    
    )
        
    return (         
        <>
        <h1 id="viewtokendeetsh1">Token details</h1>
        <p>{tokens}</p>
        </>

    );
}
 
export default ViewTokenDetails;