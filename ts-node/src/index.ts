import { Pokemon } from './interfaces/pokemon';
import axios from "axios";
import { getPokemon } from "./generics/get-pokemon";

getPokemon(1)
  .then(pokemon => console.log(pokemon.moves))
  .catch(error => console.log(error))
  .finally(() => console.log("fin de función"));

console.log(getPokemon(2));
