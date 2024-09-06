
import Swal from "sweetalert2";
import { finUserWROL } from "../auth/service/authService";

export const pruebaDatosPersonales=()=>{    


    const isInDB=async(username)=>{

        try {
            
            await finUserWROL(username);

           return true;

        } catch (error) {
            
            return false;
           
        }
    }

        const inputTests=async(username,nombre,apellido,correo,nCelular,use)=>{

            const espaciosEnBlanco = /^(?!.*\s$)[^\s].*$/; 
            const caracteresEValidos=/^[\w&*()_\-."]+$/;
            const solotexto=/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;
            const espacioBlancoFI=/^\S.*\S$/;
            const response= await isInDB(username) ;
            

            
                        if(response && username!==use){
                            console.log(response);
                            console.log(username, use);
                            Swal.fire("Error","El usuario ya existe","error");
                            return true;
                        } 
                        if(username.length>15 || username.length<4){
                            Swal.fire("Error","El nombre de usuario no puede tener más de 15 caracteres ni menos de 4","error");
                            return true;
                        }

                        if(!espaciosEnBlanco.test(username)){
                            Swal.fire("Error","El usuario no debe tener espacios en blanco","error");
                            return true;
                        }

                        if(!caracteresEValidos.test(username)){
                            Swal.fire("Error","Solo puedes usar estos caracteres especiales (&*()_-.) en el campo usuario o tu nombre de usuario no debe tener espacios en el medio","error");
                            return true;
                        }

                        if(nombre.length>40 || nombre.length<2){
                            Swal.fire("Error","EL valor en el campo Nombres tienen que tener como máximo 40 caracteres en total y 2 caracteres como mínimo","error");
                            return true;
                        }

                        if(!solotexto.test(nombre)){
                            Swal.fire("Error","Solo texto en el campo Nombres","error");
                            return true;
                        }

                        if(!espacioBlancoFI.test(nombre)){
                            Swal.fire("Error","No se permiten espacios en blanco ni al principio ni al final del campo Nombres","error");
                            return true;
                        }


                        if(apellido.length>50 || apellido.length<2){
                            Swal.fire("Error","Los apellidos tienen que tener como máximo 50 caracteres en total y 2 caracteres como mínimo","error");
                            return true;
                        }

                        if(!solotexto.test(apellido)){
                            Swal.fire("Error","Solo texto en el campo Apellidos","error");
                            return true;
                        }

                        if(!espacioBlancoFI.test(apellido)){
                            Swal.fire("Error","No se permiten espacios en blanco ni al principio ni al final del campo Apellidos","error");
                            return true;
                        }


                        if(correo.length>40 || correo.length<12){
                            Swal.fire("Error","El correo tiene que tener como máximo 40 caracteres en total y 12 caracteres como mínimo","error");
                            return true;
                        }

                        if(nCelular.length>9 || nCelular.length<9){
                            Swal.fire("Error","El número de celular tiene que tener 9 digitos exactos","error");
                            return true;
                        }



            return false;

        }


        return {
            inputTests
        }


}