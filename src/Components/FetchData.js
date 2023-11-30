import React, {useState, useEffect} from 'react'
import TextDisplay from './TextDisplay'


function FetchData({wordCount}) {

    const sample = null
    const [data, setData] = useState(null)

    useEffect(() => {
        const sample = require('../jsons/random.json')
        setData(sample)
    })

    return (
        <div>
            {console.log("FetchData wordList: ", data, " FetchData wordCount: ", wordCount)}
            <TextDisplay wc={wordCount} wordList={data}/>
        </div>
    )
}

export default FetchData