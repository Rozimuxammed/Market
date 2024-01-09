import React from 'react'
import { FaShopware, FaYoutube } from "react-icons/fa";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="about">
                    <div className="logo">
                        <FaShopware /> Felix
                    </div>
                    <div className="detail">
                        <p>We are a team of designers and developers that create high quality WordPress</p>
                        <div className="icon">
                            <li><FaFacebook /></li>
                            <li><RiInstagramFill /></li>
                            <li><FaTwitter /></li>
                            <li><FaYoutube /></li>
                        </div>
                    </div>
                </div>
                <div className="account">
                    <h3>My Account </h3>
                    <ul>
                        <li>Account</li>
                        <li>Order</li>
                        <li>Cart</li>
                        <li>Shipping</li>
                        <li>Return</li>
                    </ul>
                </div>
                <div className="page">
                    <h3>Pages</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Terma & Condition</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer