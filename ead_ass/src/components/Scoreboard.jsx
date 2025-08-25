import React from 'react';

const Scoreboard = ({ 
  runs, 
  wickets, 
  overs, 
  rahulScore, 
  rohitScore, 
  isRahulStriker, 
  isFreeHit 
}) => {
  const isAllOut = wickets >= 10;
  
  return (
    <div className="scoreboard">
      <div className="cricket-ball"></div>
      <div className="team-score">
        <h2>{runs}/{wickets}</h2>
        <p>{overs} Overs</p>
        {isAllOut && <div className="all-out-message">All Out!</div>}
        {isFreeHit && <div className="free-hit-indicator">FREE HIT</div>}
      </div>
      
      <div className="batsmen">
        <div className={`batsman ${isRahulStriker ? 'striker' : ''}`}>
          <span className="batsman-name">Rahul</span>: {rahulScore}
          {isRahulStriker && <span className="striker-mark">*</span>}
        </div>
        <div className={`batsman ${!isRahulStriker ? 'striker' : ''}`}>
          <span className="batsman-name">Rohit</span>: {rohitScore}
          {!isRahulStriker && <span className="striker-mark">*</span>}
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
