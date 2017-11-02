import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import Survey from './Survey';
import Results from './Results';
import Intro from '../components/Intro';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: {},
      results: {}
    }
    this.handleAnswers = this.handleAnswers.bind(this);
    this.calculateResults = this.calculateResults.bind(this);
    this.test = this.test.bind(this);
  }

  componentDidMount = () => {
    let answers = {};
    for (let i in [...Array(135).keys()]) {
      answers[(parseInt(i, 10) + 1).toString()] = '';
    }
    this.setState({answers});
  }

  handleAnswers = (question, answer) => {
    let answerNumeric = '';
    if (answer === 'Not at all') {
      answerNumeric = 0;
    } else if (answer === 'Little') {
      answerNumeric = 1;
    } else if (answer === 'Some') {
      answerNumeric = 2;
    } else if (answer === 'Much') {
      answerNumeric = 3;
    }
    let temp = this.state.answers;
    temp[question] = answerNumeric;
    this.setState({answers: temp});
  }

  calculateResults = () => {
    // results will only have 27 keys, 1 for each gift
    console.log(this.props);
    let result = {};
    for (let i in [...Array(27).keys()]) {
      result[(parseInt(i, 10)).toString()] = 0
    }
    
    for (let question in this.state.answers) {
      // console.log('QUESTION ' + question + ' :: MOD 27 = ' + ((parseInt(question, 10) - 1) % 27));
      result[((parseInt(question, 10) - 1) % 27).toString()] += this.state.answers[question];
    }

    this.setState({results: result});
    this.props.history.push('/results');
  }

  test = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div className='main'>
        <Switch>
          <Route exact path='/' component={Intro} />
          <Route path='/quiz' render={(props) => <Survey handleAnswer={this.handleAnswers} results={this.calculateResults} {...props} />} />
          <Route path='/results' render={(props) => <Results results={this.state.results} {...props} />} />
          <Route component={Intro} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);