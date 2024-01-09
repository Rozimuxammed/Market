import React, { useState } from 'react'
import productDetails from '../hooks/productdetail'
import { LuShoppingCart } from 'react-icons/lu'
import { IoEye } from 'react-icons/io5'
import { FaRegHeart } from 'react-icons/fa'
import { IoMdClose } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";
function Product({ product, setProduct, detail, view, close, setClose, addtocart }) {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const filterproduct = (product) => {
        const update = productDetails.filter((item) => {
            return item.cat === product
        })
        setProduct(update)
    }
    const AllProducts = () => {
        setProduct(productDetails)
    }
    return (
        <div>
            {
                close ? <div className="productDetail">
                    <div className="container">
                        <button className='btn' onClick={() => setClose(false)}><IoMdClose /></button>
                        {detail.map((item) => {
                            return (
                                <div className="productbox">
                                    <div className="img-box">
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <div className="detail">
                                        <h4>{item.cat}</h4>
                                        <h2>{item.title}</h2>
                                        <h3>{item.price}</h3>
                                        <button>Add To Cart </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div> : null
            }
            <div className="products">
                <h2># Products</h2>
                <p>Home . products</p>
                <div className="container">
                    <div className="filter">
                        <div className="categories">
                            <h3>Categories</h3>
                            <ul>
                                <li onClick={() => AllProducts()}>All Products</li>
                                <li onClick={() => filterproduct("BMW")}>BMW</li>
                                <li onClick={() => filterproduct("AUDI")}>AUDI</li>
                                <li onClick={() => filterproduct("MERSEDES BENZ")}>MERSEDES</li>
                            </ul>
                        </div>
                    </div>
                    <div className="products_box">
                        <div className="contant">
                            {
                                product.map((item) => {
                                    return (
                                        <div className="box" key={item.id}>
                                            <div className="img_box">
                                                <img src={item.img} alt={item.title} />
                                                <div className="icon">
                                                    {
                                                        isAuthenticated ? <li onClick={() => addtocart(item)}><LuShoppingCart /></li> :
                                                            <li onClick={() => loginWithRedirect()}><LuShoppingCart /></li>

                                                    }
                                                    <li onClick={() => view(item)}><IoEye /></li>
                                                    <li><FaRegHeart /></li>
                                                </div>
                                            </div>
                                            <div className="detail">
                                                <p>{item.cat}</p>
                                                <h3>{item.title}</h3>
                                                <h4>${item.price}</h4>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product