import React from 'react'
import './ProductDetails.css'

function ProductDetails() {
    return (
        <div className="product__dtails">
            <div className="product_img">
                <img src="" alt></img>
            </div>
            <div className="product_info">
                <p className="product_title"></p>
                <p className="product_price"></p>
                <p className="product_rating"></p>
                <p className="product_about"></p>
            </div>
            <div>
                <button className="Addbutton">Add To Cart</button>
                <button className="Buybutton">Buy Now</button>
            </div>
        </div>
    )
}

export default ProductDetails
