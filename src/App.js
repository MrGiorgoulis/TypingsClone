import React, { useState, useEffect } from 'react'
import "./styles.css"
import CommandCenter from './Components/CommandCenter';

export const IsTimerActive = React.createContext()
export const SetStopTimer = React.createContext()
export const ElapsedTimeContext = React.createContext()
export const SetElapsedTimeContext = React.createContext()
export const SetWpmContext = React.createContext()
export const WpmContext = React.createContext()
export const IsWordValidContext = React.createContext()
export const SetIstWordValidContext = React.createContext()

function App() {
  const [wpm, setWpm] = useState(null)
  const [isActive, setIsActive] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [isWordValid, setIsWordValid] = useState([])

  return (
    <div className="typer">
      <div className="header">Typer</div>
      <SetElapsedTimeContext.Provider value={setElapsedTime}>
        <ElapsedTimeContext.Provider value={elapsedTime}>
          <WpmContext.Provider value={wpm}>
            <IsTimerActive.Provider value={isActive}>
              <SetStopTimer.Provider value={setIsActive}>
                <SetWpmContext.Provider value={setWpm}>
                  <IsWordValidContext.Provider value={isWordValid}>
                    <SetIstWordValidContext.Provider value={setIsWordValid}>
                      <CommandCenter />
                    </SetIstWordValidContext.Provider>
                  </IsWordValidContext.Provider>
                </SetWpmContext.Provider>
              </SetStopTimer.Provider>
            </IsTimerActive.Provider>
          </WpmContext.Provider>
        </ElapsedTimeContext.Provider>
      </SetElapsedTimeContext.Provider>
      <div className="footer">user guide / themes</div>
    </div>
  )
}

export default App;
