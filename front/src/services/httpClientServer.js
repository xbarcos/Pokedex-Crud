import axios from 'axios';

function getPokemons() {

    return axios.get('http://localhost:3000/pokemon')
    
}
function getTipos() {

   return axios.get('http://localhost:3000/pokemon/tipos')
    
}

export { getPokemons, getTipos }
