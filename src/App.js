import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import './App.css';

import client from './api/index.js';
import Header from './views/Header';
import Footer from './views/Footer';
import Main from './views/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ApolloProvider client={client}>
          <Header/>
          <Main/>
          <Footer/>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
