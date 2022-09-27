import React from "react";
import { Link } from "react-router-dom";

import Coin from "../Pages/Coin";
import CoinItem from "./CoinItem";
import More from "./More";

const Coins = (props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full md:w-4/5">
        <div className="font-bold place-items-center p-4 grid grid-cols-4 md:grid-cols-6 items-center bg-#26272b shadow-sm shadow-neutral-900 rounded-md mx-0.5 my-px">
          <p>Rank</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24h Change</p>
          <p className="hidden md:inline">Volume</p>
          <p className="hidden md:inline">Market Cap</p>
        </div>

        {props.coins.map((coins) => {
          return (
            <div key={coins.id}>
              <Link to={`/coin/${coins.id}`} element={<Coin />}>
                <CoinItem coins={coins} />
              </Link>
            </div>
          );
        })}
      </div>
      <div className="my-6">
        <More />
      </div>
    </div>
  );
};

export default Coins;
