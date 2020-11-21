import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import {
  getLeague,
  getContestants,
  getResults,
} from '../redux/action/ActionCreator';
import { withRouter } from 'react-router-dom';
import Contestant from './Contesttant';

class LeagueView extends Component {
  componentDidMount() {
    this.props.getLeague(this.props.match.params.id);
    this.props.getResults(this.props.match.params.id);
  }

  render() {
    if (
      Object.keys(this.props.league).length === 0 &&
      Object.keys(this.props.results).length === 0
    ) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <h2>{this.props.league.name.full}</h2>
        <p>{this.props.league.timeline.signUp.begin}</p>
        <div>
          {this.props.results.map((result, key) => (
            <div>
              <p>{result.beginAt}</p>
              {result.participants.map((contestant) => (
                <Contestant contestant={contestant} />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    league: state.league,
    results: state.results,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getLeague,
      getResults,
      getContestants,
    },
    dispatch
  );
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(LeagueView);
