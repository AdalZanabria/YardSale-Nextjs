import React from "react";
import "../styles/MyAccount.scss";

const EditAccount = () => {
    return (
        <div className="MyAccount">
            <div className="fMyAccount-container">
                <h1 className="title">My Account</h1>
                <form action="/" className="form">
                    <div>
                        <label for="name" className="label">
                            Name
                        </label>
                        <p className="value">Nombre</p>

                        <label for="email" className="label">
                            Email
                        </label>
                        <p className="value">correo@ejemplo.com</p>

                        <label for="password" className="label">
                            Password
                        </label>
                        <p className="value">*********</p>
                    </div>
                    <input
                        type="submit"
                        value="Edit"
                        className="secondary-button login-button"
                    />
                </form>
            </div>
        </div>
    );
};

export default EditAccount;
