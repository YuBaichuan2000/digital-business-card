import React from "react"
import "./styles.css"
import Photo from "./images/Profile Photo.jpg"
import Name from "./components/Name"
import Btns from "./components/Btns"
import Intro from "./components/Intro"

function App () {
    return (
        <div className="main-container">
            <div className="top-container">
                <img src={Photo} alt="profile img"/>
            </div>
            <div className="bottom-container">
                <Name />
                <Btns />
                <Intro /> 
            </div>
            <div className="footer"></div>
        </div>  
    )
}

export default App