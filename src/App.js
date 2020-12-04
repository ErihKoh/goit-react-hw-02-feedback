import { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistic from './components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {};

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions />
        </Section>
        <Section title="Statistics">
          <Statistic />
        </Section>
      </>
    );
  }
}

export default App;
