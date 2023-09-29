(()=>{

    type Avengers ={
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }
    const avengers:Avengers ={
        nick:"Samuel L Jackson",
        ironman: "Robert Downey Jr",
        vision: "Paul Bettany",
        activo:true,
        poder:1500
    }
//*Destructuring de `propiedades de objeto
const {poder, vision} = avengers

 //* EN ts, si no tipamos el tipo de objeto y después queremos usar el objeto para argumento, tendremos problemas
//* Así que tipa el objeto si lo vas a usar como argumento 

//* ejemplo de destructuring en argumentos

const printAvenger = ({ironman, ...resto}:Avengers)=>{
    console.log(ironman, resto) 
 }

 printAvenger(avengers)

 //* destructuring de arrays

 const avengersArray:[string , boolean,number]= ["Capitan America", true, 1050]

 const [, ironman,] =avengersArray
 console.log(ironman)
})()