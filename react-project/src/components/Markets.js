import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchInfo } from '../redux/actions/MarketActions';

export default function Markets() {
    const dispatch = useDispatch();
    const markets = useSelector((state) => state.marketData)

    useEffect(() => {
        const fetchCoins = async () => {
            const getCoins = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
            const coins = await getCoins.json();
            dispatchInfo(dispatch, coins)
        }
        fetchCoins()
        return () =>{}
    }, []);

    return (
        <div>
            
        </div>
    )
}
