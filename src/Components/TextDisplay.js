import React, { useState, useEffect } from 'react'

function TextDisplay({ wc, wordList }) {

  const [randomWords, setRandomWords] = useState([])

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