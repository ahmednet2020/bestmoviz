import React, { Component } from 'react'

import Menu from '../components/Menu'
import MoviesList from '../components/MoviesList'
class Home extends Component {
  render() {
    return (
      <main className='py-2'>
        <div className='row m-0'>
          <div className='col-12 col-md-2'>
            <Menu />
          </div>
          <div className='col-12 col-md-10 col-lg-6'>
            <MoviesList />
          </div>
          <div className='col-12 col-lg-4 d-none d-lg-block'>
            adv
          </div>
        </div>
      </main>
    );
  }
}

export default Home
