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
                <img src={product.image} alt="binge sake" />
                <img src={product.image} alt="binge sake" />
                <img src={product.image} alt="binge sake" />
                <img src={product.image} alt="binge sake" />
            </div>
            <div className="product_display-img">
                <img src={product.image} alt="binge sake" className="product_display-main-img" />
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
            <div className="product_display-right-prices">
                <div className="product_display-right-oldprice">${product.old_price}</div>
                <div className="product_display-right-newprice">${product.new_price}</div>
            </div>
            <div className="product_display-right-description">
                A lightweight usually knitted pullover shirt close fitting with 
                a round round neckline and long sleeves, worn as an outer garment
            </div>
            <div className="product_display-right-size">
                <h1>Select Size</h1>
                <div className="product_display-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button>Add To Cart</button>
            <p className='product_display-right-category'><span>Category :</span>Men , Pullover, Sweater </p>
            <p className='product_display-right-category'><span>Tags :</span>Modern , Latest </p>
        </div>
    </div>
  )
}
