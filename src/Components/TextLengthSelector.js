import React, {useState, useEffect} from 'react'
import '../styles.css'

function TextLengthSelector({wordCount, onUpdateWordCount}){

    const [isActive, setIsActive] = useState([
        {id: 0, name: '10', state: null},
        {id: 1, name: '25', state: null},
        {id: 2, name: '50', state: null},
        {id: 3, name: '100', state: null},
        {id: 4, name: '250', state: null},
    ])

    const handleClick = (event, id) => {

        //Update the selected wordCount
        const targetValue = parseInt(event.target.textContent)
        onUpdateWordCount(targetValue)

        const nextItems = isActive.map((item) => ({
            ...item,
            state: item.id === id ? true : false,
            // if(i===id){
            //     return {
            //         ...item,
            //         state: true,
            //     }
            // }
            // else{
            //     return {
            //         ...item,
            //         state: false,
            //     }
            // }
        }))

        setIsActive(nextItems)
    }

    

    return(
        <div className='settings-bar'>

            <div 
            style={{
                textDecoration: isActive.state ? 'underline' : ''
            }}
            className='length-selector'
            onClick={(e) => {handleClick(e, 0)   
            }
            }>10</div>
            |
            <div 
            style={{
                textDecoration: isActive.state ? 'underline' : ''
            }}
            className='length-selector' 
            onClick={(e) => handleClick(e, 1)
            }>25</div>
            |
            <div 
            style={{
                textDecoration: isActive.state ? 'underline' : ''
            }}
            className='length-selector' 
            onClick={(e) => handleClick(e, 2)
            }>50</div>
            |
            <div 
            style={{
                textDecoration: isActive.state ? 'underline' : ''
            }}
            className='length-selector' 
            onClick={(e) => handleClick(e, 3)
            }>100</div>
            |
            <div 
            style={{
                textDecoration: isActive.state ? 'underline' : ''
            }}
            className='length-selector' 
            onClick={(e) => handleClick(e, 4)
            }>250</div>
        </div>
    )
}

export default TextLengthSelector