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

    //* Instancia de clase
    const antman: Avenger = new Avenger("AntMan", "Avengers", "Scott Lang")

    //* si quieres acceder a una propiedad estática, tienes que acceder a la clase, no a la instancia

    console.log(Avenger.avgAge)
    console.log(antman)
})()