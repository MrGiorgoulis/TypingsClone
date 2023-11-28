import React from 'react'
import '../styles.css'

function TextLengthSelector(){


    return(
        <div className='settings-bar'>
            <div className='length-selector' onClick={() => console.log(10)}>10</div>
            |
            <div className='length-selector' onClick={() => console.log(25)}>25</div>
            |
            <div className='length-selector' onClick={() => console.log(10)}>50</div>
            |
            <div className='length-selector' onClick={() => console.log(10)}>100</div>
            |
            <div className='length-selector' onClick={() => console.log(10)}>250</div>
        </div>
    )
}

export default TextLengthSelector