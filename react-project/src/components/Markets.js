import React from 'react'
import { useEffect, useState } from 'react'

export default function Markets() {

    useEffect(() => {
        fetchCoins();
    }, []);

    const [coins, setCoins] = useState([])

    const fetchCoins = async () => {
        const getCoins = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
        const coins = await getCoins.json();
        console.log(coins)
        setCoins(coins)
    }
    return (
        <div>
            {coins.map(coin => (
                <h1>{coin.name}</h1>
            ))}
            
        </div>
    )
}
