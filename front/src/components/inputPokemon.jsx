import React from 'react'
import { Select, Input, FormControl, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { getTipos } from '../services/httpClientServer'
import { createPokemon } from '../services/crud'

export default function InputPokemon() {
    const [tiposPokemon, setTiposPokemon] = useState([]);
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [tipo, setTipo] = useState('Selecione o Tipo');

    useEffect(() => {
        getTipos().then((res) => setTiposPokemon(res.data))
    }, [])

    const submitPokemon = () => {

    }

    return (
        <FormControl display="flex" flexDir="column" gap={4}>
            <Input required type="text" placeholder="Digite o nome do Pokemon*" value={nome} onChange={(e) => setNome(e.target.value)} />
            <Input required type="text" placeholder="Digite o número da Pokedex*" value={numero} onChange={(e) => setNumero(e.target.value)} />
            <Select defaultValue={tipo} required className='bg-light' aria-label="Default select example" onChange={(e) => setTipo(e.target.value)}>
                <option value={""}>Selecione o Tipo do Pokemon*</option>
                {tiposPokemon.map(tipo => {
                    return (
                        <option key={tipo} value={tipo}>{tipo}</option>
                    )
                })}
            </Select>
            <Button colorScheme="green" onClick={() => createPokemon(nome, tipo, numero)}>
                Salvar Pokemon
            </Button>
        </FormControl>
    );
}

