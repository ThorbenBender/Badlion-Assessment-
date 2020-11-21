import { connect } from 'react-redux';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import {
  getLeague,
  getContestants,
  getResult,
} from './redux/action/ActionCreator';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LeagueView from './Components/LeagueView';

class App extends Component {
  componentDidMount() {
    this.props.getLeague(177160);
    this.props.getContestants(177160);
    this.props.getResult(177160);
  }
  render() {
    return (
      <Router>
        <Route exact path="/league/:id" component={LeagueView} />
      </Router>
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
      getResult,
      getContestants,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
