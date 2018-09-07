import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { fromEvent } from 'rxjs'

class Home extends Component {
  render() {
    return (
      <div className="index">
        welcome to bestmoviz
      </div>
    );
  }
  componentDidMount() {
    let appDom = ReactDOM.findDOMNode(this)
    fromEvent(appDom, 'click')
    .subscribe((e) => {
        console.log(e);
    }, (err) => {
      console.log(`err: ${err}`);
    })
  }
}

export default Home
