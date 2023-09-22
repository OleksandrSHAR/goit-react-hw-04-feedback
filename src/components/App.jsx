import { useState } from 'react';
import { PleseLeave } from './PleseLeave/PleseLeave';
import { Statistics } from './Statistics/Statistics';
import { GlobalStyle } from 'GlobalStyle';
import { Section } from './Section/Section';
import { Notification } from './Notification.jsx/Notification';

export const App = () => {
  const [good, setGoog] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    if (good === 0) {
      return 0;
    }
    return Math.round((good * 100) / countTotalFeedback);
  };
  const renderFeedbeck = bad + good + neutral > 0;
  return (
    <div>
      {' '}
      <Section title="Please leave feedback">
        <PleseLeave setGoog={setGoog} setNeutral={setNeutral} setBad={setBad} />
      </Section>
      <Section title="Statistics">
        {renderFeedbeck ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"> </Notification>
        )}
      </Section>
      <GlobalStyle />
    </div>
  );
};
