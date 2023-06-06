// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

/////////////////////////


import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics"
import Notification from "./Notification/Notification";
import Section from "./Section/Section";
import css from './App.module.css'


export class App extends Component {
       state = {
        good: 0,
        neutral: 0,
        bad: 0
      };
   
    handleIncrementGood = () => {
      this.setState(prevState => ({           
        good: prevState.good + 1
    }))};
    handleIncrementNeutral = () => {
      this.setState(prevState => ({           
      neutral: prevState.neutral + 1
    }))};
    handleIncrementBad = () => {
      this.setState(prevState => ({           
        bad: prevState.bad + 1
    }))};
      
    

    render() {   
        const {good, neutral, bad} =  this.state;
        const totalFeedback  = this.countTotalFeedback();
        const positiveFeedback = this.countPositiveFeedbackPercentage()
        const isFeedbsck = (totalFeedback > 0)
          return (
            <div className={css.conteiner}>
                <Section title="Please leave feedback">
                <FeedbackOptions 
                      onIncrementGood={this.handleIncrementGood}
                      onIncrementNeutral={this.handleIncrementNeutral}
                      onIncrementBad={this.handleIncrementBad}
                  />
              </Section>
              <Section title="Statistiks">
                {
                  isFeedbsck ?
                  (<Statistics              
                  good={good}
                  neutral={neutral}
                  bad={bad} 
                  total={totalFeedback}
                  percentage = {positiveFeedback}
                  />)
                  :
                  (<Notification message="There is no feedback"/>)
                }
                </Section>
            </div>
        );
    }
    countTotalFeedback = () => {
      const {good, neutral, bad} =  this.state;
      return  good + neutral + bad 
    };
    countPositiveFeedbackPercentage = () => {
      const {good} = this.state
      const totalFeedback = this.countTotalFeedback();
      return Math.round(good / totalFeedback * 100)
    }
  }
