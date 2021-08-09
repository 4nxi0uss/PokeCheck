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
        return pokemon.moves?.map((move: any) => (
            <p key={move.move.name}>{move.move.name}</p>
        ));
    };

    const handlePokemonName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPokemonName(e.target.value)

    }

    const handleAskByClick = () => {
        dispatch(getPokemon(pokemonName.toLowerCase().trim()));
        setPokemonName('')
    }

    const handleAskByKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            dispatch(getPokemon(pokemonName.toLowerCase().trim()));
            setPokemonName('')
        }
    }

    return (
        <section className='pokeSection'>
            {status === FAILED ? <p className='PokemonNameWarning'>Pokemon name is wrong</p> : null}
            <label>
                <input type="text" onChange={handlePokemonName} value={pokemonName} onKeyDown={handleAskByKeyDown} />
                <button onClick={handleAskByClick}>Ask</button>
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
                        <th>hp</th>
                        <th>Attack</th>
                        <th>defense</th>
                        <th>special-attack</th>
                        <th>special-defense</th>
                        <th>speed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{pokemon?.name}</td>
                        <td>{pokeAbilities()}</td>
                        <td> {pokeHeldItems()}</td>
                        <td className='moves'><p className="numberOfMoves">Number of moves {pokemon.moves.length}</p>  {pokeMoves()}</td>
                        <td>{pokemon?.stats[0].base_stat}</td>
                        <td>{pokemon?.stats[1].base_stat}</td>
                        <td>{pokemon?.stats[2].base_stat}</td>
                        <td>{pokemon?.stats[3].base_stat}</td>
                        <td>{pokemon?.stats[4].base_stat}</td>
                        <td>{pokemon?.stats[5].base_stat}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default PokeInfo;