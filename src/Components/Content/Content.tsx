import * as React from 'react';
import { useEffect } from 'react';
import { useAppSelector } from '../../Redux/Hooks/Hooks';
import './Content.scss'


const Content = () => {

    const {pokemon} = useAppSelector(state => state.poke)
    console.log(pokemon)
    useEffect(()=>{
        console.log(pokemon.then((data: any)=> console.log(data))
        )
    })

    return (
        <main>
main
        </main>
    )
}

export default Content;