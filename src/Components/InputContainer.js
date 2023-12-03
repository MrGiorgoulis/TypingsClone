import React, { useContext, useEffect, useRef, useState } from 'react'
import RedoButton from './RedoButton'
import { IsWordValidContext, RandomWordsContext } from './MainContainer'
import { WordCountContext } from '../App'
import { SetIstWordValidContext } from './MainContainer'
import { RedoStateContext,RedoStateUpdateContext, SetStopTimer } from '../App'

function InputContainer() {

  const randomWords = useContext(RandomWordsContext)
  const wordCount = useContext(WordCountContext)
  const isWordValid = useContext(IsWordValidContext)
  const setIsWordValid = useContext(SetIstWordValidContext)
  const shouldReRender = useContext(RedoStateContext)
  const seTimer = useContext(SetStopTimer)

  const [valid, setValid] = useState(null)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0)
  const [inputValue, setInputValue] = useState('')

  const inputRef = useRef(null)

  const validateLetter = e => {
    setCurrentLetterIndex(prev => prev + 1)

    const expectedWord = randomWords[currentWordIndex].slice(0, currentLetterIndex + 1)
    const typedWord = `${e.target.value}${e.key}`

    console.log("Typed Word: ", typedWord)
    console.log("ExpectedWord: ", expectedWord)

    if (expectedWord === typedWord) {
      setValid(true)
    }
    else {
      setValid(false)
    }
  }

  const validateSpace = e => {

    const expectedWord = randomWords[currentWordIndex]
    const typedWord = e.target.value

    console.log("Typed Word: ", typedWord)
    console.log("ExpectedWord: ", expectedWord)

    if(expectedWord===typedWord){
      setIsWordValid([...isWordValid, true])
      console.log("PRASINO")
    }
    else{
      setIsWordValid([...isWordValid, false])
      console.log("KOKKINO")
    }
  }

  const validateBackSpace = e => {
    if (currentLetterIndex - 1 >= 0) {
      setCurrentLetterIndex(prev => prev - 1)

      const expectedWord = randomWords[currentWordIndex].slice(0, currentLetterIndex - 1)
      const typedWord = e.target.value.slice(0, e.target.value.length - 1)

      console.log("Typed Word: ", typedWord)
      console.log("ExpectedWord: ", expectedWord)

      if (expectedWord === typedWord) {
        setValid(true)
      }
      else {
        setValid(false)
      }
    }
  }

  const handleChange = e => {
    if (e.keyCode !== 8 && e.keyCode !== 32 && e.keyCode!==9) {
      if(currentWordIndex===0 && currentLetterIndex === 0 ){
        seTimer(true)
      }
      validateLetter(e)
    }
    else if (e.keyCode === 32) {
      validateSpace(e)
      console.log(isWordValid[0])
      if (currentWordIndex + 1 < wordCount) {
        setCurrentLetterIndex(0)
        setCurrentWordIndex(prev => prev + 1)
        e.preventDefault()
        setInputValue('')
        setValid(true)

      }
      else {
        seTimer(false)
        e.preventDefault()
        setInputValue('')
        console.log("Round is Over!")
      }
    }
    else if (e.keyCode === 8) {
      validateBackSpace(e)
    }
    else if(e.keyCode === 9){}
  }

  useEffect(() => {
    setInputValue('')
    setCurrentLetterIndex(0)
    setCurrentWordIndex(0)
    setValid(true)
    inputRef.current.focus()
  },[shouldReRender])

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          className="text-input"
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={
            handleChange
          }
          style={{
            background: valid === null ? '' : valid ? '' : '#daa398'
          }}
        ></input>
        <RedoButton />
      </div>
    </div>
  )
}

export default InputContainer