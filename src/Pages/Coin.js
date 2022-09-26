import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const Coin = () => {
    const params = useParams()


    const [ coin,setCoin ] = useState({})

    const url =
        ` https://api.coingecko.com/api/v3/coins/${params.coinId} `;

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setCoin(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


  return (
    <h1>{2+2}</h1>
  )
}

export default Coin