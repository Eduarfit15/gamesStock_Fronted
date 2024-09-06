


import axios from 'axios';
const baseUrl=import.meta.env.VITE_API_BASE_URL;
const config= ()=>{

    return {
      headers:{
        "Authorization": sessionStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    }
  }

  const config2= ()=>{

    return {
      headers:{
        "Authorization": sessionStorage.getItem("token"),
        "Content-Type": "multipart/form-data"
        
      }
    }
  }

export const loginUser=async({usuario,contra})=>{


    try{

        return await axios.post(baseUrl+'/login',{usuario,contra});
    }
    catch(error){

        throw error;
       
    }
}


export const deshabilitarProducto=async(estado,id)=>{


    try{
        return await axios.put(baseUrl+'/products/'+estado+'/'+id,null,config());

    }
    catch(error){
        console.log(error);
        throw error;
    }
};

export const crearProducto=async(formData)=>{


    try{

    
        return await axios.post(baseUrl+'/products/crear',formData,config2());

    }
    catch(error){
      
      console.log(error);
        throw error;
    }
};


export const updateProduct=async(id,formData)=>{


  try{


  
    
      return await axios.put(baseUrl+'/products/update/'+id,formData,config2());

  }
  catch(error){
    
      throw error;
  }
};

export const updatePass=async(formData)=>{


  try{ 
   
    
      return await axios.put(baseUrl+'/users/recoverPass',formData);

  }

  catch(error){
    
      throw error;
  }
};

export const saveClient=async({usuario,contra,nombre,apellido,correo,nroCelular})=>{

  try {
    
    
    return await axios.post(baseUrl+'/users/client',{usuario,contra,nombre,apellido,correo,nroCelular},config());
  } catch (error) {
    
    throw error;
  }
}


export const saveVenta=async(username,formdata)=>{

  try {
    
    
    return await axios.post(baseUrl+'/venta/'+username,formdata,config());

  } catch (error) {
    
    throw error;
  }
}


export const misCompras=async(username)=>{

  try {
    
    
    return await axios.get(baseUrl+'/venta/compras/'+username,config());

  } catch (error) {
   
    throw error;
  }
}




export const crearPic=async(formData)=>{


  try{

   
      return await axios.post(baseUrl+'/products/crearPic',formData,config2());

  }

  catch(error){
    
      throw error;
  }
};


export const updateUser=async(username,{usuario,nombre,apellido,correo,nroCelular})=>{
  try{ 
   
    
      return await axios.put(baseUrl+'/users/'+username,{usuario,nombre,apellido,correo,nroCelular},config());

  }

  catch(error){
    
    console.log(error);
      throw error;
  }
};

export const finUser=async(username)=>{

  try {
   
      return await axios.get(baseUrl+'/users/findUser/'+username,config());

  } catch (error) {
    
    throw error;
  }
}

export const finUserWROL=async(username)=>{

  try {
   
      return await axios.get(baseUrl+'/users/findUserWRol/'+username);

  } catch (error) {
    
    throw error;
  }
}



export const SaveCard=async(username,{n_tarjeta,f_vencimiento,cvv,correo,tipo})=>{

  try {
   
      return await axios.post(baseUrl+'/tarjeta/'+username,{n_tarjeta,f_vencimiento,cvv,correo,tipo},config());

  } catch (error) {

    
    throw error;
  }
}


export const getCard=async(username)=>{

  try {
      return await axios.get(baseUrl+'/tarjeta/getCard/'+username,config());
  } catch (error) {

    
    throw error;
  }
}

export const findNameAgain=async(name)=>{

  try {
    
    return await axios.get(baseUrl+'/products/findNameAgain/'+name,config());
  } catch (error) {
    throw error;
  }
}

export const deleTeCard=async(username)=>{

  try {
      return await axios.delete(baseUrl+'/tarjeta/deCard/'+username,config());
  } catch (error) {

    
    throw error;
  }
}