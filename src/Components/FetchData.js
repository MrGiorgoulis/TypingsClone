import React, {useState, useEffect} from 'react'


function FetchData() {

    const [data, setData] = useState(null)

    useEffect = () => {
        const sample = require('../jsons/random.json')
        setData(sample)
    }

    return (
        <div>
            {}
        </div>
    )
}

export default FetchData