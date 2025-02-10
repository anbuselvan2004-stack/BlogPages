import React from 'react'
import BlogPages from '../conponents/BlogPages'
import SingleBlog from './SingleBlog'

const Blogs = () => {
  return (
    <div>
      <div className='py-40 bg-gray-500 text-white text-center px-4'>
      <h2 className='text-5xl lg:text-7xl leading-snug font-bold md-5'> Blog Page</h2>
      </div>
      {/* all blogs container */}
      <div className='max-w-7xl mx-auto'>
         <BlogPages/> 
        
      </div>
    </div>
  )
}

export default Blogs
