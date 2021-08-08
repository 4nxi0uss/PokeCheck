import * as React from "react";

import PokeInfo from "./Subcomponent/PokeInfo/pokeInfo";

import './Content.scss'

const Content = () => {

    return (
        <main className='mainContent'>
            <h1>main</h1>
            <PokeInfo />
        </main>
    );
};

export default Content;
