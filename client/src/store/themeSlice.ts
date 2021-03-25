import { createSlice } from '@reduxjs/toolkit'
import { PaletteType } from '@material-ui/core'

type ThemeState = {
  paletteType: PaletteType
}

const initialState: ThemeState = {
  paletteType: 'light',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLightPaletteType: state => {
      state.paletteType = 'light'
    },
    setDarkPaletteType: state => {
      state.paletteType = 'dark'
    },
  },
})

export default themeSlice.reducer
export const { setLightPaletteType, setDarkPaletteType } = themeSlice.actions
