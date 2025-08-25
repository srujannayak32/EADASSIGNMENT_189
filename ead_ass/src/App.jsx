import { useState } from 'react'
import './App.css'
import Scoreboard from './components/Scoreboard'
import Controls from './components/Controls'

function App() {
  // Game state
  const [runs, setRuns] = useState(0)
  const [wickets, setWickets] = useState(0)
  const [balls, setBalls] = useState(0)
  const [overs, setOvers] = useState(0)
  const [rahulScore, setRahulScore] = useState(0)
  const [rohitScore, setRohitScore] = useState(0)
  const [isRahulStriker, setIsRahulStriker] = useState(true)
  const [isFreeHit, setIsFreeHit] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  // Calculate overs display format (e.g., 5.3)
  const oversDisplay = `${overs}.${balls}`

  // Handle runs scored
  const handleRunsClick = (runsScored) => {
    // Add runs to team total
    setRuns(runs + runsScored)

    // Add runs to striker's score
    if (isRahulStriker) {
      setRahulScore(rahulScore + runsScored)
    } else {
      setRohitScore(rohitScore + runsScored)
    }

    // For odd runs (1,3), switch striker
    if (runsScored % 2 === 1) {
      setIsRahulStriker(!isRahulStriker)
    }

    // Increment ball count for valid deliveries
    incrementBallCount()

    // Reset free hit status after a valid delivery
    if (isFreeHit) {
      setIsFreeHit(false)
      setStatusMessage('')
    }
  }

  // Handle wicket
  const handleWicketClick = () => {
    // Don't allow wickets on free hit
    if (isFreeHit) {
      return
    }

    // Increment wicket count (max 10)
    if (wickets < 10) {
      const newWickets = wickets + 1
      setWickets(newWickets)
      
      // Reset striker to Rahul (simulating new batsman)
      if (isRahulStriker) {
        setRahulScore(0)
      } else {
        setRohitScore(0)
      }
      setIsRahulStriker(true)
      
      // Increment ball count
      incrementBallCount()
      
      // Check if all out
      if (newWickets >= 10) {
        setStatusMessage('ALL OUT!')
      } else {
        setStatusMessage('Wicket!')
      }
    }
  }

  // Handle LBW
  const handleLBWClick = () => {
    // Same as wicket but with different status message
    if (isFreeHit) {
      return
    }

    if (wickets < 10) {
      const newWickets = wickets + 1
      setWickets(newWickets)
      
      if (isRahulStriker) {
        setRahulScore(0)
      } else {
        setRohitScore(0)
      }
      setIsRahulStriker(true)
      
      incrementBallCount()
      
      // Check if all out
      if (newWickets >= 10) {
        setStatusMessage('ALL OUT!')
      } else {
        setStatusMessage('LBW!')
      }
    }
  }

  // Handle wide
  const handleWideClick = () => {
    // Add 1 run to team total only
    setRuns(runs + 1)
    // Do not increment ball count
    setStatusMessage('Wide!')
  }

  // Handle no ball
  const handleNoBallClick = () => {
    // Add 1 run to team total
    setRuns(runs + 1)
    
    // Add 1 run to striker's score
    if (isRahulStriker) {
      setRahulScore(rahulScore + 1)
    } else {
      setRohitScore(rohitScore + 1)
    }
    
    // Do not increment ball count
    setStatusMessage('No Ball!')
  }

  // Handle free hit
  const handleFreeHitClick = () => {
    // Add 1 run to team total
    setRuns(runs + 1)
    
    // Set next delivery as free hit
    setIsFreeHit(true)
    
    setStatusMessage('Free Hit! Next ball is a Free Hit')
  }

  // Handle bye
  const handleByeClick = () => {
    // Add 1 run to team total only
    setRuns(runs + 1)
    
    // Increment ball count
    incrementBallCount()
    
    setStatusMessage('Bye!')
  }

  // Handle leg bye
  const handleLegByeClick = () => {
    // Add 1 run to team total only
    setRuns(runs + 1)
    
    // Increment ball count
    incrementBallCount()
    
    setStatusMessage('Leg Bye!')
  }

  // Switch striker manually
  const handleSwitchStrikerClick = () => {
    setIsRahulStriker(!isRahulStriker)
    setStatusMessage('Strikers Switched!')
  }

  // Reset everything
  const handleResetClick = () => {
    setRuns(0)
    setWickets(0)
    setBalls(0)
    setOvers(0)
    setRahulScore(0)
    setRohitScore(0)
    setIsRahulStriker(true)
    setIsFreeHit(false)
    setStatusMessage('Scoreboard Reset!')
  }

  // Helper function to increment ball count and handle over transitions
  const incrementBallCount = () => {
    // If we're already at 10 wickets, don't increment ball count
    if (wickets >= 10) {
      return
    }

    // If we're on 5 balls (0-indexed: 0,1,2,3,4,5), increment over
    if (balls === 5) {
      setOvers(overs + 1)
      setBalls(0)
      // Switch striker at end of over
      setIsRahulStriker(!isRahulStriker)
    } else {
      // Otherwise just increment the ball count
      setBalls(balls + 1)
    }
  }

  return (
    <div className="container">
      <h1>Cricket Scoreboard</h1>
      
      <div className="scoreboard">
        <div className="team-score">
          <h2>{runs}/{wickets}</h2>
          <p>Overs: {oversDisplay}</p>
          {isFreeHit && <div className="free-hit-indicator">FREE HIT</div>}
        </div>
        
        <div className="batsmen">
          <div className={`batsman ${isRahulStriker ? 'striker' : ''}`}>
            Rahul{isRahulStriker && ' *'}: {rahulScore}
          </div>
          <div className={`batsman ${!isRahulStriker ? 'striker' : ''}`}>
            Rohit{!isRahulStriker && ' *'}: {rohitScore}
          </div>
        </div>

        <div className="runs-section">
          <h3 className="section-title">Runs</h3>
          <div className="buttons">
            <button className="run-btn" onClick={() => handleRunsClick(1)}>1</button>
            <button className="run-btn" onClick={() => handleRunsClick(2)}>2</button>
            <button className="run-btn" onClick={() => handleRunsClick(3)}>3</button>
            <button className="run-btn" onClick={() => handleRunsClick(4)}>4</button>
            <button className="run-btn" onClick={() => handleRunsClick(6)}>6</button>
          </div>
        </div>
      </div>
      
      <div className="control-section">
        <h3 className="section-title">Wickets</h3>
        <div className="buttons">
          <button className="wicket-btn" onClick={handleWicketClick} disabled={isFreeHit}>Wicket</button>
          <button className="wicket-btn" onClick={handleLBWClick} disabled={isFreeHit}>LBW</button>
        </div>
      </div>
      
      <div className="control-section">
        <h3 className="section-title">Extras</h3>
        <div className="buttons">
          <button className="extra-btn" onClick={handleWideClick}>Wide</button>
          <button className="extra-btn" onClick={handleNoBallClick}>No Ball</button>
          <button className="extra-btn" onClick={handleByeClick}>Bye</button>
          <button className="extra-btn" onClick={handleLegByeClick}>Leg Bye</button>
        </div>
        <div className="buttons" style={{ marginTop: '10px' }}>
          <button className="extra-btn" onClick={handleFreeHitClick}>Free Hit</button>
        </div>
      </div>
      
      <div className="control-section">
        <h3 className="section-title">Controls</h3>
        <div className="buttons">
          <button className="control-btn" onClick={handleSwitchStrikerClick}>Switch</button>
          <button className="reset-btn" onClick={handleResetClick}>Reset</button>
        </div>
      </div>
      
      {statusMessage && (
        <div className="status-message">
          {statusMessage}
        </div>
      )}
    </div>
  )
}

export default App
