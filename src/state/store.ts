import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appReducer from './appSlice'

const reducer = combineReducers({ app: appReducer })

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === 'development',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
