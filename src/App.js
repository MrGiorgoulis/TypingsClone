import "./styles.css"

function App() {
  return (
    <div className="typer">
      <div className="header">Typer</div>
      <div className="command-center">
        <div className="settings-bar">
          <div className="text-length-selector">10 / 25 / 50 / 100 / 250</div>
          <div className="stats-display">WPM: XX / ACC: XX</div>
        </div>
        <div className="main-container">
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
