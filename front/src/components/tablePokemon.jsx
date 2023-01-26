import React from 'react'
import { useState, useEffect } from 'react'
import { getPokemons } from '../services/httpClientServer'
import InputPokemon from './inputPokemon';
import {
  Box,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

export default function TablePokemon() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons().then((res) => setPokemons(res.data))
  }, [])

  return (
    <Flex
      h="100vh"
      align="center"
      justify="center"
      fontSize="20px"
      fontFamily="poppins"
    >
      <Box maxW={1200} w="100%" h="100vh" py={10}>
        <InputPokemon></InputPokemon>
        <Box overflowY="auto" height="100%">
          <Table>
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>Tipo</Th>
                <Th>Imagem</Th>
                <Th>Ações</Th>
              </Tr>
            </Thead>
            <Tbody>
              {pokemons.map(pokemon => {
                return (
                  <Tr key={pokemon.nome} cursor="pointer " _hover={{ bg: "gray.100" }}>
                    <Td>
                      {pokemon.nome}
                    </Td>
                    <Td key={pokemon.tipo}>
                      {pokemon.tipo}
                    </Td>
                    <Td key={pokemon.pokedex}>
                      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.pokedex}.png`} style={{ width: "100px" }} alt="" />
                    </Td>
                    <Td p={0}>
                      <EditIcon
                        fontSize={20}
                      />
                    </Td>
                    <Td p={0}>
                      <DeleteIcon
                        fontSize={20}
                      />
                    </Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Flex>
  );

}