import React, {Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Layout from "./hoc/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/checks" component={CheckSTab}/>
            <Route path="/settings" component={SettingsTab}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
