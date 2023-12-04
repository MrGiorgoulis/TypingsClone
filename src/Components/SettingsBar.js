import React from "react"
import TextLengthSelector from "./TextLengthSelector"

function SettingsBar(){ 

    return(
        <div className="settings-bar">
            <TextLengthSelector />
            <div className="stats-display">WPM: XX / ACC: XX</div>
        </div>
    )
}

export default SettingsBar