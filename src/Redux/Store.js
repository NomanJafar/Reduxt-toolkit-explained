import { configureStore } from '@reduxjs/toolkit'
import Reducers from '../Features/CounterFeatures/CounterSlice'
import Reducer from '../Features/CounterFeatures/CountReducer'

export const store = configureStore({
  reducer: {
    counter: Reducer,
  },
})