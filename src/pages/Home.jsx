import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRightShort } from "react-icons/bs";
import { RiTruckFill } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { FaHeadphones } from "react-icons/fa";
import { homeProduct } from '../hooks/homeproduct';
import { LuShoppingCart } from "react-icons/lu";
import { IoEye } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdClose } from 'react-icons/io';
function Home({ detail, view, close, setClose,addtocart }) {
    const [product, setProduct] = useState(homeProduct)
    return (
        <>
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
                                        <h3>${item.price}</h3>
                                        <button>Add To Cart </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div> : null
            }
            <div className="top_banner">
                <div className="container">
                    <div className="detail">
                        <h2>The best car collection 2023</h2>
                        <Link to="/product" className='link' >Shop Now <BsArrowRightShort /></Link>
                    </div>
                    <div className="img_box">
                        <img className='car' src="https://www.bmw.uz/content/dam/bmw/common/all-models/5-series/sedan/2023/5-series-sedan-silver.png" alt="image" />
                    </div>
                </div>
            </div>
            <div className="product_type">
                <div className="container">
                    <div className="box">
                        <div className="img_box">
                            <img src="https://www.bmw.com.cy/content/dam/bmw/common/all-models/m-series/m8-coupe/2022/navigation/bmw-8series-coupe-modellfinder.png" alt="car" />
                        </div>
                        <div className="detail">
                            <p>23 product</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img_box">
                            <img src="https://www.bmw.com.cy/content/dam/bmw/common/all-models/m-series/m8-gran-coupe/2022/navigation/bmw-m8-competition-gran-coupe-modelfinder.png" alt="car" />
                        </div>
                        <div className="detail">
                            <p>46 product</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img_box">
                            <img src="https://www.bmw.com.tr/content/dam/bmw/marketTR/common/kampanya/teaser/mayis-2023/bmw-modeller/m8-grann-coupe.png" alt="car" />
                        </div>
                        <div className="detail">
                            <p>69 product</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img_box">
                            <img src="https://www.bmw.uz/content/dam/bmw/common/all-models/m-series/x6m/2023/navigation/bmw-m-series-x6-m-modelfinder.png" alt="car" />
                        </div>
                        <div className="detail">
                            <p>90 product</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="container">
                    <div className="box">
                        <div className="icon">
                            <RiTruckFill />
                        </div>
                        <div className="detail">
                            <h3>Free shipping</h3>
                            <p>Oder Above $1000</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <BsCurrencyDollar />
                        </div>
                        <div className="detail">
                            <h3>Return & Refund</h3>
                            <p>Money Back Gaurenty</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <CiPercent />
                        </div>
                        <div className="detail">
                            <h3>Member Discount</h3>
                            <p>On Every Oder</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <FaHeadphones />
                        </div>
                        <div className="detail">
                            <h3>Customer Support</h3>
                            <p>Every  Time Call Support </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product">
                <h2 className='container'>Top Products</h2>
                <div className="container">
                    {product.map((item) => {
                        return (
                            <div className="box" key={item.id}>
                                <div className="img_box">
                                    <img src={item.img} alt={item.title} />
                                    <div className="icon">
                                        <li onClick={() => addtocart(item)}><LuShoppingCart /></li>
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
                    })}

                </div>
            </div>
            <div className="banner">
                <div className="container">
                    <div className="detail">
                        <h4>Latest Technology Added</h4>
                        <h3>BMW M5 - 2023</h3>
                        <p>$ 40000</p>
                        <Link to="/product" className='link' >Shop Now <BsArrowRightShort /></Link>
                    </div>
                    <div className="img_box">
                        <img src="https://www.bmw.uz/content/dam/bmw/common/all-models/m-series/m760e-xdrive/2023/navigation/bmw-7-series-i7-m70-modelfinder.png" alt="Image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home