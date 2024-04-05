import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'


function Wishlist() {
  return (
    <div>
      <Meta title={"Wishlist"}></Meta>
      <BreadCrumb title="Wishlist"></BreadCrumb>
      <Container class1='wishlist-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-3'>
              <div className='wishlist-card position-relative'>
                <img
                  src='images/cross.svg'
                  className='position-absolute cross img-fluid' 
                  alt='cross'>
                </img>
                <div className='wishlist-card-image'>
                  <img src='images/watch.jpg' className='img-fluid w-100' alt='watch'></img>
                </div>
                <div className='py-3 px-3'>
                  <h5 className='title'>
                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className='price mb-3 mt-3'>$ 100</h6>
                </div>
            </div>
            </div>
            <div className='col-3'>
              <div className='wishlist-card position-relative'>
                <img
                  src='images/cross.svg'
                  className='position-absolute cross img-fluid' 
                  alt='cross'>
                </img>
                <div className='wishlist-card-image'>
                  <img src='images/watch.jpg' className='img-fluid w-100' alt='watch'></img>
                </div>
                <div className='py-3 px-3'>
                  <h5 className='title'>
                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className='price mb-3 mt-3'>$ 100</h6>
                </div>
            </div>
            </div>
            <div className='col-3'>
              <div className='wishlist-card position-relative'>
                <img
                  src='images/cross.svg'
                  className='position-absolute cross img-fluid' 
                  alt='cross'>
                </img>
                <div className='wishlist-card-image'>
                  <img src='images/watch.jpg' className='img-fluid w-100' alt='watch'></img>
                </div>
                <div className='py-3 px-3'>
                  <h5 className='title'>
                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className='price mb-3 mt-3'>$ 100</h6>
                </div>
            </div>
            </div>
          </div>
      </Container>
    </div>
  )
}

export default Wishlist
