import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './checkout.css'

const Checkout = ()=>{
    const [checkoutProducts, setCheckoutProducts] = useState([]);
    const [PaymentInformation, SetPaymentInformation] = useState();
    const [numberOfItems, setNumberOfItems] = useState(0);
    
    // how do we get the info for her 
    function renderPaymentMethods(methods){
        methods.map(method=>{
            return(
                <div>
                    {method.address}
                </div>
            )
        })
    }

    const placeOrder = ()=>{
        // handle payment here
    }
    // style according to the container
    const orderButton =()=>{
        return <input type="button" value='Place your order' className='orderButton' onClick={placeOrder}/>
    }

    const getTotalCost= ()=>{
        return 0 + checkoutProducts.map(product=>{return product.prouctPrice})
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
// This is the sideCard
    const CheckoutBody = ()=>{
        return(
            <div className='checkoutBody'>
                <div className="body">
                    <div className="bodyLeft">
                        <div className="BillingInformations">
                            <h2>Payment Method</h2>
                            <div className="adress">
                                {renderPaymentMethods}
                            </div>
                        </div>
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
        </div>
    )
}

export default Checkout;