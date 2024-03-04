import React from 'react'
import './Home.css'
import Cards from '../../components/Cards'
import Nav from '../../components/Nav'
const Home = () => {
  return (
    <>
        <div>
            <Nav />
            <div  className='slogan'>
                <h2>A place to Learn , A place to Earn</h2>
            </div>
            <Cards />
        </div>
        
    </>
  )
}

export default Home