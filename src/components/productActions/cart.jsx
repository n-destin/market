import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { cartNumber } from "../../actions/productActions";
import newCart from '../../images/newCart.png'
import './cart.css'
import { useNavigate } from "react-router";
import Navigation from "../navigation/navigation";
import { useEffect } from "react";
import axios from "axios";
import Stripe from "stripe";
import { ROOT_URL } from "../../actions/useractions";
import { deletecartelement, getCartElements } from "../../actions/productActions";


const Cart = (props)=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [relatedProducts, setRelatedProducts] = useState();
    // const [cartElements, setCartElements] = useState([]);
    let totalPrice = 0
    let numItems = 0;
    const deleteElement = deletecartelement();

    const NoContentYet =()=>{
        return(
            <div className="notYetContent">
                <div className="leftSide">
                    <img src={newCart} alt="cart-image" className="cartImage"/>
                    <div className="cartText">
                        <h2>Your shopping cart is Empty</h2>
                        <p className="itemsText">Items you add will appear here</p>
                    </div>
                </div>
                <button className="emptyCartButton" id="">Explore Popular Picks & Hot Sellers</button>
            </div>
        )
    }
    useEffect(()=>{getCartElements(dispatch)}, []);
    const cartElements =  useSelector((store)=>{return store.products.cartElements})
    console.log(cartElements);

    const CartElementContainer = (props) =>{
        return(
            <div className="card d-flex flex-row m-2 mb-4" >
                <img src={props.image} alt="cart-image-cantainer" className="card-img-left" style={{width : "10rem"}}/>
                <div className="border-0 p-2 pl-14">
                    <h4>{props.name}</h4>
                    <h6>$ {props.price}</h6>
                    <p>{(props.purpose === 'SELL')? 'For sale' : (props.purpose == "RENT")? "For rent" : "Donation"}</p>
                </div>
                <div className="border-0 p-3 d-flex flex-col-reverse" style={{maxWidth: "30vw"}}>
                    <p className="" style={{textOverflow: "ellipsis"}}>{props.description}</p>
                </div>
                <button className="btn btn-danger p-1 m-5" onClick={()=>{deleteElement(navigate, props.id, navigate)}}>delete</button>
            </div>
        )
    }


    
    

    

    //remember to display it when the  CLASS:checkoutButton when there are products in cart
    return (
        <div className="cartContent">
            <Navigation />
            <div className="cartFlexContainer">
                <h1 className="shoppingCartHeading">Your Shopping Cart</h1>
                <div className="cartBody">
                    <div className="cartLeft" style={{height : "60vh"}}>
                        {(cartElements)? (cartElements).map(element=>{ numItems += 1; totalPrice += element.Price; return <CartElementContainer  id = {element.id} name = {element.Name} purpose = {element.Purpose} price = {element.Price} image = {element.Image[0]} description = {element.Description}/>}): <NoContentYet />}
                    </div>
                    <div className="cartRight">
                        <h2>Order Summary</h2>
                        <div className="orderSummary">
                            <h4>Estimated total ({numItems} items)</h4>
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
        </div>
    )
                }
  export default Cart;