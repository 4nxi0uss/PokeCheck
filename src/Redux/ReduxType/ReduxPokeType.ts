export const LOADING = 'LOADING'
export const SUCCESS = 'SUCCESS'
export const FAILED = 'FAILED'

export interface pokemonStats {
    base_stat: number,
    stat: {
        name: string
    }
}


export interface pokemonTypes {
    abilities: [],
    sprites: {
        front_default: string
    },
    forms: [
        {
            name: string
        }
    ]
    name: string,
    held_items: [
        {
            item: {
                name: string
            }
        }
    ],
    moves: [
        {
            move: {
                name: string
            }
        }
    ],
    stats: [
        pokemonStats,
        pokemonStats,
        pokemonStats,
        pokemonStats,
        pokemonStats,
        pokemonStats,
    ],

}