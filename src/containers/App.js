import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
    <div className="app">
      <NavBar />
      <Switch > 
      <Home exact path="/" component={Home} />
      <Movies exact path="/movies" component={Movies} />
      <Directors exact path="/directors" component={Directors} /> 
      <Actors exact path="/actors" component={Actors} />
      </Switch>
    </div>
    </Router>
  );
};

export default App
