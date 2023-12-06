import React, { useContext, useEffect, useRef, useState } from 'react'
import RedoButton from './RedoButton'
import { RandomWordsContext } from './MainContainer'
import { WordCountContext, RedoStateContext } from './CommandCenter'
import { SetWpmContext, ElapsedTimeContext, SetStopTimer, IsWordValidContext, SetIstWordValidContext } from '../App'

function InputContainer() {

  const elapsedTime = useContext(ElapsedTimeContext)
  const setWpm = useContext(SetWpmContext)
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
  // const validateSpace = e => {
  //   const expectedWord = randomWords[currentWordIndex]
  //   const typedWord = e.target.value
  
  //   const updatedIsWordValid = expectedWord === typedWord ? [...isWordValid, true] : [...isWordValid, false];
  
  //   setIsWordValid(updatedIsWordValid);
  //   console.log(expectedWord === typedWord ? "PRASINO" : "KOKKINO");
  // }

  const validateSpace = e => {
    const expectedWord = randomWords[currentWordIndex]
    const typedWord = e.target.value
  
    const isValid = expectedWord === typedWord;
  
    // Create a new array by concatenating the current isWordValid array
    const updatedIsWordValid = [...isWordValid, isValid];
  
    // Update the state with the new array
    setIsWordValid(updatedIsWordValid);
  
    console.log(isValid ? "PRASINO" : "KOKKINO");
  };

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
        // if(elapsedTime!== null){
        //   console.log("ELAPSED TIME: ", elapsedTime)
        //   let correctWords = 0
        //   let wordsChecked = 0
        //   isWordValid.map((item) => {
        //     console.log(item)
        //     if(item===true){
        //       console.log("WORDS CHECKED: ", wordsChecked)
        //       wordsChecked ++
        //       console.log("WORDS CHECKED: ", wordsChecked)
        //       correctWords ++
        //     }
        //   })
        //   console.log("Word COUNT: ", correctWords)
        //   console.log("Elapsed Time: ", elapsedTime/10)
        //   setWpm((correctWords/(elapsedTime/10)*60))
        //   console.log("WPM is: ",correctWords/(elapsedTime/1000)*60)
        // }
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