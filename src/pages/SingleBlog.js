import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { HiArrowNarrowLeft } from "react-icons/hi";
import blog from '../images/blog-1.jpg'
import Container from '../components/Container';


function SingleBlog() {
  return (
    <div>
       <Meta title={"Dynamic Blog Name"}></Meta>
      <BreadCrumb title="Dynamic Blog Name"></BreadCrumb>
      <Container class1='blog-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <div className='single-blog-card'>
                <Link to='/blogs' className='d-flex align-items-center gap-10'>
                  <HiArrowNarrowLeft className='fs-4' /> Go back to blogs
                </Link>
                <h3 className='title'>
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img src={blog} className='img-fluid w-100 my-4' alt='blog'></img>
                <p>You're only as good as your last collection, which is an enormous pressure. I think there is something about luxury - it's not something people need. but it's what they want. it really pulls at their heart. I have a fantastic relationship with money. Scelerisque sociosqu ullamcorper urna nisi mollis vestibulum.</p>
              </div>
            </div>
          </div>
      </Container>
    </div>
  )
}

export default SingleBlog
