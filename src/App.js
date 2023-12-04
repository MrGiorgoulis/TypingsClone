import React, { useState, useEffect } from 'react'
import "./styles.css"
import CommandCenter from './Components/CommandCenter';

// export const RedoStateContext = React.createContext()
// export const RedoStateUpdateContext = React.createContext()

export const IsTimerActive = React.createContext()
export const SetStopTimer = React.createContext()
export const ElapsedTimeContext = React.createContext()
export const SetWpmContext = React.createContext()
export const WpmContext = React.createContext()

function App() {
  const [wpm, setWpm] = useState(null)
  const [startTime, setStartTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);


  useEffect(() => {
    let interval

    if (isActive) {
      setStartTime(performance.now() - elapsedTime);

      interval = setInterval(() => {
        setElapsedTime(performance.now() - startTime);
      }, 1); // 1 millisecond interval
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval)
  }, [isActive, elapsedTime, startTime])   

  const alterTimer = (timerNewState) => {
    {console.log("YOUR TIME: ", parseInt(elapsedTime))}
    setIsActive(timerNewState);
  };

  return (
    <div className="typer">
      <div className="header">Typer</div>
      <ElapsedTimeContext.Provider value={elapsedTime}>
        <WpmContext.Provider value={wpm}>
          <IsTimerActive.Provider value={isActive}>
            <SetStopTimer.Provider value={alterTimer}>
              <SetWpmContext.Provider value={setWpm}>
                <CommandCenter/>
              </SetWpmContext.Provider>
            </SetStopTimer.Provider>
          </IsTimerActive.Provider>
        </WpmContext.Provider>
      </ElapsedTimeContext.Provider>
      <div className="footer">user guide / themes</div>
    </div>
  )
}

export default App;
