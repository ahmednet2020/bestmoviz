import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Menu from '../components/Menu'
import { fromEvent } from 'rxjs'

class Home extends Component {
  render() {
    return (
      <main className='my-2'>
        <div className='row m-0'>
          <div className='col-12 col-md-2'>
            <Menu />
          </div>
          <div className='col-12 col-md-10 col-lg-6'>
            movizlist
          </div>
          <div className='col-12 col-lg-4 d-none d-lg-block'>
            adv
          </div>
        </div>
      </main>
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
