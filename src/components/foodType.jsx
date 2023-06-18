import React from "react"
import data from "../data/foodtype.json"
import "./foodType.css"

const FoodType = () => {
    let foodType = data["types"] 
    const component = foodType.map((rest, idx) => {
        return(<li key={idx + rest.type}>
            <div key={idx} className="type-component">
            <img src={rest.thumbnail} alt={idx} />
            <h4>{rest.type}</h4>
        </div>
        </li>)
    })
    return(<div className="main">
        <div className="container">
            <ul className="types">
                {component}
            </ul>
        </div>
    </div>)
}

export default FoodType;