(() => {

    //* Declaración de clase
    class Avenger {
        private name: string;
        public team: string;
        public realName: string
        static avgAge: number = 35

        //* Parama mandar los argumentos

        constructor(name: string, team: string, realName: string) {
            this.name = name,
                this.team = team,
                this.realName = realName
        }

        
//* MÉTODO ESTÁTICO; SOLO SE PUEDE REFERENCIAR DESDE LA PROPIA CLASE

static avgAge2(){
return this.name
}

//* MÉTODOS, FUNCIONES PRIVADADAS Y PÚBLICAS
//* MÉTODO PÚBLICO; ESTÁ DENTRO DE LA CLASE Y NO ESTÁ TIPADO COMO PRIVATE
        bio() {
            return `${this.name} (${this.team})`
        }
//* MÉTODO PRIVADO DENTRO DE CLASE; DE TODAS FORMAS, NO HAY RESTRICCIÓN EN JS Y SE PUEDE ACCEDER
        private bio2() {
            return `${this.name} (${this.team})`
        }

    }
//* Declaración de clase directamente en el constructor
    class Avenger2 {
        

        //* Parama mandar los argumentos STATIC NO PÙEDE APARECER COMO PARÁMETRO
        static avgAge: number=35
        constructor(private name: string,
            public team: string,
            public realName: string,
        
            ) {
          
        }
       
    }

    
//* LLámar a método estático; desde la clase

console.log(Avenger.avgAge2)


    //* Instancia de clase
    const antman: Avenger = new Avenger("AntMan", "Avengers", "Scott Lang")

    

    //* si quieres acceder a una propiedad estática, tienes que acceder a la clase, no a la instancia

    console.log(Avenger.avgAge)
    console.log(antman)
})()