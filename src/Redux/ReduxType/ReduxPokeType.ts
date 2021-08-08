export const LOADING = 'LOADING'
export const SUCCESS = 'SUCCESS'
export const FAILED = 'FAILED'

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
    ]

}