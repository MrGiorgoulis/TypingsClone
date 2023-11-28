import React, {useState} from 'react'
import '../styles.css'

function TextLengthSelector({wordCount, onUpdateWordCount}){

    const [isActive, setIsActive] = useState([
        {id: 1, name: '10', state: false},
        {id: 2, name: '25', state: false},
        {id: 3, name: '50', state: false},
        {id: 4, name: '100', state: false},
        {id: 5, name: '250', state: false},
    ])

    const handleClick = (event, id) => {
        isActive.map(item => {
            console.log("The selected item has ID: ",item.id,", name: ", item.name,", state: ", item.state)
        })
        //Update the selected wordCount
        const targetValue = parseInt(event.target.textContent)
        onUpdateWordCount(targetValue)
        console.log(targetValue)

        const nextItems = isActive.map(item => {
            if(item.id===id){
                return {
                    ...item,
                    state: true,
                }
            }
            else{
                return {
                    ...item,
                    state: false,
                }
            }
        })

        setIsActive(nextItems)
    }

    

    return(
        <div className='settings-bar'>
            <div 
            style={{
                textDecoration: isActive ? 'underline' : ''
            }}
            className='length-selector'
            onClick={(e) => handleClick(e, 1)
            }>10</div>
            |
            <div 
            style={{
                textDecoration: isActive ? 'underline' : ''
            }}
            className='length-selector' 
            onClick={(e) => handleClick(e, 2)
            }>25</div>
            |
            <div 
            style={{
                textDecoration: isActive ? 'underline' : ''
            }}
            className='length-selector' 
            onClick={(e) => handleClick(e, 3)
            }>50</div>
            |
            <div 
            style={{
                textDecoration: isActive ? 'underline' : ''
            }}
            className='length-selector' 
            onClick={(e) => handleClick(e, 4)
            }>100</div>
            |
            <div 
            style={{
                textDecoration: isActive ? 'underline' : ''
            }}
            className='length-selector' 
            onClick={(e) => handleClick(e, 5)
            }>250</div>
        </div>
    )
}

export default TextLengthSelector