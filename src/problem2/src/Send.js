import {useEffect, useState} from "react";
import useFetch from "./useFetch";

const Send = () => {

    const [sendToken, setSendToken] = useState('--Sending--');
    const [sendAmount, setSendAmount] = useState("0");
    const {tokensdata} = useFetch();
    const sendHandler = () => {
        alert("Sent!");
        window.location.reload();
      }

    const tokens = tokensdata.map((tokens)=>
        <>
        <option>        
            {tokens.currency}
        </option>
        </>  
    )

    return ( 
        <>
        <div id="send-form">
            <div id="send">
                <label id="send-label">Send</label>
                <select id ="send-select" value={sendToken} onChange={(e) => setSendToken(e.target.value)}>
                    {tokens}
                </select>
                <input id="inputsendamount"
                    type = 'text'
                    required
                    value={sendAmount}
                    onChange={(e)=> setSendAmount(e.target.value)}
                />
            </div>
        </div>

        <div id="send-confirmation-div">
                <h2>Confirmation</h2>
                <p>{sendToken}</p>
                <p>{sendAmount}</p>
            </div>
        
        <button id="sendbutton" onClick={sendHandler}>Send!</button>
        
        </>

        
    );
}
 
export default Send;