import * as React from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks/Hooks";
import { getPokemon } from "../../Redux/Reducers/PokeReducer";
import "./Content.scss";

const Content = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPokemon());
    }, [dispatch]);

    const { pokemon, status } = useAppSelector((state) => state.poke);

    console.log(pokemon);

    const pokeAbilities = () => {
        return pokemon.abilities?.map((abi: any) => (
            <p key={abi.ability.name}>{abi.ability.name}</p>
        ));
    };
    console.log(pokemon.abilities?.map((abi: any) => abi));

    return (
        <main>
            <h1>main</h1>
            <p>{status}</p>
            <br />
            { status === `success` && <img src={pokemon?.sprites?.front_default} alt={pokemon?.forms[0]?.name} />}
            {pokeAbilities()}
        </main>
    );
};

export default Content;
