import React, { Component } from 'react';
import './styles/Contestant.css';

class Contestant extends Component {
  render() {
    let contestant = this.props.contestants.filter(
      (contest) => contest.id === this.props.id
    )[0];
    let borderStyle = this.props.won ? 'winnerBorder' : 'loserBorder';
    let pointStyle = this.props.won ? 'winnerPoints' : 'loserPoints';
    return (
      <div className="contestant" id={borderStyle}>
        <p className="contestantName">
          {contestant ? contestant.name : 'Unknown'}
        </p>
        <p className={pointStyle}>{this.props.points}</p>
      </div>
    );
  }
}

export default Contestant;
