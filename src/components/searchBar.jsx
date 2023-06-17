import React, { useState } from "react"
import { FiFilter } from "react-icons/fi";
import "./searchBar.css"

export default function SearchBar(props) {
    const {value, onValueChange} = props;
    return(<div className="main">
        <ul className="wrapper">
            <li>
                <div className="filter">
                    <FiFilter />
                </div>
            </li>
            <li>
                <div className="search">
                    <input 
                    className="search-input"
                    type="text"
                    placeholder="Are you carving?" 
                    value={value}
                    onChange={(event) => {
                        onValueChange(event.target.value)
                    }}
                    />
                </div>
            </li>
        </ul>
    </div>)
}