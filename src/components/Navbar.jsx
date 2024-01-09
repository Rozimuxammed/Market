import React, { useState } from 'react'
import { FaShopware } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoMdHeartEmpty, IoMdLogIn } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoBagCheckOutline } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";
function Navbar({ searchbtn, cart }) {
    const [search, setSearch] = useState()
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    return (
        <>
            <nav>
                <div className="container">
                    <div className="logo">
                        <Link to="/" className='shop'><FaShopware />Felix</Link>
                    </div>
                    <div className="search">
                        <input onChange={(e) => {
                            setSearch(e.target.value)
                        }} value={search} type="text" placeholder='Search Your Product...' />
                        <button onClick={() => {
                            searchbtn(search)
                            setSearch("")
                        }}>Search</button>
                    </div>
                    <div className="account">
                        {
                            isAuthenticated &&
                            (
                                <div className="user">
                                    <FaUser />
                                    <span>Hello , {user.name} </span>
                                </div>
                            )
                        }

                        <div className="icon">
                            <Link to="/" className='link'><IoMdHeartEmpty /></Link>
                            <Link to="/cart" className='link'><span className='number'>{cart.length}</span> <IoBagCheckOutline /></Link>
                        </div>
                    </div>
                </div>
            </nav>
            <header>
                <div className="container">
                    <div className="nav">
                        <ul>
                            <li><Link to="/" className='about'>Home</Link></li>
                            <li><Link to="/product" className='about'>Product</Link></li>
                            <li><Link to="/about" className='about'>About</Link></li>
                            <li><Link to="/contact" className='about'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="login">
                        {
                            isAuthenticated ? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} ><RiLogoutCircleLine /></button>
                                : <button onClick={() => loginWithRedirect()}><IoMdLogIn /></button>
                        }


                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar