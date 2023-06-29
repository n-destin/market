import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProduct } from "../../actions/productActions";
import './page.css'
import { getRelated } from "../../actions/productActions";
import Product from "../product";
import { addtoCart } from "../../actions/productActions";
import Navigation from "../navigation/navigation";

const ProductPage = (props)=>{

    

    let relatedContent;

    const {id} = useParams();
    console.log(id);
    const dispatch = useDispatch();

    useEffect(()=>{
       const getProductHolder = getProduct();
       getProductHolder(id, dispatch);
    }, [])

    const product = useSelector((store)=>{return store.products.single})

    const category = product.Category;

    useEffect(()=>{
        const getRelatedHolder = getRelated(category);
        getRelatedHolder(dispatch);
    }, [product])

    const relatedProdudcts = useSelector(store=>{return store.all});

    if(relatedProdudcts){
        relatedContent = relatedProdudcts.map(product =>{
            return <Product />
        })
    }
    const userTokenContainer = localStorage.getItem('userToken')

    const addingToCart = addtoCart(id, (userTokenContainer)? userTokenContainer : 'nothing');

    console.log(product);
    return(
        <div>
            <Navigation />
            <h1 className="heading">{product.Name}</h1>
            <div className="element">
                <div className="with-actions">
                    <div>
                        <img src={product.Image} alt="" />
                    </div>
                    <div className="actions">
                        <p>{product.Description}</p>
                        <div className="some-buttons">
                            <button className="buynow" onClick={addingToCart}>Add to Cart</button>
                            <button className="add-to-cart">Make an Offer</button>
                        </div>
                        <button className="buy Now">Buy Now</button>
                    </div>
                </div>
                <div className="related-products">
                    {(relatedContent)? relatedContent : 'No API call yet'}
                </div>
            </div>
        </div>
    )
}

export default ProductPage;