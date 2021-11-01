import React from 'react'
import { useSelector } from 'react-redux'
import Crypt from './Crypt';
import "../Styling/Portfolio.css"

export default function Portfolio() {
    const portfolio = useSelector((state) => state.portfolioData);
    return (
        <div className="portfolioCont">
            <h1 className="portfolioTitle">PORTFOLIO</h1>
            <div className="portCrypt">
                {portfolio?.map((crypt) => <Crypt key={crypt.id} crypt={crypt}/>)}
            </div>
            
        </div>
    )
}
