import React, { useState, useEffect } from "react";

function Data({ chain, address, event }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
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
      setData(resData);
    };
    fetchData();
  }, []);

  console.log(data);
  return <div>OK</div>;
}

export default Data;
