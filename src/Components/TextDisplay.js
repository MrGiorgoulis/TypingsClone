import React, { useState, useEffect, useContext } from 'react'
import { IsWordValidContext, RandomWordsContext, SetRandomWordsContext } from './MainContainer';
import { RedoStateContext, RedoStateUpdateContext } from './MainContainer'

function TextDisplay({ wc, wordList }) {

  const randomWords = useContext(RandomWordsContext)
  const setRandomWords = useContext(SetRandomWordsContext)
  const isWordValid = useContext(IsWordValidContext)
  
  const setShouldReRender = useContext(RedoStateUpdateContext)
  const shouldReRender = useContext(RedoStateContext)

  useEffect(() => {
      setRandomWords([])
      if (wordList) {
        let wordListLen = wordList.english.length
        for (let i = 0; i < wc; i++){
          const newWord = wordList.english[parseInt(Math.random()*wordListLen)]
          setRandomWords(prevArray => [...prevArray, newWord])
        }
      }
  }, [wc, wordList,shouldReRender]);


  return (
    <div className='text-container'> 
      {randomWords.map((word, index) => 
      <span key={index}
      style={{
      color: isWordValid[index] === undefined ? '' : isWordValid[index] ? 'green' : 'red'}}
      >{word} </span>
      )}
    </div>
  )
}

export default TextDisplay