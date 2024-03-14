import React, { Component, useState } from "react";

const Tbody = ({imgURL, name, cost, onSelect}) => {
    const [isSelected, setSelected] = useState(false);
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

// setSelectedNames(prevSelectedNames => {
    //     console.log("문자열로 변환하는 단계", prevSelectedNames.join(", "))
    //     updatedNames = prevSelectedNames.join(", ");
    //     console.log("업데이트 문구", updatedNames, "문구 전", selectedNames)
    //     setAnnounce(updatedNames === "" ? '원하는 음료를 골라주세요.' : `${updatedNames}를 선택하셨습니다.`);
    //     return prevSelectedNames;
    // })