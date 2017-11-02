import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import hasValue from 'has-value';
import GiftResults from '../components/GiftResults';
import Gifts from '../data/Gifts';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dominant: [],
      subordinate: [],
      other: []
    }
    this.interpretResults = this.interpretResults.bind(this);
  }

  componentDidMount = () => {
    if (!hasValue(this.props.results)) {
      this.props.history.push('/');
    } else {
      this.interpretResults(this.props.results);
    }
  }

  interpretResults = (results) => {
    let dominant = [];
    let subordinate = [];
    let other = [];
    // results = {0: 1, 1: 10, 2: 9, 3: 9, 4: 9, 5: 7, 6: 8, 7: 9, 8: 8, 9: 6, 10: 5, 11: 5, 12: 4, 13: 3, 14: 4, 15: 5, 16: 8, 17: 7, 18: 7, 19: 7, 20: 13, 21: 10, 22: 7, 23: 8, 24: 8, 25: 6, 26: 4}
    // console.log(results);
    // console.log(Object.keys(results));
    let sortedResults = Object.keys(results).sort(function(a,b){return results[a]-results[b]}).reverse();
    // console.log(sortedResults);
    for (let index in sortedResults) {
      if (index < 3) { dominant.push(Gifts[sortedResults[index]]) }
      else if (index >= 3 && index < 6) { subordinate.push(Gifts[sortedResults[index]]) }
      else { other.push(Gifts[sortedResults[index]]) }
    }

    // console.log(dominant);
    // console.log(subordinate);
    // console.log(other);

    this.setState({
      dominant: dominant,
      subordinate: subordinate,
      other: other
    });
  }

  render() {
    return (
      <div className='results'>
        <GiftResults title='Primary Gifts' data={this.state.dominant} />
        <br/>
        <GiftResults title='Secondary Gifts' data={this.state.subordinate} />
        <hr/>
        <p>Now that you have a better idea of what spiritual gifts you have, we suggest you look these over and ask a few questions for yourself:</p>
        <ul>
          <li>Did you expect these spiritual gifts? Why or why not?</li>
          <li>What ministries are you now leading in your church?</li>
          <li>With these answers, can you think of any ideas for new ministries you can start to lead in your church?</li>
        </ul>
        <p>We suggest you stay in prayer about these questions and the gifts above as you hone your skills to more effectively lead for Christ.</p>
      </div>
    );
  }
}

export default withRouter(Results);