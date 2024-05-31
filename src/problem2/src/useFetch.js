import {useEffect, useState} from "react";

// this is a hook for fetching of data from json

const useFetch = () => {
    const [tokensdata, setTokensData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/tokenPrice')
            // fetch('https://interview.switcheo.com/prices.json') --> Alternatively, use this if dont want use json server
            .then(res => {
            return res.json();
            })
            .then(data => {
                setTokensData(data);
            })             
        }); 
        return{tokensdata}
}
export default useFetch;