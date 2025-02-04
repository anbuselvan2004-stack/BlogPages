import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const SingleBlog = () => {
   const data = useLoaderData(); // ✅ data is an object, no need to call it as a function
   console.log(data);
   // Destructure correctly
   const { title, image, category, author, published_date, reading_time, content } = data[0];

  return (
    <div>
      <div className='py-40 bg-black text-white text-center px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold md-5'>Single Blog Page</h2>
      </div>
      <div className='max-w-7xl mx-auto my-12'>
        <div className='lg:w-3/4 mx-auto'>
          <div>
            <img src={image} alt='Blog' className='w-full mx-auto rounded' />
          </div>
          <h2 className='text-3xl font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
          <p className=''><FaUser className="inline" /> {author} | {published_date}</p>
          <p className='text-gray-600'>{reading_time} min read</p>
          <p className='mt-4'>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
