import { Pokemon } from './decorators/pokemon-class';


//*Esto nos dará un error en consola porque hemos bloqueado con un decorador la extensión de clase
//(Pokemon.prototype  as any).customName = "Pikachu"

const charmander = new Pokemon("Charmander")

charmander.savePokemonToDB(34)