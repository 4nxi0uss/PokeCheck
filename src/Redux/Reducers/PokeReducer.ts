import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../Store/Store'


// const pokeFetch = async () => {
//   const response = await fetch(`https://pokeapi.co/api/v2/berry`)
//     .then((res) => {
//       // console.log(`resolved` ,res)
//       return res.json();
//     }).catch((err) => {
//       console.warn(`reject  ${err}`)
//     })
//     const data = await response
//   return data
// }
const pokeFetch = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/berry?offset=0&limit=68`)
   const data = await response.json()
   return data;
}


// Define a type for the slice state
interface CounterState {
  pokemon: any
}

// Define the initial state using that type
const initialState: CounterState = {
  pokemon: pokeFetch()
    .then(data => data)
    .catch((err)=>{console.warn(err)})
}

export const counterSlice = createSlice({
  name: 'pokemon',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.pokemon += 1
    },
    decrement: (state) => {
      state.pokemon -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.pokemon += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.poke.pokemon

export default counterSlice.reducer