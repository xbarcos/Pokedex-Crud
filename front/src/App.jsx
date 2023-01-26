import './App.css'
import React from 'react'
import TablePokemon from './components/TablePokemon';
import { Text } from '@chakra-ui/react'

function App() {

  return (
    <div className="container mt-5" id="main-container">
      <Text fontSize='6xl'>PokeCRUD dos Cria</Text>
      <TablePokemon></TablePokemon>
    </div>
  )
}
export default App;