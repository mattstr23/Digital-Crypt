import React from 'react';
import {useSelector} from 'react-redux';
import Coin from './Coin';
import "../Styling/Markets.css"

export default function Markets() {
    const markets = useSelector((state) => state.marketData);

    return (
        <div className="marketsPage">
            <div className="infoArea">
                <h1 className="welcome">Welcome to Digital Crypt</h1>
                <h4 className="greeting">Browse the markets below, click the name of the Crypto to see more on it</h4>
                <h1 className="infoTitle">MARKETS</h1>
            </div>
            <div className="coinCont">
                {markets?.data?.map((coin) => <Coin key={coin.id}coin={coin}/>)}
            </div>

        </div>
    )
}
