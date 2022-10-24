import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface AppState {
  headerTransition: boolean
  selectedTag: string
}

export const initialState: AppState = {
  headerTransition: true,
  selectedTag: 'All',
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleHeaderTransition: (state, action) => {
      state.headerTransition = action.payload
    },
    setSelectedTag: (state, action) => {
      state.selectedTag = action.payload
    },
  },
})

export const { toggleHeaderTransition, setSelectedTag } = appSlice.actions

export const selectAppState = (state: RootState) => state.app

export default appSlice.reducer
