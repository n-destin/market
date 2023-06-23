import {produce} from 'immer'
import { productActions } from "../actions/productActions"

const initialvalue = {
    all : [],
    single : {}
}
const productReducer = produce((previousState, action = {})=>{
    switch(action.type){
        case productActions.GET_PRODUCTS:
            console.log('reacherd here   ' + action.payload);
            previousState.all = action.payload;
            break;
        case productActions.GET_PRODUCT:
            previousState.single = action.payload;
            break;
        default:
            return previousState;
            
    }
}, initialvalue)

export default productReducer;