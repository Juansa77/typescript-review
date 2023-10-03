(()=>{
interface Client{
    name: string,
    age?:number;
    address?:Address;
    getFullAddress?(id:string):void
    
}

//* Extendemos la interface con tl tipo address
interface Address{
    
        id:number,
        zop:string,
        city:string
    

}

//* LAS INTERFACES NO SE TRANSPILAN A JS ni crean instancias
const client:Client ={
    name: "Fernando",
    age:25,
    address:{
        id:2597,
        zop:"hs98",
        city:"Sevilla"

    },

    getFullAddress(id:string){
        return this.address.city
    }
}

const client2:Client={
    name:"Juansa",
    age:30, 
    
}


})()