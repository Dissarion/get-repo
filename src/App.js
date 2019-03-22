import React, { Component } from 'react';
import './App.css';

import Header from './views/Header';
import Footer from './views/Footer';
import Main from './views/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
