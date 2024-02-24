import React, { useState, useEffect } from 'react';
import { options, URL_ALLCURRENCY } from '../utils/apiUrls';

const DisplayComponent = () => {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState("00.00")
  const [currName, setCurrName] = useState([]); // Use state to make it accessible

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const response = await fetch("$$add all currency url here", options);
    const result = await response.json();
    setCurrName(result.data.currencies); // Set state here
    return result;
  };

  const handledChange = async (e) => {
    // update your api url here
    let url = `${from}&to=${to}&amount=${fromAmount}`
    const response = await fetch(url, options);
    const result = await response.json();
    setToAmount(result.data.value) 
    console.log(result)
  };



  return (
    <div className="outerHero">
      <div className='hero'>
        <h6>Exchange</h6>
        <h1>{toAmount}</h1>
        <label name="amount">Amount</label>
        <br />
        <input type="number" name='amount' value={fromAmount} onChange={(e)=>{setFromAmount(e.target.value)}}/>
        
        <div className="fromTo">
          <div>
            <label name="currency1">From</label>
            <br />
            <select name="currency1" id="" value={from} onChange={(e)=>{
              setFrom(e.target.value);
              console.log(e.target.value)
            }}>
              {Array.isArray(currName) && currName.map((data, index) => (
                <option key={index} value={data.code}>{data.code}</option>
              ))}
            </select>
          </div>
          <div>
            <label name="currency1">To</label>
            <br />
            <select name="currency1" id="" value={to} onChange={(e)=>{
              setTo(e.target.value);
              console.log(e.target.value)
            }}>
            {Array.isArray(currName) && currName.map((data, index) => (
                <option key={index} value={data.code}>{data.code}</option>
              ))}
            </select>
          </div>
        </div>

        <button onClick={handledChange}>CONVERT</button>
      </div>
    </div>
  );
};

export default DisplayComponent;
