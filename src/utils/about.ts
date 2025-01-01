import axios from "axios";
import { AboutType } from "./type";
import { base_url } from "./constants";


const API_URL = `${base_url}/about`; // Replace with your actual API endpoint

export const fetchAboutData = async (): Promise<AboutType[]> => {
    try {
        const response = await axios.get<AboutType[]>(API_URL);
        return response.data; // Returns the data as an array of About objects
    } catch (error) {
        console.error("Error in fetching data:", error);
        throw error; // Handle the error appropriately
    }
};

export const createAboutData = async (aboutData: AboutType): Promise<void> => {
    try {
        const response = await axios.post(API_URL, aboutData, {
            headers: {
                "Content-Type": "application/json", // Specify content type
            },
        });

        console.log("Data successfully posted:", response.data);
    } catch (error) {
        console.error("Error posting about data:", error);
        throw error; // Handle error appropriately
    }
};