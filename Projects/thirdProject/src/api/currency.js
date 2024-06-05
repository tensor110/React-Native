import axios from "axios";
import { apiKey } from "../constants/index";

const currencyEndPoint = params => `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${params.type}`

const apiCall = async (endpoint) =>{
    const options = {
        method: 'GET',
        url: endpoint
    }
    try{
        const response = await axios.request(options)
        return response.data
    }catch(err){
        console.log('error: ', err)
        return null
    }
}

const currencyData = params => {
    let currencyUrl = currencyEndPoint(params);
    return apiCall(currencyUrl);
};

export default currencyData;