import React from "react";
import "../styles/Checkout.scss";
import OrderItem from "../components/OrderItem";

const Checkout = () => {
    return (
        <div className="Checkout">
            <div className="Checkout-container">
                <h1 className="title">My Order</h1>
                <div className="Checkout-content">
                    <div className="order">
                        <p>
                            <span>04.25.21</span>
                            <span>6 artículos</span>
                        </p>
                        <p>$560.00</p>
                    </div>
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                </div>
            </div>
        </div>
    );
};

export default Checkout;
