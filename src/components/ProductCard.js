import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from '../images/prodcompare.svg'
import wish from '../images/wish.svg'
// import wishlist from '../images/wishlist.svg'
import watch from '../images/watch.jpg'
// import watch2 from '../images/'
import addcart from '../images/add-cart.svg'
import view from '../images/view.svg'

function ProductCard({grid}) {
  let location = useLocation()

  return (
    <>
      <div className={`${location.pathname === "/product" ? `gr-${grid}` : 'col-3'}`}>
      <Link to={`${location.pathname=='/'
          ? 'product/:id' 
          : location.pathname=='/product/:id'
          ?'/product/1'
          :'id'}`}
           className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
          <button className='border-0 bg-transparent'><img src={wish} alt='wishList'></img></button>
        </div>
        <div className='product-image'>
            <img src={watch} className='img-fluid' alt='Product Images'></img>
            <img src={watch} className='img-fluid' alt='Product Images'></img>
            {/* /////////////////////////// */}
            {/* /////////////////////////// */}
            {/* /////////////////////////// */}
            {/* <img src='images/blog-1.jpg' className='img-fluid' alt='Product Images'></img> */}
          </div>
          <div className='product-details'>
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} value='3' edit={false} activeColor="#ffd700" />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Introducing the Aurora UltraBook X350: Sleek, powerful, and portable. Intel Core i7, vibrant 15.6" display, backlit keyboard, fingerprint scanner, long-lasting battery. Perfect for productivity on the go.</p>
            <p className='price'>$100.00</p>
          </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column gap-15'>
            <button className='border-0 bg-transparent'><img src={prodcompare} alt='productCompare'></img></button>
            <button className='border-0 bg-transparent'><img src={view} alt='view'></img></button>
            <button className='border-0 bg-transparent'><img src={addcart} alt='addCart'></img></button>
          </div>  
        </div>
      </Link>
    </div>
    <div className={`${location.pathname === "/product" ? `gr-${grid}` : 'col-3'}`}>
      <Link 
        to={`${location.pathname=='/'
          ? 'product/:id' 
          : location.pathname=='/product/:id'
          ?'/product/1'
          :'id'}`}
        className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
          <Link><img src={wish} alt='wishList'></img></Link>
        </div>
        <div className='product-image'>
            <img src={watch} className='img-fluid' alt='Product Images'></img>
            <img src={watch} className='img-fluid' alt='Product Images'></img>
            {/* /////////////////////////// */}
            {/* /////////////////////////// */}
            {/* /////////////////////////// */}
            {/* <img src='images/blog-1.jpg' className='img-fluid' alt='Product Images'></img> */}
          </div>
          <div className='product-details'>
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} value='3' edit={false} activeColor="#ffd700" />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Introducing the Aurora UltraBook X350: Sleek, powerful, and portable. Intel Core i7, vibrant 15.6" display, backlit keyboard, fingerprint scanner, long-lasting battery. Perfect for productivity on the go.</p>
            <p className='price'>$100.00</p>
          </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column gap-15'>
            <button className='border-0 bg-transparent'><img src={prodcompare} alt='productCompare'></img></button>
            <button className='border-0 bg-transparent'><img src={view} alt='view'></img></button>
            <button className='border-0 bg-transparent'><img src={addcart} alt='addCart'></img></button>
          </div>  
        </div>
      </Link>
    </div>
    </>
  )
}

export default ProductCard
