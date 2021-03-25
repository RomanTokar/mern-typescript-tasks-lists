import React, { useMemo } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Main, SignIn, SignUp } from './pages'
import {
  createMuiTheme,
  MuiThemeProvider,
  PaletteType,
  responsiveFontSizes,
} from '@material-ui/core'
import { State } from './store'
import { useSelector } from 'react-redux'

const App = () => {
  const paletteType = useSelector<State, PaletteType>(
    state => state.theme.paletteType,
  )

  const theme = useMemo(
    () =>
      responsiveFontSizes(
        createMuiTheme({
          palette: {
            type: paletteType,
          },
        }),
      ),
    [paletteType],
  )

  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route exact path={'/signIn'} render={() => <SignIn />} />
        <Route exact path={'/signUp'} render={() => <SignUp />} />
        <Route exact path={'/'} render={() => <Main />} />
      </Switch>
    </MuiThemeProvider>
  )
}

export default App
