import React, { useContext, useEffect } from "react"
import TextLengthSelector from "./TextLengthSelector"
import { WpmContext } from "../App"

function SettingsBar(){ 

    const wpm = useContext(WpmContext)

    useEffect(() => {
        console.log(wpm)
    },[wpm])

    return(
        <div className="settings-bar">
            <TextLengthSelector />
            <div className="stats-display">WPM: {wpm!==null ? parseInt(wpm) : 'XX'} / ACC: XX</div>
        </div>
    )
}

export default SettingsBar