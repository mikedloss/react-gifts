import React, { Component } from 'react';
import styled from 'styled-components';
import AnswerButton from '../components/AnswerButton';
import Questions from '../data/Questions';
import Responses from '../data/Responses';

const QuestionText = styled.p`
  height: 10rem;
`

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBlocking: true,
      currentQuestion: 1,
      nextQuestion: 2
    }
    this.calculateResponse = this.calculateResponse.bind(this);
  }

  calculateResponse = (response) => {
    // save to parent state
    this.props.handleAnswer(
      this.state.currentQuestion,
      response
    );
    // increment current question and next question
    let next = this.state.currentQuestion + 1;
    if (next === 136) {
      this.props.results();
    }
    this.setState({ currentQuestion: next });
    this.forceUpdate();
  }
  
  render() {
    let question = Questions[this.state.currentQuestion - 1];
    return (
      <div className='survey'>
        <h4>Question {this.state.currentQuestion} of 135</h4>
        <QuestionText>{question}</QuestionText>
        <div className='row'>
        {Responses.map((response, index) => {
          return <AnswerButton answer={response} response={this.calculateResponse} key={index} />
        })}
        </div>
      </div>
    );
  }
}

export default Survey;