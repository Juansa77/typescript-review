namespace Validations {


    //* Hay que poner el export para poder ampliar el scope 
    export const validarTexto = (text:string):boolean =>{

        return (text.length>3 ) ? true:false

    }

   export  const validateDate =(myDate:Date):boolean =>{
        return (isNaN(myDate.valueOf()) ? false:true)
    }

}

console.log(Validations.validarTexto("Fernando"))