import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import BlogCard from '../components/BlogCard';
import Container from '../components/Container';

function Blog() {
  return (
    <div>
      <Meta title={"Blogs"}></Meta>
      <BreadCrumb title="Blogs"></BreadCrumb>
      <Container class1='blog-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-3'>
            <div className='filter-card mb-3'>
                <h3 className='filter-title'>Find by Categories</h3>
                <div>
                  <ul>
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-9'>
              <div className='row'> 
                <div className='col-6 mb-3'>
                  <BlogCard/>
                </div>
                <div className='col-6 mb-3'>
                  <BlogCard/>
                </div>
                <div className='col-6 mb-3'>
                  <BlogCard/>
                </div>
                <div className='col-6 mb-3'>
                  <BlogCard/>
                </div>
              </div>
            </div>
          </div>
       </Container>
    </div>
  )
}

export default Blog
