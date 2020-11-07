
import React, { Component } from 'react';
import { Header,Landing } from './';

class App extends Component {
  render() {
    return (
      <div className="bg-black">
        <Header />
        <Landing />
      </div>
    );
  }
}

export default App;
