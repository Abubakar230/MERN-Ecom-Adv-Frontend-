import React from 'react'
// import BreadCrumb from '../components/BreadCrumb'
// import Meta from '../components/Meta'
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import watch from '../images/watch.jpg'
import Container from '../components/Container';


function Checkout() {
  return (
    <div>
      <Container class1='checkout-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-7'>
              <div className='checkout-left-data'>
                <h3 className='website-name'>Dev Corner</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link className='text-dark total-price' to='/cart'>Cart</Link></li>
                    <li className="breadcrumb-item active total-price" aria-current="page">Information</li>
                    <li className="breadcrumb-item active total-price">Shipping</li>
                    <li className="breadcrumb-item active total-price" aria-current="page">Payment</li>
                  </ol>
                </nav>
                <h4 className='title total'>Contact Information</h4>
                <p className='user-details total'>Bakar (abc123@gmail.com)</p>
                <h4 className='mb-3'>Shipping Address</h4>
                <form 
                  action='' 
                  className='d-flex gap-15 flex-wrap justify-content-between'
                >
                  <div className='w-100'>
                    <select 
                    name='' 
                    className='form-control form-select'
                    id=''
                    >
                      <option value='' selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className='flex-grow-1'>
                    <input type='text' placeholder='First Name' className='form-control'></input>
                  </div>
                  <div className='flex-grow-1'>
                    <input type='text' placeholder='Last Name' className='form-control'></input>
                  </div>
                  <div className='w-100'>
                    <input type='text' placeholder='Address' className='form-control'></input>
                  </div>
                  <div className='w-100'>
                    <input type='text' placeholder='Apartment, suite, etc' className='form-control'></input>
                  </div>
                  <div className='flex-grow-1'>
                    <input type='text' placeholder='City' className='form-control'></input>
                  </div>
                  <div className='flex-grow-1'>
                  <select 
                    name='' 
                    className='form-control form-select'
                    id=''
                    >
                      <option value='' selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div className='flex-grow-1'>
                    <input type='text' placeholder='ZipCode' className='form-control'></input>
                  </div>
                  <div className='w-100'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <Link to='/cart' className='text-dark'>
                        <BiArrowBack className='me-2' />
                        Return to Cart
                      </Link>
                      <Link to='/cart' className='button'>Continue to Shipping</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className='col-5'>
              <div className='border-bottom py-4'>
                <div className='d-flex gap-10 mb-2 align-items-center'>
                <div className='w-75 d-flex gap-10 '>
                  <div className='w-25 poistion-relative'> 
                    <span className=' badge bg-secondary text-white rounded-circle p-2 position-absolute'>1</span>
                    {/* <span style={{"top":"-10px", "right":"2px"}} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>1</span> */}
                    <img className='img-fluid' src={watch} alt='watch'></img>
                  </div>
                  <div>
                    <h5 className='total-price'>SIODSQ</h5>
                    <p className='total-price'>jhsihcohcicn wh </p>
                  </div>
                </div>
                <div className='flex-grow-1'>
                  <h5 className='total'>$ 100</h5>
                </div>
                </div>
              </div>
              <div className='border-bottom py-4'>
                <div className='d-flex align-items-center justify-content-between'>
                  <p className='total'>Subtotal</p>
                  <p className='total-price'>$ 10000</p>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                  <p className='mb-0 total'>Shipping</p>
                  <p className='mb-0 total-price'>$ 10000</p>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-between border-bottom py-4'>
                <h4 className='total'>Total</h4>
                <h5 className='total-price'>$ 10000</h5>
              </div>
            </div>
          </div>
      </Container>
    </div>
  )
}

export default Checkout
