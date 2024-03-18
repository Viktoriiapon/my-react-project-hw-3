import React, { useEffect, useState } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

function App() {

  const initialFeedback = JSON.parse(localStorage.getItem('counterValues')) ||{
    good: 0,
    neutral: 0,
    bad: 0};

  const [counter, setCounter] = useState(()=>{
  const countFromLocal = localStorage.getItem('counterValues');
  const parsedCount = JSON.parse(countFromLocal) ?? initialFeedback;
  return parsedCount;
  });

  const updateFeedback = feedbackType => {  
    setCounter({ ...counter, [feedbackType]: counter[feedbackType] + 1 });
  };

  const total = counter.Bad + counter.Good + counter.Neutral;
  const positive = Math.round(((counter.Good + counter.Neutral)/ total) * 100);

  const [isVisible, setIsVisible] = useState(false);
  const onToggleFeedbackVisibility =()=>{
    setIsVisible(!isVisible)
  }

  const resetFeedback = () => {
    setCounter({ Good: 0, Neutral: 0, Bad: 0 });
  };
  useEffect(()=>{
localStorage.setItem('counterValues', JSON.stringify(counter))
console.log(counter);
  }, [counter])

  return (
    <div>
      <Description />
      <Options 
        updateFeedback={updateFeedback} 
        onClick={onToggleFeedbackVisibility} 
        totalFeedback={total} 
        resetFeedback={resetFeedback} 
      />
      {total > 0 && <Feedback reactions={counter} total={total} positive={positive} />}
      {total === 0 && <Notification />} 
    </div>
  );
}

export default App;