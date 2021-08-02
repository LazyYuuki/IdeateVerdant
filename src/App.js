import './App.css';
import React from 'react';
import './App.css';
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './views/Home'
import Token from './views/Token'
import Info from './views/Info'

let theme = createTheme()
theme = responsiveFontSizes(theme)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/IdeateVerdant">
              <Home />
            </Route>
            <Route exact path="/IdeateVerdant/token">
              <Token />
            </Route>
            <Route exact path="/IdeateVerdant/info">
              <Info />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
