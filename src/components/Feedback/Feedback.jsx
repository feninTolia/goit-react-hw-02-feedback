import React, { Component } from 'react';
import Section from '../Section/Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackBtnClick = evt => {
    if (evt.target.name === 'goodBtn') {
      this.setState(state => {
        return { good: state.good + 1 };
      });
    }

    if (evt.target.name === 'neutralBtn') {
      this.setState(state => {
        return { neutral: state.neutral + 1 };
      });
    }

    if (evt.target.name === 'badBtn') {
      this.setState(state => {
        return { bad: state.bad + 1 };
      });
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    if (good === 0 && neutral === 0 && bad === 0) {
      return;
    }
    return Number((good * 100) / (good + neutral + bad)).toFixed(1);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions onFeedbackBtnClick={this.handleFeedbackBtnClick} />
        {(good > 0 || neutral > 0 || bad > 0) && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    );
  }
}
