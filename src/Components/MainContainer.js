import React, {  useContext, useEffect, useState } from 'react'
import FetchData from './FetchData'
import InputContainer from './InputContainer'
import { WordCountContext, RedoStateContext } from '../App'

export const RandomWordsContext = React.createContext()
export const SetRandomWordsContext = React.createContext()

export const IsWordValidContext = React.createContext()
export const SetIstWordValidContext = React.createContext()

function MainContainer() {

  const wordCount = useContext(WordCountContext)

  const [randomWords, setRandomWords] = useState([])

  const [isWordValid, setIsWordValid] = useState([])

  const redoState = useContext(RedoStateContext)

  useEffect(()=>{
    {console.log(redoState)}
    setIsWordValid([])
  }, [redoState])

  return (
    <div>
      <SetRandomWordsContext.Provider value={setRandomWords}>
        <RandomWordsContext.Provider value={randomWords}>
              <div className="main-container">
              <IsWordValidContext.Provider value={isWordValid}>
                <SetIstWordValidContext.Provider value={setIsWordValid}>
                    <FetchData wordCount={wordCount} />
                    <InputContainer/>
                  </SetIstWordValidContext.Provider>
              </IsWordValidContext.Provider>
            </div>
        </RandomWordsContext.Provider>
      </SetRandomWordsContext.Provider>
    </div>
  )
}

export default MainContainer