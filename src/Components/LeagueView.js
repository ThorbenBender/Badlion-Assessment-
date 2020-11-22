import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import {
  getLeague,
  getContestants,
  getResults,
} from '../redux/action/ActionCreator';
import { withRouter } from 'react-router-dom';
import Contestant from './Contestant';
import './styles/LeagueView.css';

class LeagueView extends Component {
  componentDidMount() {
    this.props.getLeague(this.props.match.params.id);
    this.props.getResults(this.props.match.params.id);
    this.props.getContestants(this.props.match.params.id);
  }

  render() {
    if (
      Object.keys(this.props.league).length === 0 &&
      Object.keys(this.props.results).length === 0 &&
      this.props.contestants.length === 0
    ) {
      return <p>Loading...</p>;
    }
    return (
      <div class="league">
        <h2>{this.props.league.name.full}</h2>
        <p>{this.props.league.timeline.signUp.begin}</p>
        <div>
          {this.props.results.map((result, key) => (
            <div key={key}>
              <p>{result.beginAt}</p>
              {result.participants.map((contestantData, key) => (
                <Contestant
                  key={key}
                  points={contestantData.points[0]}
                  id={contestantData.id}
                  contestants={this.props.contestants}
                />
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
    contestants: state.contestants,
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
