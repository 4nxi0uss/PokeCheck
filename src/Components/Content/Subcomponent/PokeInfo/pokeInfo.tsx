import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../Redux/Hooks/Hooks';
import { getPokemon } from '../../../../Redux/Reducers/PokeReducer';
import { FAILED, SUCCESS } from '../../../../Redux/ReduxType/ReduxPokeType';

import './PokeInfo.scss'

const PokeInfo = () => {

    const [pokemonName, setPokemonName] = useState<string>('')

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPokemon('ditto'));
    }, [dispatch]);

    const { pokemon, status } = useAppSelector((state) => state.poke);

    console.log(pokemon)

    const pokeAbilities = () => {
        return pokemon.abilities?.map((abi: any) => (
            <p key={abi.ability.name}>{abi.ability.name}</p>
        ));
    };

    const pokeHeldItems = () => {
        return pokemon.held_items?.map((heldItem: any) => (
            <p key={heldItem.item.name}>{heldItem.item.name}</p>
        ));
    };

    const pokeMoves = () => {
        console.log(pokemon.moves.length)
        return pokemon.moves?.map((move: any) => (
            <p key={move.move.name}>{move.move.name}</p>
        ));
    };

    const handlePokemonName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPokemonName(e.target.value)

    }

    const handleAskByClick = () => {
        dispatch(getPokemon(pokemonName.toLowerCase()));
        setPokemonName('')
    }

    const handleAskByKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            dispatch(getPokemon(pokemonName.toLowerCase()));
            setPokemonName('')
        }
    }

    return (
        <section className='pokeSection'>
            {status === FAILED ? <p className='PokemonNameWarning'>Pokemon name is wrong</p> : null}
            <label>
                <input type="text" onChange={handlePokemonName} value={pokemonName} onKeyDown={handleAskByKeyDown} />
                <button onClick={handleAskByClick} >Ask</button>
            </label>
            {/* <p>{status}</p> */}
            <br />
            {status === SUCCESS && <img className='pokeImg' src={pokemon?.sprites?.front_default} alt={pokemon?.name} />}
            <br />
            {/* {status === SUCCESS ? pokeAbilities() : null} */}
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Abilities</th>
                        <th>Held Items</th>
                        <th>Moves</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{pokemon?.name}</td>
                        <td>{pokeAbilities()}</td>
                        <td> {pokeHeldItems()}</td>
                        <td className='moves'>{pokeMoves()}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default PokeInfo;