import axios from "axios"
import { ROOT_URL } from "./useractions"

export const productActions = {
    GET_PRODUCTS : 'FETCH_PRODUCTS',
    GET_PRODUCT : 'FETCH_PRODUCT'
}


export function getProducts(){
    
    return(dispatch)=>{
        try {
            axios.get(`${ROOT_URL}products`).then(response =>{
                console.log(response);
                if(response){
                    dispatch({
                        type: productActions.GET_PRODUCTS,
                        payload : response.data
                    })
                }
            })
        } catch (error) {
            console.log(error.messsage);
        }
    }
}


export function createProduct(productFields){
    console.log('reached here before time');
    return (navigate)=>{
        console.log('reached in the navigate function');
        try {
            axios.post(`${ROOT_URL}createProduct`, (productFields), {headers : {'authorizations' : localStorage.getItem('userToken')}}).then(response=>{
                if(response){
                    navigate('/')
                }
            })
        } catch (error) {
            console.log(error.messsage);
        }
    }
}

export function getProduct(){
    return (productId, dispatch)=>{
        try {
            axios.get(`${ROOT_URL}getProduct/${productId}`).then(response=>{
                if(response){
                    dispatch({
                        type: productActions.GET_PRODUCT,
                        payload: response.data
                    })
                }
            })
        } catch (error) {
            console.log(error.messsage);
        }
    }
}

export function addtoCart(userId, productId){
    return(navigate)=>{
        try {
            axios.post(`${ROOT_URL}addtocart/${userId}`).then(response=>{
                if(response){
                    navigate('/Cart')
                }
            })
        } catch (error) {
            console.log(error.messsage);
        }
    }
}