

// import React, { Component } from "react";



const Thead = ({th1, th2, th3, th4}) => {
    return(
        <thead className="Thead thead1">
            <tr>
                <th>{th1}</th>
                <th>{th2}</th>
                <th>{th3}</th>
                <th>{th4}</th>
            </tr>
        </thead>
    )
}


export default Thead;



// class Thead extends Component {
//     render() {
//       return (
//         <div>
          
//         </div>
//       )
//     }
// }