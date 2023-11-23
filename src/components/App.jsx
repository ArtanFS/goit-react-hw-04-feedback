import { useState } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

import React from 'react';

const App = () => {
  const [value, setValue] = useState({ good: 0, neutral: 0, bad: 0 });

  const countTotalFeedback = () => {
    const { good, neutral, bad } = value;
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = (value.good / countTotalFeedback()) * 100;
    return positivePercentage;
  };

  const handleLeaveFeedback = option => {
    setValue(prev => ({ ...prev, [option]: prev[option] + 1 }));
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={Object.keys(value)}
        onLeaveFeedback={handleLeaveFeedback}
      />
      <h2>Statistics</h2>
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          value={value}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage().toFixed()}
        />
      )}
    </Section>
  );
};

export default App;
