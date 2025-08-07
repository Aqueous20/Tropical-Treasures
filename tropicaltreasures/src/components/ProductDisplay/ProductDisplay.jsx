import React from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'

export const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='product_display'>
        <div className="product_display-left">
            <div className="product_display-img-list">
                <img src={product.img} alt="binge sake" />
                <img src={product.img} alt="binge sake" />
                <img src={product.img} alt="binge sake" />
                <img src={product.img} alt="binge sake" />
            </div>
            <div className="product_display-img">
                <img src={product} alt="" className="product_display-main-img" />
            </div>
        </div>
        <div className="product_display-right">
            <h1>{product.name}</h1>
            <div className="product_display-right-star">
                <img src={star_icon} alt="binge sake" />
                <img src={star_icon} alt="binge sake" />
                <img src={star_icon} alt="binge sake" />
                <img src={star_icon} alt="binge sake" />
                <img src={star_dull_icon} alt="binge sake" />
                <p>(122)</p>
            </div>
        </div>
    </div>
  )
}
