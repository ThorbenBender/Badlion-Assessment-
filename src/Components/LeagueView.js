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
import moment from 'moment';

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
      <div className="league">
        <h2 className="leagueName">{this.props.league.name.full}</h2>
        <p className="leagueDate">
          {moment(this.props.league.timeline.signUp.begin).format(
            'Do MMMM YYYY'
          )}
        </p>
        <button class="sortButton">
          Date<i class="fa fa-angle-up"></i>
        </button>
        <div class="results">
          {this.props.results.map((result, key) => (
            <div key={key} className="contestants">
              <p class="resultDate">{moment(result.beginAt).format('h:mm')}</p>
              <div>
                <Contestant
                  points={result.participants[0].points[0]}
                  id={result.participants[0].id}
                  contestants={this.props.contestants}
                  won={
                    result.participants[0].points[0] >
                    result.participants[1].points[0]
                  }
                />
              </div>
              <div>
                <Contestant
                  points={result.participants[1].points[0]}
                  id={result.participants[1].id}
                  contestants={this.props.contestants}
                  won={
                    result.participants[0].points[0] <
                    result.participants[1].points[0]
                  }
                />
              </div>
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
