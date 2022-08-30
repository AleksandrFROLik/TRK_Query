import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const LOCAL_KEY = 'reactFavouriteKey'

interface GithubState {
  favourites: string[]
}

const initialState: GithubState = {
  favourites: JSON.parse(localStorage.getItem(LOCAL_KEY) ?? '[]')
}

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload)
      localStorage.setItem(LOCAL_KEY, JSON.stringify(state.favourites))
    },
    removeFavourite(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter(favourite => favourite !== action.payload)
    }
  }
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer