import { connect } from 'react-redux';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import {
  getLeague,
  getContestants,
  getResult,
} from './redux/action/ActionCreator';

class App extends Component {
  componentDidMount() {
    this.props.getLeague(177160);
    this.props.getContestants(177160);
    this.props.getResult(177160);
  }
  render() {
    return (
      <div className="App">
        <p>Assessment</p>
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
      getResult,
      getContestants,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
