import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'

export type mode = 'light' | 'dark'

interface AppState {
  mode: mode
  headerTransition: boolean
}

export const initialState: AppState = {
  mode: 'light',
  headerTransition: true,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    switchMode: (state, action) => {
      state.mode = action.payload
    },
    toggleHeaderTransition: (state, action) => {
      state.headerTransition = action.payload
    },
  },
})

export const { switchMode, toggleHeaderTransition } = appSlice.actions

export const selectAppState = (state: RootState) => state.app

export default appSlice.reducer
