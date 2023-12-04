import React, { useState, useEffect } from 'react'
import "./styles.css"
import CommandCenter from './Components/CommandCenter';

// export const RedoStateContext = React.createContext()
// export const RedoStateUpdateContext = React.createContext()

export const IsTimerActive = React.createContext()
export const SetStopTimer = React.createContext()


function App() {
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)

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
        <IsTimerActive.Provider value={isActive}>
          <SetStopTimer.Provider value={setIsActive}>
            <CommandCenter/>
          </SetStopTimer.Provider>
        </IsTimerActive.Provider>
      <div className="footer">user guide / themes</div>
    </div>
  );
}

export default App;
