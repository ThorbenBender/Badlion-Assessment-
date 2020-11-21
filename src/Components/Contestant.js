import React, { Component } from 'react';

class Contestant extends Component {
  render() {
    return (
      <div>
        <p>{this.props.contestant.points[0]}</p>
      </div>
    );
  }
}

export default Contestant;
