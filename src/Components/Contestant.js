import React, { Component } from 'react';

class Contestant extends Component {
  render() {
    let contestant = this.props.contestants.filter(
      (contest) => contest.id === this.props.id
    )[0];
    return (
      <div>
        <p>{contestant.name}</p>
        <p>{this.props.points}</p>
      </div>
    );
  }
}

export default Contestant;
