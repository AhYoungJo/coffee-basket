import React, { Component, useState } from "react";

const Tbody = ({imgURL, name, cost, onSelect}) => {
    const [isSelected, setSelected] = useState(false);
    //useState에 버튼 선택여부 저장
    //onSelect로 선택한 음료와 버튼 선택여부 전달
    const handleClick = () => {
        setSelected(!isSelected);
        onSelect(name, !isSelected);
    }
    return(
        <tbody className="Tbody tbody1">
            <tr>
                <td><img src={imgURL} /></td>
                <td>{name}</td>
                <td>{cost}</td>
                <td><button className="buttTxt" onClick={handleClick} >{isSelected ? "삭제" : "선택"}</button></td>
            </tr>
        </tbody>
    )
}

export default Tbody;   
