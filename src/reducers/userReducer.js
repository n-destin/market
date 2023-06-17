import { produce } from "immer";
import { ActionsType } from "../actions/useractions";

const initialvalue = {
    authenticated : false
}

const userReducer = produce((pastState, action ={})=>{
    switch(action.type){
        case ActionsType.AUTHENTICATE_USER || ActionsType.AUTHENTICATION_ERROR:
             pastState.authenticated = true
             break;
        case ActionsType.DEAUTHENTICATE_USER:
            pastState.authenticated = false;
            break;
    }
}, initialvalue)

export default userReducer;

