import React, { Component } from 'react'

import Menu from '../components/Menu'
import MoviesList from '../components/MoviesList'
import Links from '../components/Links'
class Home extends Component {
  render() {
    return (
      <main className='py-2'>
        <div className='row m-0'>
          <div className='col-12 col-md-2'>
            <Menu />
          </div>
          <div className='col-12 col-md-10 col-lg-7'>
            <MoviesList />
          </div>
          <div className='col-12 col-lg-3 d-none d-lg-block'>
            adv
          </div>
        </div>
        <Links />
      </main>
    );
  }
}

export default Home
