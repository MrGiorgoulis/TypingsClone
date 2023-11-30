import React, {useState} from 'react'
import '../styles.css'

function TextLengthSelector({ wordCount, onUpdateWordCount }) {

    const [isActive, setIsActive] = useState([
        { id: 0, name: '10', state: false },
        { id: 1, name: '25', state: false },
        { id: 2, name: '50', state: true },
        { id: 3, name: '100', state: false },
        { id: 4, name: '250', state: false },
    ])

    const handleClick = (event, id) => {

        //Update the selected wordCount
        onUpdateWordCount(parseInt(event.target.textContent))

        const nextItems = isActive.map((item) => ({
            ...item,
            state: item.id === id ? true : false,
        }))

        setIsActive(nextItems)
    }



    return (
        <div className='settings-bar'>

            {isActive.map((item) => {
                return <div key={item.id + '_container'}>
                    <div
                        key={item.id}
                        className='length-selector'
                        onClick={(e) => { handleClick(e, item.id) }}
                        style={{
                            display: 'inline-block',
                            borderBottom: isActive[item.id].state ? '2px solid' : '',
                            paddingBottom: '1px',
                            marginBottom: isActive[item.id].state ? '' : '1px',
                        }}
                    >
                        {item.name}
                    </div>
                    {item.id === 4 ? '' : <div style={{ display: 'inline-block' }}>|</div>}

                </div>
            })}

        </div>
    )
}

export default TextLengthSelector