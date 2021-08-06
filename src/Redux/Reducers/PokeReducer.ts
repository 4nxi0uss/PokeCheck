import { createAsyncThunk, createSlice, /*PayloadAction*/ } from '@reduxjs/toolkit'
import type { RootState } from '../Store/Store'

export const getPokemon = createAsyncThunk('pokemon/getPokemon', async () => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`).then((res) => res.json())
})

// Define a type for the slice state
interface CounterState {
  pokemon: any,
  status: string,
}

// Define the initial state using that type
const initialState: CounterState = {
  pokemon: {},
  status: 'default',
}


export const counterSlice = createSlice({
  name: 'pokemon',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemon.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getPokemon.fulfilled, (state, action) => {
      state.pokemon = action.payload
      state.status = 'success'
    })
    builder.addCase(getPokemon.rejected, (state) => {
      state.status = 'failed'
    })
  }
  // extraReducers: {
  //   [`getPokemon.pending`]: (state) => {
  //     state.status = 'loading'
  //   },
  //   [`getPokemon.fulfilled`]: (state, action) => {
  //     state.pokemon = action.payload
  //     state.status = 'success'
  //   },
  //   [`getPokemon.rejected`]: (state) => {
  //     state.status = 'failed'
  //   },
  // }
}
)

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.poke.pokemon

export default counterSlice.reducer