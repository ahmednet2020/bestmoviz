import React, { Component } from 'react'

// import pages
import Navbar from './js/components/Navbar'
import Home from './js/pages/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Navbar />
        <Home />
      </div>
    );
  }
}

export default App
