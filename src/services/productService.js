
import axios from "axios";


const baseUrl=import.meta.env.VITE_API_BASE_URL;

const config=()=>{

    return {
      headers:{
        "Authorization": sessionStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    }
  }

export const findall=async()=>{

    try {
        
        const response = await axios.get(baseUrl+"/products/NoStateProducts");
        
        return response;
    } catch (error) {
        throw error;
    }

}



export const findById=async(id)=>{

    try {
        
        const response = await axios.get(`${baseUrl+"/products/find"}/${id}`,config());
        
        return response;
    } catch (error) {
        throw error;
    }

}

export const findByIdAll=async(id)=>{

    try {
        
        const response = await axios.get(`${baseUrl+"/products/findIdAll"}/${id}`,config());
        
        return response;
    } catch (error) {
        throw error;
    }

}




export const calculateTamItems=(items)=>{

    return items.reduce((acumulador,item)=> acumulador+item.quantity,0)
}

export const calculatItemsSubTotal=(items)=>{

    return items.reduce((acumulador,item)=> acumulador+item.quantity*item.product.precio,0)
}




