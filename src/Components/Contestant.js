import React, { Component } from 'react';
import './styles/Contestant.css';

class Contestant extends Component {
  render() {
    let contestant = this.props.contestants.filter(
      (contest) => contest.id === this.props.id
    )[0];
    let borderStyle = this.props.won
      ? { borderLeft: '#28B662 4px solid' }
      : { borderLeft: 'red 4px solid' };
    let pointStyle = this.props.won
      ? { fontWeigtht: 'bolder' }
      : { fontWeigtht: 'lighter' };
    return (
      <div className="contestant" style={borderStyle}>
        <p>{contestant.name}</p>
        <p style={pointStyle}>{this.props.points}</p>
      </div>
    );
  }
}

export default Contestant;
