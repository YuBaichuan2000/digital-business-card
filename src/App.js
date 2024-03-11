import React from "react"
import "./styles.css"
import Photo from "./images/Profile Photo.jpg"

function App () {
    return (
        <div className="main-container">
            <div className="top-container">
                <img src={Photo} alt="profile img"/>
            </div>
            <div className="bottom-container">
                <div className="name"></div>
                <div className="btns"></div>
                <div className="intros"></div>
            </div>
            <div className="footer"></div>
        </div>  
    )
}

export default App