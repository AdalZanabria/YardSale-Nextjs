import React from "react";
import "@styles/ProductInfo.scss";

import addToCart from "@icons/bt_add_to_cart.svg";

const ProductInfo = () => {
    return (
        <>
            <img
                src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="product image"
            />
            <div className="ProductInfo">
                <p>$35.00</p>
                <p>Bike</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium, nisi illum magni aliquam officia nesciunt soluta
                    libero, delectus sapiente maxime assumenda ducimus
                    laboriosam illo! At voluptatem enim repudiandae eos maxime?
                </p>
                <button className="primary-button add-to-cart-button">
                    <img src={addToCart} alt="Add to cart" />
                    Add to cart
                </button>
            </div>
        </>
    );
};

export default ProductInfo;
