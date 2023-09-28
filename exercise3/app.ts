
// Objetos
const batimovil:{carroceria:string, modelo:string, antibalas:boolean, pasajeros:number} = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee:{carroceria:string, modelo:string,antibalas:boolean, pasajeros:number,disparar?:()=>void} = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};




const villanos:{nombre:string, edad: number | undefined, mutante:boolean}[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type charles={poder:string,estatura:number} 

const charles:charles = {
  poder:"psiquico",
  estatura: 1.78
};

type apocalipsis={lider:boolean, miembros:string[]}
const apocalipsis:apocalipsis = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: charles | apocalipsis

mystique = charles;
console.log(mystique)
mystique = apocalipsis;
console.log(mystique)
