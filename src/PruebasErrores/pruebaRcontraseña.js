

import Swal from "sweetalert2";
export const pruebaRcontraseña=()=>{



    const prubaInputRcontra=(contra,contraA)=>{

        if(contra.length<9 || contra.length>20)
        {
            console.log(contra);
            Swal.fire("Error","La contraseña tiene que tener entre 9 y 20 digitos","error");
            return true;
        }

        if(contra!==contraA)
        {

            Swal.fire("Error","Las contraseñas tienen que ser iguales","error");
            return true;
        }

    }


    return{
        prubaInputRcontra
    }
}