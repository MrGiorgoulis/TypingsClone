import React, { useState, useEffect } from 'react'
import "./styles.css"
import CommandCenter from './Components/CommandCenter';

// export const RedoStateContext = React.createContext()
// export const RedoStateUpdateContext = React.createContext()

export const IsTimerActive = React.createContext()
export const SetStopTimer = React.createContext()
export const ElapsedTimeContext = React.createContext()
export const SetElapsedTimeContext = React.createContext()
export const SetWpmContext = React.createContext()
export const WpmContext = React.createContext()
export const IsWordValidContext = React.createContext()
export const SetIstWordValidContext = React.createContext()

function App() {
  const [wpm, setWpm] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [isWordValid, setIsWordValid] = useState([])


  // useEffect(() => {

  //   if(isActive){
  //     const interval = setInterval(() => {
  //       setElapsedTime((prevTime) => prevTime + 1)
  //     },100)
  //   return () => clearInterval(interval)
  //   } 
  //   else{
  //     if(elapsedTime!== null){
  //       console.log("ELAPSED TIME: ", elapsedTime)
  //       let correctWords = 0
  //       let wordsChecked = 0
  //       isWordValid.map((item) => {
  //         console.log(item)
  //         if(item===true){
  //           console.log("WORDS CHECKED: ", wordsChecked)
  //           wordsChecked ++
  //           console.log("WORDS CHECKED: ", wordsChecked)
  //           correctWords ++
  //         }
  //       })
  //       console.log("Word COUNT: ", correctWords)
  //       console.log("Elapsed Time: ", elapsedTime/10)
  //       if(elapsedTime>0){
  //         setWpm((correctWords/(elapsedTime/10)*60))
  //       }
  //       else{
  //         setWpm(null)
  //       }
  //       console.log(typeof wpm)
  //       console.log("WPM is: ",correctWords/(elapsedTime/1000)*60)
  //     }
  //     setElapsedTime(0)
  //   }
  // },[isActive])   

  return (
    <div className="typer">
      COUNTER - {elapsedTime}
      <div className="header">Typer</div>
      <SetElapsedTimeContext.Provider value={setElapsedTime}>
        <ElapsedTimeContext.Provider value={elapsedTime}>
          <WpmContext.Provider value={wpm}>
            <IsTimerActive.Provider value={isActive}>
              <SetStopTimer.Provider value={setIsActive}>
                <SetWpmContext.Provider value={setWpm}>
                  <IsWordValidContext.Provider value={isWordValid}>
                    <SetIstWordValidContext.Provider value={setIsWordValid}>
                      <CommandCenter/>
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
