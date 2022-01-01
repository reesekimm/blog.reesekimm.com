import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'

export type mode = 'light' | 'dark'

interface AppState {
  mode: mode
}

export const initialState: AppState = {
  mode: 'light',
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    switchMode: (state, action) => {
      state.mode = action.payload
    },
  },
})

export const { switchMode } = appSlice.actions

export const selectAppState = (state: RootState) => state.app

export default appSlice.reducer
