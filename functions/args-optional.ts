(()=>{
  
    //* SE PONE INTERROGANTE EN EL ARGUMENTO PARA TIPARLO COMO OPCIONAL
    const fullName = (firstName:string, lastName?:string)=>{
        //* LE PONEMOS UN OR EN EL CASO DE QUE NO HAYA SEGUNDO ARGUMENTO
        return `${firstName} ${lastName|| "NO LAST NAME"}`
    }
    //* También se pueden tipar los argumentos con dos tipos
    const fullName2 = (firstName:string, lastName:(string|boolean))=>{
        return `${firstName} ${lastName}`
    }

    //* COMO ES OPCIONAL, NO ME LO MARCA COMO ERROR
    const name = fullName("Tony")
    
    console.log({name})
    
    })()