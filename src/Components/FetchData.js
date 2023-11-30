import React, {useState, useEffect} from 'react'
import TextDisplay from './TextDisplay'


function FetchData({wrds}) {

    const sample = null
    const [data, setData] = useState(null)

    // useEffect = ([]) => {
    //     const sample = require('../jsons/random.json')
    //     setData(sample)
    //     wrds = data
    // }

    return (
        <div>
            <TextDisplay/>
        </div>
    )
}

export default FetchData