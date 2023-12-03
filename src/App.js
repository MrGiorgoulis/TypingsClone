import React, { useState, useCallback } from 'react'
import "./styles.css"
import TextLengthSelector from "./Components/TextLengthSelector";
import MainContainer from './Components/MainContainer';

export const WordCountContext = React.createContext()
export const UpdateWordCountContext = React.createContext()

export const RedoStateContext = React.createContext()
export const RedoStateUpdateContext = React.createContext()


function App() {

  const [wordCnt, setWordCnt] = useState(10)

  const [redoState, setRedoState] = useState(true)

  const updateRedoState = useCallback(() => {
    setRedoState(prevState => !prevState)
  }, [])

  return (

    <div className="typer">
      <div className="header">Typer</div>
      <RedoStateContext.Provider value={redoState}>
        <RedoStateUpdateContext.Provider value={updateRedoState}>
          <div className="command-center">
            <div className="settings-bar">
              <UpdateWordCountContext.Provider value={setWordCnt}>
                <TextLengthSelector />
              </UpdateWordCountContext.Provider>
              <div className="stats-display">WPM: XX / ACC: XX</div>
            </div>
            <WordCountContext.Provider value={wordCnt}>
              <MainContainer className="main-container" />
            </WordCountContext.Provider>
          </div>
        </RedoStateUpdateContext.Provider>
      </RedoStateContext.Provider>
      <div className="footer">user guide / themes</div>
    </div>
  );
}

export default App;
