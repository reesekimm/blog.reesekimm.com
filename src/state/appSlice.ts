import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'

export type Theme = 'light' | 'dark'

interface AppState {
  theme: Theme
  headerTransition: boolean
}

export const initialState: AppState = {
  theme: 'light',
  headerTransition: true,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.theme = action.payload
    },
    toggleHeaderTransition: (state, action) => {
      state.headerTransition = action.payload
    },
  },
})

export const { toggleTheme, toggleHeaderTransition } = appSlice.actions

export const selectAppState = (state: RootState) => state.app

export default appSlice.reducer
