import React, { useState, useEffect } from 'react'

function TextDisplay({ wc, wordList }) {

  const [randomWords, setRandomWords] = useState([])

  useEffect(() => {
    {console.log("TextDisplay useEffect run wordList is: ", wordList)}
    setRandomWords([])
    if (wordList) {
      let wordListLen = wordList.english.length
      for (let i = 0; i < wc; i++){
        const newWord = wordList.english[parseInt(Math.random()*wordListLen)]
        setRandomWords(prevArray => [...prevArray, newWord])
      }
    }
    else {
      console.log("wordList is undefined or null")
    }

  }, [wc, wordList]);

  return (
    <div> 
      {console.log(randomWords)}
      {randomWords.map((word, index) => 
      <span key={index}>{word} </span>
      )}

    </div>
  )
}

export default TextDisplay