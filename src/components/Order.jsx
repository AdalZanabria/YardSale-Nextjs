import React from "react";
import "../styles/Order.scss";

const Order = () => {
    return (
        <div className="Order">
            <p>
                <span>04.25.21</span>
                <span>6 artículos</span>
            </p>
            <p>$560.00</p>
            <img src="./icons/flechita.svg" alt="View Order" />
        </div>
    );
};

export default Order;
