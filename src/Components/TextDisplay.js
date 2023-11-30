import React, { useState, useEffect, useContext } from 'react'
import { RandomWordsContext, SetRandomWordsContext } from './MainContainer';

function TextDisplay({ wc, wordList }) {

  const randomWords = useContext(RandomWordsContext)
  const setRandomWords = useContext(SetRandomWordsContext)

  useEffect(() => {
    setRandomWords([])
    if (wordList) {
      let wordListLen = wordList.english.length
      for (let i = 0; i < wc; i++){
        const newWord = wordList.english[parseInt(Math.random()*wordListLen)]
        setRandomWords(prevArray => [...prevArray, newWord])
      }
    }
  }, [wc, wordList]);

  return (
    <div className='text-container'> 
      {randomWords.map((word, index) => 
      <span key={index}>{word} </span>
      )}
    </div>
  )
}

export default TextDisplay