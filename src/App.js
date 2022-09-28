import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Coins from "./components/Coins";
import Header from "./components/Header";
import Coin from "./Pages/Coin";

function App() {
    const [coins, setCoins] = useState([]);
    const [visible, setVisible] = useState(20);

    const loadMore = () => {
        setVisible((prevValue) => prevValue + 20);
    };

    const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false";

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setCoins(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <BrowserRouter>
                <Header /> 
                <Routes>
                    <Route path="/" element={<Coins coins={coins} loadMore={loadMore} visible={visible} />} />
                    <Route path="/coin" element={<Coin />}>
                        <Route path=":coinId" element={<Coin />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
