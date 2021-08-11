import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { FAILED, LOADING, pokemonTypes, SUCCESS } from '../ReduxType/ReduxPokeType'

import type { RootState } from '../Store/Store'

export const getPokemon = createAsyncThunk('pokemon/getPokemon', async (pokemonName: string) => {
  const data = await fetch(`${process.env.REACT_APP_API_URL}${pokemonName}`)
  return data.json()
})

// Define a type for the slice state
interface CounterState {
  pokemon: pokemonTypes,
  status: string,
}

// Define the initial state using that type
const initialState: CounterState = {
  pokemon: {
    abilities: [],
    sprites: {
      front_default: 'string'
    },
    forms: [
      {
        name: 'string'
      }
    ],
    name: '',
    held_items: [
      {
        item: {
          name: ''
        }
      }
    ],
    moves: [
      {
        move: {
          name: ''
        }
      }
    ],
    stats: [
      {
        base_stat: 1,
        stat: {
          name: ''
        }
      },
      {
        base_stat: 1,
        stat: {
          name: ''
        }
      },
      {
        base_stat: 1,
        stat: {
          name: ''
        }
      },
      {
        base_stat: 1,
        stat: {
          name: ''
        }
      },
      {
        base_stat: 1,
        stat: {
          name: ''
        }
      },
      {
        base_stat: 1,
        stat: {
          name: ''
        }
      },
    ],

  },

  status: 'default',
}

export const counterSlice = createSlice({
  name: 'pokemon',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getPokemon.pending, (state) => {
      state.status = LOADING
    })
    builder.addCase(getPokemon.fulfilled, (state, { payload }) => {
      state.pokemon = payload
      state.status = SUCCESS
    })
    builder.addCase(getPokemon.rejected, (state) => {
      state.status = FAILED
    })
  }
}
)

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.poke.pokemon

export default counterSlice.reducer