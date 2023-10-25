import React from 'react';
import {useState} from "react";
import './App.css';

function App() {
    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ]);
    const [currentMoney, setCurrentMoney] = useState(money);

// currentMoney - это объекты, прошедшие проверку(фильтрацию)
  //  let currentMoney = money.filter(filteredMoney => filteredMoney.banknote === "ruble");
    const[filter, setFilter] = useState('all')
    //let currentMoney = money;
const onClickHandler = (currencyType: 'all'| '₽' | '$') => {
    setFilter(currencyType)
    switch (currencyType) {
        case '₽':
            setCurrentMoney(money.filter(filteredMoney => filteredMoney.banknote === "ruble"));
        break;
        case '$':
            setCurrentMoney(money.filter(filteredMoney => filteredMoney.banknote === "dollar"));
        break;
        default:
            setCurrentMoney(money);
    }
    }
    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    );
                })}
            </ul>

            <div style={{marginLeft: '20px', width: '100px'}}>
                <button onClick = { () => onClickHandler('all')}>all</button>
                <button onClick = { () => onClickHandler('₽')}>₽</button>
                <button onClick = { () => onClickHandler('$')}>$</button>
            </div>
        </>
    );
}


export default App;
