import React, { Component } from 'react'

import Menu from '../components/Menu'
import MoviesList from '../components/MoviesList'
import Links from '../components/Links'
import Follow from '../components/Follow'
import Tage from '../components/Tage'
import Copyright from '../components/Copyright'
import Adbox from '../components/Adbox'

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
          <div className='col-12 col-lg-3'>
            <Adbox src='img/ad1.jpg'/>
            <Follow />
            <Tage />
            <Adbox src='img/ad1.jpg'/>
            <Copyright />
          </div>
        </div>
        <Links />
      </main>
    );
  }
}

export default Home
