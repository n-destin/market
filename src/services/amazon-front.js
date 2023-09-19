import axios from "axios"
import { ROOT_URL } from "../actions/useractions"
const getSignedUrl = (file)=>{
    const fileName = encodeURIComponent(file.name);
    console.log(fileName + '  '  + file.type);
    return axios.get(`${ROOT_URL}sign-s3?file_name=${fileName}&file_type=${file.type}`);
}

const uploadToAws = (signedUrl, file, url)=>{
    return new Promise((resolve, reject)=>{
        axios.put(signedUrl, file, { headers : {'Content-Type' : file.type}}).then(response=>{
            resolve(url)
        }).catch(error=>{
            reject(error);
        }) 
    })
}


export async function uploadToAmazon(file){
    return await getSignedUrl(file).then(response=>{
        return uploadToAws(response.data.Data, file, response.data.url);
    })
}