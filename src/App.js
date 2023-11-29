import React, {useState} from 'react'
import "./styles.css"
import TextLengthSelector from "./Components/TextLengthSelector";
import FetchData from "./Components/FetchData"

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
          <TextLengthSelector wordCount={wordCnt} onUpdateWordCount={updateWordCount}/>
          <div className="stats-display">WPM: XX / ACC: XX</div>
        </div>
        <div className="main-container">
          <FetchData/>
          <div className="text-display">
            Cillum velit ex minim laborum esse in ullamco Lorem exercitation commodo et. 
            Mollit Lorem laboris aute proident. Esse  cillum labore ullamco eu duis consequat 
            esse
          </div>
          <div className="input-container">
            <input type="text" className="text-input"></input>
            <button className="redo-button">redo</button>
          </div>
        </div>
      </div>
      <div className="footer">user guide / themes</div>
    </div>
  );
}

export default App;
