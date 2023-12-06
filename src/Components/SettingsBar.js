import React, { useContext, useEffect, useState } from "react"
import TextLengthSelector from "./TextLengthSelector"
import { WpmContext, IsWordValidContext, IsTimerActive, ElapsedTimeContext, SetElapsedTimeContext, SetWpmContext } from "../App"
import { WordCountContext } from "./CommandCenter"

function SettingsBar(){ 

    const isWordValid = useContext(IsWordValidContext)
    const isActive = useContext(IsTimerActive)
    const elapsedTime = useContext(ElapsedTimeContext)
    const setElapsedTime = useContext(SetElapsedTimeContext)
    const setWpm = useContext(SetWpmContext)
    const wordCount = useContext(WordCountContext)

    const wpm = useContext(WpmContext)

    const [acc, setAcc] = useState(null)

    useEffect(() => {

        if(isActive){
          const interval = setInterval(() => {
            setElapsedTime((prevTime) => prevTime + 1)
          },100)
        return () => clearInterval(interval)
        } 
        else{
          if(elapsedTime!== null){
            console.log("ELAPSED TIME: ", elapsedTime)
            let correctWords = 0
            let wordsChecked = 0
            isWordValid.map((item) => {
              console.log(item)
              if(item===true){
                console.log("WORDS CHECKED: ", wordsChecked)
                wordsChecked ++
                console.log("WORDS CHECKED: ", wordsChecked)
                correctWords ++
              }
            })
            console.log("Word COUNT: ", correctWords)
            console.log("Elapsed Time: ", elapsedTime/10)
            if(elapsedTime>0){
              setWpm((correctWords/(elapsedTime/10)*60))
              setAcc((correctWords/wordCount)*100)
            }
            else{
              setWpm(null)
            }
            console.log(typeof wpm)
            console.log("WPM is: ",correctWords/(elapsedTime/1000)*60)
          }
          setElapsedTime(0)
        }
      },[isActive])   

    return(
        <div className="settings-bar">
            <TextLengthSelector />
            <div className="stats-display">WPM: {wpm!==null ? parseInt(wpm) : 'XX'} / ACC: {acc!==null ? acc : 'XX'}</div>
        </div>
    )
}

export default SettingsBar