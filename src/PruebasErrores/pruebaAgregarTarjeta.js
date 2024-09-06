

import Swal from "sweetalert2";

export const pruebaAgregarTarjeta=()=>{

    

    const pruebaInputsTarjeta=(n_tarjeta,f_vencimiento,cvv,correo)=>{

        const isValidFormat = /^\d{2}\/\d{2}$/;
        const sinPuntos=/^[^.]*$/;

        const fechaActual=new Date().toLocaleDateString();
        const anioa=fechaActual.split('/');
        const anioactual=parseInt(anioa[2].slice(2));
        const partesFecha = f_vencimiento.split('/');
        const mes = parseInt(partesFecha[0], 10);
        const anio = parseInt(partesFecha[1], 10);

        if(n_tarjeta.length>16 || n_tarjeta.length<16){
            Swal.fire("Error","El número de tarjeta tiene que tener 16 digitos","error");
            return true;
        }

        if(!isValidFormat.test(f_vencimiento)){
            Swal.fire("Error","Formato de fecha de vencimiento invalido, formato a seguir 'MM/YY' en el campo Fecha de vencimiento","error");
            return true;
        }

        if(mes<1 || mes>12){
            console.log(anioactual);
            Swal.fire("Error","Tienes que seguier el valor de los meses del 01-12 en el campo Fecha de vencimiento ","error");
            return true;
        }

        if(anio<anioactual+1 || anio>anioactual+11){
            console.log(anioactual+1);
            Swal.fire("Error","No se permiten tarjetas con fechas de vencimiento inapropiadas o ya cerano a vencer en el campo Fecha de vencimiento","error");
            return true;
        }

        if(!sinPuntos.test(cvv)){
            console.log(anioactual+1);
            Swal.fire("Error","Solo Números enteros en el campo CVV","error");
            return true;
        }

        if(cvv.length>3 || cvv.length<3){
            console.log(anioactual+1);
            Swal.fire("Error","Solo 3 digitos en el campo CVV","error");
            return true;
        }

        if(correo.length>40 || correo.length<12){
            Swal.fire("Error","El correo tiene que tener como máximo 40 caracteres en total y 12 caracteres como mínimo","error");
            return true;
        }



        return false;




    }



    return{
        pruebaInputsTarjeta
    }
}