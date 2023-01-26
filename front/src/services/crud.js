import axios from 'axios';

function createPokemon(nome, tipo, num) {
    axios.post('http://localhost:3000/pokemon', {
        nome: nome,
        tipo: tipo,
        pokedex: num
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

export { createPokemon }