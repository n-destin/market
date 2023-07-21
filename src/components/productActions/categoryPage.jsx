import axios from 'axios';
import React, {useState} from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Navigation from '../navigation/navigation'
import Product from '../productActions/product'

const Category = ()=>{
    
    const [products, setProducts] = useState([]);

    const {category_name} = useParams();

    // make the request to the server
    const getProducts = ()=>{
        try {
            axios.get(`/category?category_name = ${category_name}`).then((response)=>{
                if(response){
                    setProducts(response.data);
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    
    getProducts();

    const renderProducts = ()=>{
        if(products === null  || products == []){
            return(
                <div>
                    <h1>No such products</h1>
                </div>
            )
        }
        return(
            <div className='products'>
                {products.map(product=>{
                    return(
                        <Product content = {product}/>
                    )
                })}
            </div>
        )
    }


    return(
        <div>
            <Navigation />
            <div className="products">
                {renderProducts};
            </div>
        </div>
    )
}


export default Category