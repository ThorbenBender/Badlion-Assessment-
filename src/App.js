import { Component } from 'react';
import { Route } from 'react-router-dom';
import LeagueView from './Components/LeagueView';

class App extends Component {
  render() {
    return <Route exact path="/league/:id" component={LeagueView} />;
  }
}

export default App;
