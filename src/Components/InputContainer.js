import React, { useContext, useEffect } from 'react'
import RedoButton from './RedoButton'
import { RandomWordsContext } from './MainContainer'
import { WordCountContext } from '../App'

let currentWordIndex = 0
let currentLetterIndex = 0


function InputContainer() {

  const randomWords = useContext(RandomWordsContext)
  const wordCount = useContext(WordCountContext)

  const valid = true

  const handleChange = e => {
    console.log("Pressed Key: ",e.key, " with code: ",e.keyCode )
    
    if(currentWordIndex<wordCount){
      if(e.key === randomWords[currentWordIndex][currentLetterIndex]){
        console.log("Swsto")
        console.log("randomWords[currentWordIndex].length:", randomWords[currentWordIndex].length)
        console.log("currentLetterIndex:", currentLetterIndex)

        if(currentLetterIndex+1<randomWords[currentWordIndex].length){
          currentLetterIndex = currentLetterIndex + 1          
        }
      }
      else if(e.keyCode === 32){
        console.log("EPOMENH LEKSH")
        currentWordIndex++
        currentLetterIndex = 0
      }
      else{
        console.log("Lathos")
      }
    }
  }

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          className="text-input"
          onKeyDown={handleChange}
          ></input>
        <RedoButton/>
      </div>
    </div>
  )
}

export default InputContainer