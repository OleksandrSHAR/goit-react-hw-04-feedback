import { Component } from 'react';
import { PleseLeave } from './PleseLeave/PleseLeave';
import { Statistics } from './Statistics/Statistics';
import { GlobalStyle } from 'GlobalStyle';
import { Section } from './Section/Section';
import { Notification } from './Notification.jsx/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = e => {
    this.setState({ [e]: this.state[e] + 1 });
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    if (good === 0) {
      return 0;
    }
    return Math.round((good * 100) / this.countTotalFeedback(this.state));
  };
  render() {
    const { good, neutral, bad } = this.state;
    const renderFeedbeck = bad + good + neutral > 0;
    return (
      <div>
        {' '}
        <Section title="Please leave feedback">
          <PleseLeave
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {renderFeedbeck ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.state
              )}
            />
          ) : (
            <Notification message="There is no feedback"> </Notification>
          )}
        </Section>
        <GlobalStyle />
      </div>
    );
  }
}
