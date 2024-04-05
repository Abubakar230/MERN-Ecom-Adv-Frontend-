import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
// import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
// import { Link } from 'react-router-dom'
import { TbGitCompare } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";

function SingleProduct() {

    
// const props = {width: 400, height: 500, zoomWidth: 500, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"};
    const[orederedProduct, setOrederedProduct]=useState(true)

    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }


  return (
    <div>
      <Meta title={"Product Name"}></Meta>
      <BreadCrumb title="Product Name"></BreadCrumb>
      <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-product-image'>
                <div>
                  <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className='img-fluid' alt='watch'></img>
                </div>
                {/* <div>
                <ReactImageZoom {...props} />
                </div> */}
              </div>
              <div className='other-product-image d-flex flex-wrap gap-15'>
                <div>
                    <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className='img-fluid' alt='watch'></img>
                </div>
                <div>
                    <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className='img-fluid' alt='watch'></img>
                </div>
                <div>
                    <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className='img-fluid' alt='watch'></img>
                </div>
                <div>
                    <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className='img-fluid' alt='watch'></img>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='main-product-details'>
                <div className='border-bottom'>
                  <h3 className='title'>Kids headphones bulk 10 pack multi colored for students</h3>
                </div>
                <div className='border-bottom py-3'>
                  <p className='price'>$ 100</p>
                  <div className='d-flex align-items-center gap-10'>
                    <ReactStars count={5} size={24} value='3' edit={false} activeColor="#ffd700" />
                    <p className='mb-0 t-review'>(2 Reviews)</p>
                  </div>
                  <a className='review-btn' href='#review'>Write a Review</a>
                </div>
                <div className='py-3'>
                  <div className='d-flex align-items-center gap-10 my-2'>
                    <h3 className='product-heading'>Type :</h3><p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex align-items-center gap-10 my-2'>
                    <h3 className='product-heading'>Brand :</h3><p className='product-data'>Havels</p>
                  </div>
                  <div className='d-flex align-items-center gap-10 my-2'>
                    <h3 className='product-heading'>Category :</h3><p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex align-items-center gap-10 my-2'>
                    <h3 className='product-heading'>Tags :</h3><p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex align-items-center gap-10 my-2'>
                    <h3 className='product-heading'>Availability :</h3><p className='product-data'>In Stock</p>
                  </div>
                  <div className='d-flex flex-column gap-10 mt-2 mb-3'>
                    <h3 className='product-heading'>Size :</h3>
                    <div className='d-flex flex-wrap gap-15'>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>XXL</span>
                    </div>
                  </div>
                  <div className='d-flex flex-column gap-10 mt-2 mb-3'>
                    <h3 className='product-heading'>Color :</h3><Color/>
                  </div>
                  <div className='d-flex flex-row gap-15 mt-2 mb-3 align-items-center'>
                    <h3 className='product-heading'>Quantity :</h3>
                    <div className=''>
                      <input 
                        type='number' 
                        name=''
                        min={1} 
                        max={10}
                        className='form-control'
                        style={{"width":"70px"}} 
                        id=''
                      />
                    </div>
                    <div className='d-flex gap-30 align-items-center'>
                      <button className='button border-0 ms-5' type='submit'>Add to Cart</button>
                      <button className='button signup'>Buy It Now</button>
                    </div>
                  </div>
                  <div className='d-flex gap-15 align-items-center'>
                    <div>
                      <a href=''><TbGitCompare className='fs-5 me-2' /> Add to Compare</a>
                    </div>
                    <div>
                      <a href=''><FaRegHeart className='fs-5 me-2' /> Add to Wishlist</a>
                    </div>
                  </div>
                  <div className='d-flex flex-column gap-10 my-3'>
                    <h3 className='product-heading'>Shipping & Returns :</h3>
                    <p className='product-data'>Free Shipping & Returns on all Orders!<br/>We ship all US domestic orders within <b>5-10 bussiness days!</b></p>
                  </div>
                  <div className='d-flex align-items-center gap-10 my-3'>
                    <h3 className='product-heading'>Product Link :</h3>
                    <a href='javascript:void(0)' onClick={()=>{copyToClipboard('https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')}}>
                      Copy Product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='description-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
                <h4>Description</h4>
              <div className='bg-white p-3'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id='review' className='reviews-wrapper home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3>Reviews</h3>
              <div className='review-inner-wrapper'>
              <div className='review-head d-flex justify-content-between align-items-end'>
                <div>
                  <h4 className='mb-2'>Customers Reviews</h4>
                  <div className='d-flex align-items-center gap-10'>
                    <ReactStars count={5} size={24} value='3' edit={false} activeColor="#ffd700" />
                    <p className='mb-0'>Based on 2 Reviews</p>
                  </div>
                </div>
                {
                    orederedProduct && (
                      <div>
                        <a className='text-dark text-decoration-underline' href=''>Write a Review</a>
                      </div>
                    )
                }
              </div>
              <div className='review-form py-4'>
              <h4>Write a Review</h4>
              <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <ReactStars count={5} size={24} value='3' edit={true} activeColor="#ffd700" />
                    </div>
                    <div>
                      <textarea name='' id='' className='w-100 form-control' placeholder='Comments' cols='30' rows='4'></textarea>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button className='button border-0'>Submit Review</button>
                    </div>
                  </form>
              </div>
              <div className='reviews mt-4'>
                <div className='review'>
                  <div className='d-flex align-items-center gap-10'>
                    <h6 className='mb-0'>Navdeep</h6>
                    <ReactStars count={5} size={24} value='3' edit={false} activeColor="#ffd700" />
                  </div>
                  <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>  
            </div> 
          </div>  
          <div className='row'>
            {/* <div className='col-2'>
              <div className='card'></div>
            </div>
            <div className='col-2'>
              <div className='card'></div>
            </div> */}
            <ProductCard/>
          </div>
        </div>  
      </section>
    </div>
  )
}

export default SingleProduct
