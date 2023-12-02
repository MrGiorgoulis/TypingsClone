import React, {useState, useEffect, useContext} from 'react'
import TextDisplay from './TextDisplay'
import { RedoStateContext, RedoStateUpdateContext } from './MainContainer'

function FetchData({wordCount}) {

    const sample = null
    const [data, setData] = useState(null)

    const setShouldReRender = useContext(RedoStateUpdateContext)
    const shouldReRender = useContext(RedoStateContext)

    useEffect(() => {
        if(shouldReRender) {
            const sample = require('../jsons/random.json')
            setData(sample)
        }
    },[shouldReRender])

    return (
        <div>
            <TextDisplay wc={wordCount} wordList={data}/>
        </div>
    )
}

export default FetchData