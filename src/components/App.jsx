import { useState } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

import React from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = (good / countTotalFeedback()) * 100;
    return positivePercentage;
  };

  const handleLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }

    // setValue(prev => ({ ...prev, [option]: prev[option] + 1 }));
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={options}
        onLeaveFeedback={handleLeaveFeedback}
      />
      <h2>Statistics</h2>
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          value={[good, neutral, bad]}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage().toFixed()}
        />
      )}
    </Section>
  );
};

export default App;
