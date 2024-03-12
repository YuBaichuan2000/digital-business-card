import React from "react"
import { LoremIpsum } from 'react-lorem-ipsum';

function Intro() {
    return (
        <div id="intro">
            <h3>About</h3>
            <LoremIpsum />
            <h3>Skills</h3>
            <LoremIpsum />
        </div>
    )
}

export default Intro