import {useEffect, useState} from "react";

// this is a hook for fetching of data from json

const useFetch = () => {
    const [tokenPrice, setTokenPrice] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/tokenPrice')
            .then(res => {
            return res.json();
            })
            .then(data => {
            setTokenPrice(data);
            })
        }); 

        return{tokenPrice}
}
 
export default useFetch;