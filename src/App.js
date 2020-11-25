import { Component } from 'react';
import { Route } from 'react-router-dom';
import LeagueView from './Components/LeagueView';
import { Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => <Redirect to="leagues" />} />
        <Route exact path="/league/:id" component={LeagueView} />
      </div>
    );
  }
}

export default App;
