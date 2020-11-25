import { Component } from 'react';
import { Route } from 'react-router-dom';
import LeagueView from './Components/LeagueView';
import { Redirect } from 'react-router-dom';
import LeaguesView from './Components/LeaguesView';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => <Redirect to="leagues" />} />
        <Route exact path="/league/:id" component={LeagueView} />
        <Route exact path="/leagues" component={LeaguesView} />
      </div>
    );
  }
}

export default App;
