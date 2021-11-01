import React from 'react';
import {useSelector} from 'react-redux';
import Coin from './Coin';
import "../Styling/Markets.css"

export default function Markets() {
    const markets = useSelector((state) => state.marketData);

    return (
        <div className="marketsPage">
            <div className="infoArea">
                <h1>Welcome to Digital Crypt</h1>
                <h4>Browse the markets below and click the name to see more info about that crypto!</h4>
            </div>
            <div className="coinCont">
                {markets?.data?.map((coin) => <Coin key={coin.id}coin={coin}/>)}
            </div>

        </div>
    )
}
