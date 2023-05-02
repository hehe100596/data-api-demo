import React, { useState } from "react";

function Data() {
  const [data, setData] = useState({});
  const [chain, setChain] = useState("ethereum");
  const [address, setAddress] = useState(
    "0x39ee2c7b3cb80254225884ca001f57118c8f21b6"
  );
  const [event, setEvent] = useState("tokenTransfer");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `https://api.tatum.io/v3/data/events?chain=${chain}&contractAddresses=${address}&eventType=${event}`,
      {
        headers: {
          "x-api-key": "b581a124-c5bf-4db6-8012-450a41e4431b_1000",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const resData = await res.json();
    console.log(resData);
    setData(resData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Chain:</p>
          <select value={chain} onChange={(e) => setChain(e.target.value)}>
            <option value="ethereum">Ethereum</option>
            <option value="polygon">Polygon</option>
            <option value="solana">Solana</option>
          </select>
        </label>
        <label>
          <p>Event:</p>
          <select value={event} onChange={(e) => setEvent(e.target.value)}>
            <option value="tokenTransfer">Token Transfer</option>
            <option value="stablecoinTransfer">Stablecoin Transfer</option>
            <option value="uniswapTrade">Uniswap Trade</option>
          </select>
        </label>
        <label>
          <p>Address:</p>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
        }
        form,
        input,
        select {
          width: 300px;
        }
        button {
          margin-top: 50px;
        }
      `}</style>
    </div>
  );
}

export default Data;
