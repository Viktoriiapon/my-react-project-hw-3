
import React from 'react';
import './Options.css';

const Options = ({ updateFeedback, onClick, resetFeedback, totalFeedback }) => {
  const handleReset = () => {
    resetFeedback();
   
  };

  return (
    <div className='options'>
      <button onClick={() => { updateFeedback("Good"); onClick(); }}>Good 👍</button>
      <button onClick={() => { updateFeedback("Neutral"); onClick(); }}>Neutral</button>
      <button onClick={() => { updateFeedback("Bad"); onClick(); }}>Bad 👎</button>
      {totalFeedback > 0 && (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
}

export default Options;