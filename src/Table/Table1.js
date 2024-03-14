import React, { Component, useState } from "react";
import Tbody from "./Tbody1";
import "./Table1.css"
import Thead from "./Thead1";

import todayCoffee from "../src_img/coffe_img/todayCoffee.png"
import americano from "../src_img/coffe_img/americano.png"
import latte from "../src_img/coffe_img/latte.png"
import vanillaLatte from "../src_img/coffe_img/vanilla-latte.png"
import cappuccino from "../src_img/coffe_img/cappuccino.png"
import espressoFrappuccino from "../src_img/coffe_img/espresso-frappuccino.png"

let updatedNames = "";
const Table = () => {
    const [selectedNames, setSelectedNames] = useState([]);
    //onSelect=(handleSelect)해서 name, isSelect값 받아오기
    const handleSelect = (name, isSelected) => {
        if(isSelected) {
            setSelectedNames(prevSelectedNames => {
                //빈 값이면 추가
                if (prevSelectedNames.length < 1) {
                    return [name];
                }
                // 중복이 아니면 추가
                if(!prevSelectedNames.includes(name)) {
                    return [...prevSelectedNames, name];
                }
                //둘 다 아니면 그냥 반환
                return prevSelectedNames;
            })
        } else {
            setSelectedNames(prevSelectedNames => prevSelectedNames.filter((n) => n !== name));
        }
        setSelectedNames(prevSelectedNames => {
            updatedNames = prevSelectedNames.join(", ");
            return prevSelectedNames;
        })
    }
    
    const announce = selectedNames.length === 0 ? "원하는 음료를 골라주세요." : `${selectedNames.join(", ")}를 선택하셨습니다.`;  

    return(
        <div className="MenuBox">
            <h1>메뉴판</h1>
            <h2>{announce}</h2>
            <table className="Table table1">
                <Thead th1='음료' th2='음료명' th3='가격' th4='선택'/>
                <Tbody imgURL={todayCoffee} name="Today's Coffee" cost="4000" onSelect={handleSelect} />
                <Tbody imgURL={americano} name="Americano" cost="4000" onSelect={handleSelect} />
                <Tbody imgURL={latte} name="latte" cost="4000" onSelect={handleSelect} />
                <Tbody imgURL={vanillaLatte} name="Vanilla Latte" cost="4000" onSelect={handleSelect} />
                <Tbody imgURL={cappuccino} name="Cappuccino" cost="4000" onSelect={handleSelect} />
                <Tbody imgURL={espressoFrappuccino} name="Espresso Frappuccino" cost="4000" onSelect={handleSelect} />
            </table>
        </div>
    )
}



export default Table;