import React from 'react'
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
function Cart({ cart, setCart }) {
    const plus = (product) => {
        const exist = cart.find((item) => {
            return item.id === product.id
        })
        setCart(cart.map((curEl) => {
            return curEl.id === product.id ? { ...exist, qty: exist.qty + 1 } : curEl
        }))
    }
    const minus = (product) => {
        const exist = cart.find((item) => {
            return item.id === product.id
        })
        setCart(cart.map((curEl) => {
            return curEl.id === product.id ? { ...exist, qty: exist.qty - 1 } : curEl
        }))
    }
    const removeProduct = (product) => {
        const exist = cart.find((item) => {
            return item.id === product.id
        })
        if (exist.qty > 0) {
            setCart(cart.filter((item) => {
                return item.id != product.id
            }))
        }
    }
    const totalprice = cart.reduce((price, item) => price + item.qty * item.price, 0)
    return (
        <>
            <div className="cart container">
                {
                    cart.length === 0 &&
                    <div className='empty_cart'>
                        <h2 className="empty">Cart is Empty </h2>
                        <Link to="/product" className='emptybtn'>Shop Now </Link>
                    </div>
                }
                <div className="contant">
                    <div className="container">
                        {
                            cart.map((item) => {
                                return (
                                    <div className='cart_item' key={item.id}>
                                        <div className="img_box">
                                            <img src={item.img} alt="image" />
                                        </div>
                                        <div className="detail">
                                            <div className="info">
                                                <h5>{item.cat}</h5>
                                                <h3>{item.title}</h3>
                                                <p>Price : ${item.price}</p>
                                                <div className="qty">
                                                    <button onClick={() => plus(item)} className='plus'>+</button>
                                                    <input type="text" value={item.qty} />
                                                    <button onClick={() => minus(item)} className='minus'>-</button>
                                                </div>
                                                <h4>Sub total : ${item.price * item.qty}</h4>
                                            </div>
                                            <div className="close">
                                                <button onClick={() => removeProduct(item)}><IoMdClose /></button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {
                    cart.length > 0 &&
                    <div className=' bottom container'>
                        <h2 className="totalprice">Total Price : $ {totalprice}</h2>
                        <button>Chetout</button>
                    </div>
                }

            </div>
        </>
    )
}

export default Cart