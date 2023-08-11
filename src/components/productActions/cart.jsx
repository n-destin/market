import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartNumber } from "../../actions/productActions";
<<<<<<< HEAD
import newCart from '../../images/newCart.png'
import './cart.css'
import Navigation from "../navigation/navigation";
import { useNavigate } from "react-router";
// import { useEffect } from "react";
// import axios from "axios";
// import Stripe from "stripe";
// import { ROOT_URL } from "../../actions/useractions";
=======
import cart from '../../images/cart.jpeg'
import './cart.css'
import Navigation from "../navigation/navigation";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import Stripe from "stripe";
import { ROOT_URL } from "../../actions/useractions";
>>>>>>> safe

const Cart = (props)=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [relatedProducts, setRelatedProducts] = useState();
<<<<<<< HEAD
    const [total, setTotal] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    // useEffect(()=>{
    //     axios.get('/')
    // }, [])
=======
>>>>>>> safe

    const NoContentYet =()=>{
        return(
            <div className="notYetContent">
                <div className="leftSide">
<<<<<<< HEAD
                    <img src={newCart} alt="cart-image" className="cartImage"/>
=======
                    <img src={cart} alt="cart-image" className="cartImage"/>
>>>>>>> safe
                    <div className="cartText">
                        <h2>Your shopping cart is Empty</h2>
                        <p className="itemsText">Items you add will appear here</p>
                    </div>
                </div>
<<<<<<< HEAD
                <button className="emptyCartButton" id="">Explore Popular Picks & Hot Sellers</button>
=======
                <button className="emptyCartButton">See trending Items</button>
>>>>>>> safe
            </div>
        )
    }

    const cartElements  = useSelector((store)=> {store.cartElements});

    const CartElementContainer = (props)=>{
        return(
            <div>
                <hr />
                <div className="image">
                    <img src={props.content.Image} alt="cart-image-cantainer" />
                </div>
                <div className="description">
                    <h1>{props.content.Title}</h1>
                    <h3>{props.content.Description}</h3>
                </div>
                <div className="Price">
                    <h2>{props.content.Price}</h2>
                </div>
            </div>
        )
    }
    

    const WithItems = ()=>{
        return(
            <div>
                {(cartElements)? cartElements.map(cartElement=>{return <CartElementContainer content = {cartElement} />})  : 'an Error hapened' }
            </div>
        )
    }

    

    //remember to display it when the  CLASS:checkoutButton when there are products in cart
<<<<<<< HEAD
    return (
        <div className="cartContent">
            <Navigation />
            <div className="cartFlexContainer">
                <h1 className="shoppingCartHeading">Your Shopping Cart</h1>

                <div className="cartBody">

                    <div className="cartLeft">
                        {(cartNumber!=0)? <WithItems /> : <NoContentYet />}
                    </div>
                    
                    <div className="cartRight">
                        <h3>Order Summary</h3>
                        <div className="orderSummary">
                            <h2>Estimated total ({total} items)</h2>
                            <h2 className="totalPrice">${totalPrice}</h2>
                        </div>
                        <button className="checkoutButton" onClick={()=>{navigate('/checkout')}}>Confirm Your Purchase</button> 
                    </div>
                </div>

                <div className="relatedProducts">
                    <h3 style={{
                        fontWeight: 800,
                        margin: "20px"
                    }}>You May Also Like </h3>
                    <div className="listOfRelatedProducts">
                        <p>Items here</p>
                    </div>
                </div>
            </div>
=======
    return(
        <div className="cartContent">
            <Navigation />
            <h1 className="shoppingCartHeading">Your Shopping Cart</h1>
            <hr />
            <div className="cartBody">
                <div className="cartLeft">
                    {(cartNumber!=0)? <WithItems /> : <NoContentYet />}
                    
                </div>
                <div className="cartRight">
                    <h3>Order Summary</h3>
                    <div className="orderSummary">
                        <h2>Estimated total ({total} items)</h2>
                        <h2 className="totalPrice">${totalPrice}</h2>
                    </div>
                    <button className="checkoutButton" onClick={()=>{navigate('/checkout')}}>Proceed to checkout</button> 
                </div>
            </div>
            <div className="relatedProducts">
                        <h3>Also Shop for: </h3>
                        <div className="listOfRelatedProducts">
                            <p>Items here</p>
                        </div>
                    </div>
>>>>>>> safe
        </div>
    )
                }
  export default Cart;