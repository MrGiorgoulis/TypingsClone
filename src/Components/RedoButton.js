import React, { useContext } from 'react'
import { RedoStateUpdateContext } from '../App'

function RedoButton() {

  const updateRedoState = useContext(RedoStateUpdateContext)

  const handleClick = () => {
    updateRedoState()
  }

  return (
      <button className="redo-button" onClick={handleClick}>redo</button>
  )
}

export default RedoButton