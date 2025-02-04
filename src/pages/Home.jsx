import React from 'react'
import Banner from '../conponents/Banner'
import BlogPages from '../conponents/BlogPages'



const Home = () => {
  return (
    <div>
      <Banner/>
      <div className='max-w-7xl mx-auto'>
        <BlogPages/>
      </div>
    </div>
  )
} 

export default Home
