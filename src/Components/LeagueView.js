import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import {
  getLeague,
  getContestants,
  getResults,
  sortResultsByNew,
  sortResultsByOld,
} from '../redux/action/ActionCreator';
import { withRouter } from 'react-router-dom';
import Contestant from './Contestant';
import './styles/LeagueView.css';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

class LeagueView extends Component {
  componentDidMount() {
    this.props.getLeague(this.props.match.params.id);
    this.props.getResults(this.props.match.params.id);
    this.props.getContestants(this.props.match.params.id);
  }

  state = {
    arrowDown: false,
  };

  sortResults = () => {
    if (!this.state.arrowDown) {
      this.props.sortResultsByNew();
    } else {
      this.props.sortResultsByOld();
    }
    this.setState((st) => ({ arrowDown: !st.arrowDown }));
  };

  render() {
    console.log(this.props.contestants.length);
    if (
      Object.keys(this.props.league).length === 0 &&
      Object.keys(this.props.results).length === 0 &&
      this.props.contestants.length === undefined
    ) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className="league">
          <div className="leagueHeader">
            <h2 className="leagueName">{this.props.league.name.full}</h2>
            <p className="leagueDate">
              {moment(this.props.league.timeline.signUp.begin).format(
                'Do MMMM YYYY'
              )}
            </p>
          </div>
          <div className="results">
            <button class="sortButton" onClick={this.sortResults}>
              Date
              <FontAwesomeIcon
                className="arrow"
                icon={this.state.arrowDown ? faCaretDown : faCaretUp}
              />
            </button>
            {this.props.results.map((result, key) => (
              <div key={key} className="result">
                <p class="resultDate">
                  {moment(result.beginAt).format('h:mm')}
                </p>
                <Contestant
                  points={result.participants[0].points[0]}
                  id={result.participants[0].id}
                  contestants={this.props.contestants}
                  won={
                    result.participants[0].points[0] >
                    result.participants[1].points[0]
                  }
                />
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
            ))}
          </div>
        </div>
      );
    }
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
      sortResultsByNew,
      sortResultsByOld,
    },
    dispatch
  );
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(LeagueView);
