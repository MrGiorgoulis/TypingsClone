import React, { useState, useCallback, useEffect } from 'react'
import "./styles.css"
import TextLengthSelector from "./Components/TextLengthSelector";
import MainContainer from './Components/MainContainer';

export const WordCountContext = React.createContext()
export const UpdateWordCountContext = React.createContext()

export const RedoStateContext = React.createContext()
export const RedoStateUpdateContext = React.createContext()

export const IsTimerActive = React.createContext()
export const SetStopTimer = React.createContext()


function App() {

  const [wordCnt, setWordCnt] = useState(10)

  const [redoState, setRedoState] = useState(true)

  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const updateRedoState = useCallback(() => {
    setRedoState(prevState => !prevState)
  }, [])

  useEffect(() => {
    let interval

    if(isActive) {
      interval = setInterval(() =>{
        setSeconds((prevSecond) => prevSecond + 1)
      }, 1000)
    }
    else{
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isActive])  

  return (

    <div className="typer">
      <div className="header">Typer</div>
      <RedoStateContext.Provider value={redoState}>
        <RedoStateUpdateContext.Provider value={updateRedoState}>
          <IsTimerActive.Provider value={isActive}>
            <SetStopTimer.Provider value={setIsActive}>
              <div className="command-center">
                <div className="settings-bar">
                  <UpdateWordCountContext.Provider value={setWordCnt}>
                    <TextLengthSelector />
                  </UpdateWordCountContext.Provider>
                  <div className="stats-display">WPM: XX / ACC: XX / SECS: {seconds}</div>
                </div>
                <WordCountContext.Provider value={wordCnt}>
                  <MainContainer className="main-container" />
                </WordCountContext.Provider>
              </div>
            </SetStopTimer.Provider>
          </IsTimerActive.Provider>
        </RedoStateUpdateContext.Provider>
      </RedoStateContext.Provider>
      <div className="footer">user guide / themes</div>
    </div>
  );
}

export default App;
