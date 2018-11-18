import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './components/Launches';
import LaunchDetail from './components/LaunchDetail';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider 
        client={client}
      >
        <Router>
          <div className="App">
            <h1>Space X</h1>
            <Route exact={true} path="/" component={Launches} />
            <Route exact={true} path="/launch/:flight_number" component={LaunchDetail} />
          </div>  
        </Router>
        
      </ApolloProvider>
    );
  }
}

export default App;
