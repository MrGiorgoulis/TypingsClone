import React, { useState } from 'react'
import "./styles.css"
import TextLengthSelector from "./Components/TextLengthSelector";
import MainContainer from './Components/MainContainer';
import FetchData from './Components/FetchData';

export const WordCountContext = React.createContext()
export const UpdateWordCountContext = React.createContext()

function App() {

  const [wordCnt, setWordCnt] = useState(50)
  const updateWordCount = (newCount) => {
    setWordCnt(newCount)
  }

  return (

    <div className="typer">
      <div className="header">Typer</div>
      <div className="command-center">
        <div className="settings-bar">
          <UpdateWordCountContext.Provider value={setWordCnt}>
            <TextLengthSelector />
          </UpdateWordCountContext.Provider>
          <div className="stats-display">WPM: XX / ACC: XX</div>
        </div>
        <WordCountContext.Provider value={wordCnt}>
          <MainContainer className="main-container"/>
        </WordCountContext.Provider>
      </div>
      <div className="footer">user guide / themes</div>
    </div>
  );
}

export default App;
