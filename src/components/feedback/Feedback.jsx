import React from 'react';

const Feedback = ({ reactions, total, positive }) => {
  return (
    <>
      <ul>
        <li>Good: {reactions.Good}</li>
        <li>Neutral: {reactions.Neutral}</li>
        <li>Bad: {reactions.Bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positive}%</li>
      </ul>
    </>
  );
}

export default Feedback;