import axios from "axios"
import { base_url } from "./constants"
import { ServiceType } from "./type";

export const getCategory = async () => {
    const data = await axios.get(`${base_url}/category`);
    const result = data.data
    return result;
}


