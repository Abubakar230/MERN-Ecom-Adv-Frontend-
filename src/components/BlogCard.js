import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard() {
  return (
      <div className='blog-card'>
        <div className='card-image'>
            <img src='images/blog-1.jpg' className='img-fluid w-100' alt='blog'></img>
        </div>
          <div className='blog-content'>
            <p className='date'>10 April, 2024</p>
            <h5 className='title'>
              A beautiful sunday morning renaissance
            </h5>
            <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae</p>
            <Link to='/blog/:id' className='button'>Read More</Link>
          </div>
      </div>
  )
}

export default BlogCard
