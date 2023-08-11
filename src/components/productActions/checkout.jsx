import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './checkout.css'
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { ROOT_URL } from '../../actions/useractions';

const Checkout = ()=>{

    // get the cart

    const STRIPE_PUBLISHABLE_KEY = 'pk_test_51NVqGgHceDFN1DB6KDTkT8cGuzHy4IBn4cq2Y01VoxvLh8xb7jKfuFPoQQGFu53owH3hliXUgsKjmBwvbfBL9aPT00KwfrcTTT'
    const stripeLoaderPromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

    const [numberOfItems, setNumberOfItems] = useState(0);
    const [total, setTotal] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [productIdsAndQuantity, setProducts] = useState([{productId : '6493cbce4b1d7a64dee88a1d', proceId : 'aprice_id_here'}]);
    const [checkoutProducts, setCheckoutProducts] = useState([]);
    
    
    // how do we get the info for here
    // style according to the container
    const orderButton =()=>{
        return <input type="button" value='Place your order' className='orderButton' onClick={placeOrder}/>
    }

    const getTotalCost= ()=>{
        return 0 + checkoutProducts.map(product=>{return product.prouctPrice})
    }

// we need to send an array of objects of product Ids and quantity
    const handleCheckout = async ()=>{
        const stripe = await stripeLoaderPromise;
        axios.post(`${ROOT_URL}create-payment-session`, {productIdsAndQuantity}).then(response=>{
            console.log(`Stipe Session Key: ${response.data.session_id}`);
            stripe.redirectToCheckout({sessionId : response.data.session_id});
        })
    }

    const renderCheckoutProduct = (products)=>{
        products.map(product=>{
            return <div>
                <div>
                    <img src={product.image} alt="product-image" />
                    <div className="description">
                        {product.description}
                    </div>
                </div>
            </div>
        })
    }
// make it fixed position
    const CheckoutCard = ()=>{
        return(
            <div className="bodyRight">
                {orderButton}
                By placing Order, you agree to our <Link className='termsOfUse' to='termsofUse'>Terms of Use</Link> and <Link to='privacyNotice'>Privacy Notice</Link>
                <hr />
                <h2>Order Summary</h2>
                <p>Items(${numberOfItems} : ${getTotalCost})</p>
                <ul className='descriptionList'>{checkoutProducts.map(product=>{return <li>`${product.name} : ${product.productPrice}`</li>})}</ul>
            </div>
        )
    }

    const CheckoutBody = ()=>{
        return(
            <div className='checkoutBody'>
                <div className="body">
                    <div className="bodyLeft">
                        <div className="reviewItems">
                            {renderCheckoutProduct};
                        </div>
                    </div>
                    {<CheckoutCard />}
                </div>
                {orderButton} 
            </div>
        )
    }

    

    return(
        <div>
            <div className='CheckoutNavigation'>
                <Link to='/'><h2>Dartmouth market</h2></Link>
                <h2 className='checkoutNumber'>Checkout: {numberOfItems} Items</h2>
            </div>
            <div className='bodyContent'>
                {<CheckoutBody/>}
            </div>
            <button className='createCheckoutSession' onClick={handleCheckout}>Checkout</button>
        </div>
    )
}

export default Checkout;