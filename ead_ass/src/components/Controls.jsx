import React from 'react';

const Controls = ({ 
  onRunsClick, 
  onWicketClick, 
  onLBWClick,
  onWideClick,
  onNoBallClick,
  onFreeHitClick,
  onByeClick,
  onLegByeClick,
  onSwitchStrikerClick,
  onResetClick,
  isFreeHit
}) => {
  return (
    <div className="controls">
      <div className="control-section">
        <h3>Runs</h3>
        <div className="buttons">
          <button className="run-btn" onClick={() => onRunsClick(1)}>1</button>
          <button className="run-btn" onClick={() => onRunsClick(2)}>2</button>
          <button className="run-btn" onClick={() => onRunsClick(3)}>3</button>
          <button className="run-btn" onClick={() => onRunsClick(4)}>4</button>
          <button className="run-btn" onClick={() => onRunsClick(6)}>6</button>
        </div>
      </div>
      
      <div className="control-section">
        <h3>Wickets</h3>
        <div className="buttons">
          <button 
            className="wicket-btn" 
            onClick={onWicketClick}
            disabled={isFreeHit}
          >
            Wicket
          </button>
          <button 
            className="wicket-btn" 
            onClick={onLBWClick}
            disabled={isFreeHit}
          >
            LBW
          </button>
        </div>
      </div>
      
      <div className="control-section">
        <h3>Extras</h3>
        <div className="buttons">
          <button className="extra-btn" onClick={onWideClick}>Wide</button>
          <button className="extra-btn" onClick={onNoBallClick}>No Ball</button>
          <button className="extra-btn" onClick={onFreeHitClick}>Free Hit</button>
          <button className="extra-btn" onClick={onByeClick}>Bye</button>
          <button className="extra-btn" onClick={onLegByeClick}>Leg Bye</button>
        </div>
      </div>
      
      <div className="control-section">
        <h3>Controls</h3>
        <div className="buttons">
          <button className="control-btn" onClick={onSwitchStrikerClick}>Switch Striker</button>
          <button className="reset-btn" onClick={onResetClick}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
