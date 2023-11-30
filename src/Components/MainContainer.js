import React, { useContext, useState } from 'react'
import FetchData from './FetchData'
import InputContainer from './InputContainer'
import { WordCountContext } from '../App'

export const RandomWordsContext = React.createContext()
export const SetRandomWordsContext = React.createContext()

function MainContainer() {

  const wordCount = useContext(WordCountContext)

  const [randomWords, setRandomWords] = useState([])

  return (
    <div>
      <SetRandomWordsContext.Provider value={setRandomWords}>
        <RandomWordsContext.Provider value={randomWords}>
          <div className="main-container">
            <FetchData wordCount={wordCount} />
            <InputContainer/>
          </div>
        </RandomWordsContext.Provider>
      </SetRandomWordsContext.Provider>
    </div>
  )
}

export default MainContainer