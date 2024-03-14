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
    const [announce, setAnnounce] = useState("원하는 음료를 골라주세요.");
    const [selectedNames, setSelectedNames] = useState([]);
    
    const handleSelect = (name, isSelected) => {
        //when clicked the button, isSelected data is sent after reverse its value in Tbody.
        if(isSelected) {
            // developed(1): if has, show the 'number' how many menu does a customer has selected same one;
            // developed(2): add animation => if add, bascket size get bigger -> normal during 0.4s ('delete' as well )
            //setter이라는 콜백함수 사용하기
            setSelectedNames(prevSelectedNames => {
                //빈 값이면 추가
                if (prevSelectedNames.length < 1) {
                    // console.log("빈 배열일 때", prevSelectedNames);
                    // console.log ("빈 배열일 때 이름 잘 들어오나 체크", name)
                    return [name];
                }
                // 중복이 아니면 추가
                if(!prevSelectedNames.includes(name)) {
                    // console.log("중복아닐 때", prevSelectedNames);
                    return [...prevSelectedNames, name];
                }
                //둘 다 아니면 그냥 반환
                // console.log("둘다 아닐 때", prevSelectedNames)
                return prevSelectedNames;
            })
        } else {
            // console.log("삭제", isSelected, "삭제 전 배열", selectedNames, name)
            setSelectedNames(prevSelectedNames => prevSelectedNames.filter((n) => n !== name));
        }
        // selectedNames에다가 string으로 바꾸면, 배열로 다시 바꿔줘야 하는 번거로움을 생략하기 위해 변수에 별도로 저장
        setSelectedNames(prevSelectedNames => {
            // console.log("문자열로 변환하는 단계", prevSelectedNames.join(", "))
            updatedNames = prevSelectedNames.join(", ");
            // console.log("업데이트 문구", updatedNames, "문구 전", selectedNames)
            setAnnounce(updatedNames === "" ? '원하는 음료를 골라주세요.' : `${updatedNames}를 선택하셨습니다.`);
            return prevSelectedNames;
        })
    }
    

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