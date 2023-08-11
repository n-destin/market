import { ROOT_URL } from "../actions/useractions";
import axios from "axios";


export function Search(searchTerm){
    return(dispatch)=>{
        axios.get(`/search?search-term = ${searchTerm}`).then(response=>{
            if(response){
                dispatch({
                    type:searchResults,
                    payload : response.data,
                })
            }
        })
    }
}