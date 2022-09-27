import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const Coin = () => {
  const params = useParams();

  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoin(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return (
    <div>
      <div>
        <div className="m-2 flex justify-center items-center bg-[#26272b] p-4 shadow-sm shadow-neutral-900 rounded-md">
          <h1  className="font-bold text-2xl md:text-4xl">{coin.name}</h1>
        </div>
        <div className="m-2 bg-[#26272b] p-4 shadow-sm shadow-neutral-900 rounded-md">
          <div>
            <span className="p-2 rounded-md bg-slate-400">Rank #</span>
          </div>
          <div className="my-4 flex flex-wrap justify-between items-center">
            <div className="flex justify-between items-center w-60 md:w-96 text-lg md:text-2xl">
                {coin.image ?  <img src= {coin.image.small} alt=""/> : null}
                <p>{coin.name}</p>
                <p className="uppercase">{coin.symbol}/USD</p> 
            </div>
            <div>
                {coin.market_data?.current_price ? <h1  className="font-bold text-2xl md:text-4xl">${coin.market_data.current_price.usd.toLocaleString()}</h1> :null}
            </div>
          </div>
        </div>
        <div className="m-2 flex justify-center items-center bg-#26272b p-4 shadow-sm shadow-neutral-900 rounded-md">
            <table className="w-full table-fixed">
                <thead className="bg-[#2C2D2E]">
                    <tr>
                        <th className="border-x-2 border-[#26272b]">1h</th>
                        <th className="border-x-2 border-[#26272b]">24h</th>
                        <th className="border-x-2 border-[#26272b]">7d</th>
                        <th className="border-x-2 border-[#26272b]">14d</th>
                        <th className="border-x-2 border-[#26272b]">30d</th>
                        <th className="border-x-2 border-[#26272b]">1y</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd}</p> : null}</td>
                        <td className="text-center">{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd}</p> : null}</td>
                        <td className="text-center">{coin.market_data?.price_change_percentage_7d_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd}</p> : null}</td>
                        <td className="text-center">{coin.market_data?.price_change_percentage_14d_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd}</p> : null}</td>
                        <td className="text-center">{coin.market_data?.price_change_percentage_30d_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd}</p> : null}</td>
                        <td className="text-center">{coin.market_data?.price_change_percentage_1y_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd}</p> : null}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="m-2 bg-[#26272b] p-4 shadow-sm shadow-neutral-900 rounded-md">
            <div className="flex justify-between">
                <div className="w-64 md:w-96">
                    <div className="flex justify-between border-b border-slate-400">
                        <h4>24 Hour Low</h4>
                        {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
                    </div>
                    <div className="flex justify-between border-b border-slate-400">
                        <h4>24 Hour High</h4>
                        {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}
                    </div>
                </div>
                <div className="w-64 md:w-96">
                    <div className="flex justify-between border-b border-slate-400">
                        <h4>Market Cap</h4>
                        {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
                    </div>
                    <div className="flex justify-between border-b border-slate-400">
                        <h4>Circulating Supply</h4>
                        {coin.market_data ? <p>{coin.market_data.circulating_supply.toLocaleString()}</p> : null}
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="m-2 bg-[#26272b] p-4 shadow-sm shadow-neutral-900 rounded-md">
                <h3 className="font-bold text-lg">About</h3>
                <p>{coin.description ? coin.description.en : ""}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
