import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'

export type Theme = 'light' | 'dark'

interface AppState {
  theme: Theme
  headerTransition: boolean
  selectedTag: string
}

export const initialState: AppState = {
  theme: window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark',
  headerTransition: true,
  selectedTag: 'All',
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
    setSelectedTag: (state, action) => {
      state.selectedTag = action.payload
    },
  },
})

export const { toggleTheme, toggleHeaderTransition, setSelectedTag } =
  appSlice.actions

export const selectAppState = (state: RootState) => state.app

export default appSlice.reducer
