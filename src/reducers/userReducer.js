import { produce } from "immer";
import { ActionsType } from "../actions/useractions";

const initialvalue = {
    authenticated : false
}

const userReducer = produce((pastState, action ={})=>{
    switch(action.type){
        case ActionsType.AUTHENTICATE_USER:
             pastState.authenticated = true,
             pastState.userInformation = action.payload;
             break;
        case ActionsType.DEAUTHENTICATE_USER || ActionsType.AUTHENTICATION_ERROR:
            console.log('going to deauthenticate user');
            pastState.authenticated = false;
            break;
    }
}, initialvalue)



export default userReducer;

